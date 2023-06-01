import { useBook } from '@/lib/hooks/useBook'
import { BookDetailsCard } from './BookDetailsCard'
import { BookRatings } from './BookRatings'
import { BookDetailsContainer } from './styles'

interface BookDetailsProps {
  bookId: string
}

export function BookDetails({ bookId }: BookDetailsProps) {
  const { data: book, isLoading } = useBook(bookId)

  if (isLoading) {
    return null
  }

  return (
    <BookDetailsContainer>
      <BookDetailsCard book={book!} />

      <BookRatings ratings={book!.ratings} />
    </BookDetailsContainer>
  )
}
