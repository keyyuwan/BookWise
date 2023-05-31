import { BookDetailsCard } from './BookDetailsCard'
import { BookRatings } from './BookRatings'
import { BookDetailsContainer } from './styles'

export function BookDetails() {
  return (
    <BookDetailsContainer>
      <BookDetailsCard />

      <BookRatings />
    </BookDetailsContainer>
  )
}
