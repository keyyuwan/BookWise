import { useQuery } from '@tanstack/react-query'
import { api } from '../api'
import { RatingDTO } from '@/dtos/rating'
import { getDateDifferenceRelativeToNow } from '@/utils/get-date-difference-relative-to-now'

async function getUserLastRating() {
  const response = await api.get('/users/last-read')

  const { lastRating } = response.data

  const lastRatingFormatted = {
    ...response.data.lastRating,
    createdAt: getDateDifferenceRelativeToNow(lastRating.createdAt),
  }

  return lastRatingFormatted
}

export function useUserLastRating() {
  return useQuery<RatingDTO>(['last-rating'], getUserLastRating, {
    staleTime: 1000 * 60 * 60, // 10 minutes
  })
}
