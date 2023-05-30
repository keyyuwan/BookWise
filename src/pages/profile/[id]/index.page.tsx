import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { MainLayout } from '@/layouts/MainLayout'
import { useDebounce } from '@/hooks/useDebounce'
import { Search } from '@/components/Search'
import { ProfileHeader } from './components/ProfileHeader'
import { ProfileRatings } from './components/ProfileRatings'
import { ProfileInfo } from './components/ProfileInfo'
import { EmptyRatings } from './components/EmptyRatings'
import { ProfileContainer } from './styles'
import { useProfile } from '@/lib/hooks/useProfile'

export interface Rating {
  id: string
  rate: number
  description: string
  createdAt: string
  book: {
    author: string
    name: string
    coverUrl: string
  }
}

export interface User {
  name: string
  avatarUrl: string
  memberSince: string
  metrics: {
    pagesReadCount: number
    booksRatedCount: number
    authorsReadCount: number
    mostReadCategory: string
  }
  ratings: Rating[]
}

export default function Profile() {
  const [query, setQuery] = useState<string | null>(null)
  const debouncedQuery = useDebounce(query)

  const { data: session } = useSession()
  const router = useRouter()

  function handleGoBack() {
    router.back()
  }

  const userId = String(router.query.id)
  const isUserAuthProfile = userId === session?.user.id

  const { data: user, isLoading, refetch } = useProfile(userId, query)

  useEffect(() => {
    refetch()
  }, [debouncedQuery, refetch])

  const hasEmptyRatings = user?.ratings.length === 0

  return (
    <MainLayout>
      <ProfileHeader
        isUserAuthProfile={isUserAuthProfile}
        onGoBack={handleGoBack}
      />

      <ProfileContainer>
        {hasEmptyRatings ? (
          <EmptyRatings />
        ) : (
          <div>
            <Search
              placeholder="Buscar livro avaliado"
              value={query || ''}
              onChange={(event) => setQuery(event.target.value)}
            />

            {isLoading ? null : (
              <ProfileRatings ratings={user!.ratings} userId={userId} />
            )}
          </div>
        )}

        {isLoading ? null : <ProfileInfo user={user!} />}
      </ProfileContainer>
    </MainLayout>
  )
}
