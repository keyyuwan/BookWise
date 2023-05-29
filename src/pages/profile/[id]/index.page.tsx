import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ptBR from 'dayjs/locale/pt-br'
import { useQuery } from '@tanstack/react-query'

import { UserDTO } from '@/dtos/user'
import { api } from '@/lib/api'
import { MainLayout } from '@/layouts/MainLayout'
import { useDebounce } from '@/hooks/useDebounce'
import { Search } from '@/components/Search'
import { ProfileHeader } from './components/ProfileHeader'
import { ProfileRatings } from './components/ProfileRatings'
import { ProfileInfo } from './components/ProfileInfo'
import { ProfileContainer } from './styles'

dayjs.extend(relativeTime)
dayjs.locale(ptBR)

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

  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery(
    ['profile', userId],
    async () => {
      const { data } = await api.get<{ user: UserDTO }>(`/users/${userId}`, {
        params: {
          q: query,
        },
      })

      const user: UserDTO = {
        ...data.user,
        memberSince: dayjs(data.user.memberSince).format('YYYY'),
        ratings: data.user.ratings.map((rating) => {
          return {
            ...rating,
            createdAt: dayjs(rating.createdAt).fromNow(),
          }
        }),
      }

      return user
    },
    {
      enabled: !!userId,
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    },
  )

  useEffect(() => {
    refetch()
  }, [debouncedQuery, refetch])

  return (
    <MainLayout>
      <ProfileHeader
        isUserAuthProfile={isUserAuthProfile}
        onGoBack={handleGoBack}
      />

      <ProfileContainer>
        <div>
          <Search
            placeholder="Buscar livro avaliado"
            value={query || ''}
            onChange={(event) => setQuery(event.target.value)}
          />

          {isLoading ? (
            <p>Carregando</p>
          ) : (
            <ProfileRatings ratings={user!.ratings} userId={userId} />
          )}
        </div>

        {isLoading ? <p>Carregando</p> : <ProfileInfo user={user!} />}
      </ProfileContainer>
    </MainLayout>
  )
}
