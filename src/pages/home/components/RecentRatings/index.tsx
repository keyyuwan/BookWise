import { RatingCard } from '../RatingCard'
import { MostRecentRatings, RatingsList } from './styles'

export function RecentRatings() {
  return (
    <MostRecentRatings>
      <span>Avaliações mais recentes</span>

      <RatingsList>
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </RatingsList>
    </MostRecentRatings>
  )
}
