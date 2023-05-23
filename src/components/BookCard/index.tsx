import Image from 'next/legacy/image'

import { RatingStars } from '../RatingStars'
import { BookCardContainer, BookInfo } from './styles'
import bookImg from '@/images/books/Book.png'

export function BookCard() {
  return (
    <BookCardContainer size="small">
      <Image src={bookImg} alt="" width={64} height={94} objectFit="cover" />
      <BookInfo>
        <div>
          <strong>A revolução dos bichos</strong>
          <span>George Orwell</span>
        </div>

        <RatingStars value={4} readOnly />
      </BookInfo>
    </BookCardContainer>
  )
}
