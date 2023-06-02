import Image from 'next/legacy/image'

import { RatingStars } from '../RatingStars'
import { BookCardContainer, BookInfo } from './styles'

interface Book {
  coverUrl: string
  name: string
  author: string
  averageRate: number
}

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <BookCardContainer size="small">
      <Image
        src={book.coverUrl}
        alt=""
        width={64}
        height={94}
        objectFit="cover"
      />
      <BookInfo>
        <div>
          <strong>{book.name}</strong>
          <span>{book.author}</span>
        </div>

        <RatingStars value={book.averageRate} readOnly />
      </BookInfo>
    </BookCardContainer>
  )
}
