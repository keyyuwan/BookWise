import { GetStaticProps } from 'next'

import { RatingDTO } from '@/dtos/rating'
import { api } from '@/lib/api'
import { getDateDifferenceRelativeToNow } from '@/utils/get-date-difference-relative-to-now'

export { default } from './home'

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/ratings/recent')

  const { recentRatings } = response.data

  const formattedRatings = recentRatings.map((rating: RatingDTO) => {
    return {
      ...rating,
      createdAt: getDateDifferenceRelativeToNow(rating.createdAt),
    }
  })

  return {
    props: {
      recentRatings: formattedRatings,
    },
    revalidate: 60 * 60, // 1 hour
  }
}
