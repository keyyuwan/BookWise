import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ptBR from 'dayjs/locale/pt-br'

import { UserDTO } from '@/dtos/user'
import { api } from '../api'

dayjs.extend(relativeTime)
dayjs.locale(ptBR)

async function getProfile(userId: string, query: string | null) {
  try {
    const { data } = await api.get<{ user: UserDTO }>(`/users/${userId}`, {
      params: {
        q: query ?? '',
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
  } catch (err) {
    console.log(err)
  }
}

export function useProfile(userId: string, query: string | null) {
  return useQuery(['profile', userId], () => getProfile(userId, query), {
    enabled: !!userId,
    staleTime: 1000 * 60 * 60, // 10 minutes
  })
}
