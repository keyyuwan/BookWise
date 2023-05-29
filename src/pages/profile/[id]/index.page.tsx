import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ptBR from 'dayjs/locale/pt-br'

import { UserDTO } from '@/dtos/user'
import { api } from '@/lib/api'
import { MainLayout } from '@/layouts/MainLayout'
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

interface ProfileProps {
  user: User
}

export default function Profile({ user }: ProfileProps) {
  const { data: session } = useSession()
  const router = useRouter()

  function handleGoBack() {
    router.back()
  }

  const userId = String(router.query.id)

  const isUserAuthProfile = userId === session?.user.id

  console.log(user)

  return (
    <MainLayout>
      <ProfileHeader
        isUserAuthProfile={isUserAuthProfile}
        onGoBack={handleGoBack}
      />

      <ProfileContainer>
        <ProfileRatings ratings={user.ratings} />

        <ProfileInfo user={user} />
      </ProfileContainer>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userId = String(ctx.params?.id)

  try {
    const { data } = await api.get<{ user: UserDTO }>(`/users/${userId}`)

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

    return {
      props: {
        user,
      },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}
