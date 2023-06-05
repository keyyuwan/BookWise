import { RatingDTO } from '@/dtos/rating'
import { RatingCard } from '../RatingCard'
import { MostRecentRatings, RatingsList } from './styles'

interface RecentRatingsProps {
  recentRatings: RatingDTO[]
}

export function RecentRatings({ recentRatings }: RecentRatingsProps) {
  return (
    <MostRecentRatings>
      <span>Avaliações mais recentes</span>

      <RatingsList>
        {recentRatings.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </RatingsList>
    </MostRecentRatings>
  )
}
