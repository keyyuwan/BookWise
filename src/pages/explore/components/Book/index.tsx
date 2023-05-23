import Image from 'next/image'

import { RatingStars } from '@/components/RatingStars'
import { BookContainer, BookContent, BookInfo, Read } from './styles'
import bookImg from '@/images/books/Book.png'

interface BookProps {
  isRead?: boolean
}

export function Book({ isRead = false }: BookProps) {
  return (
    <BookContainer>
      {isRead && <Read>lido</Read>}

      <BookContent>
        <Image
          src={bookImg}
          alt=""
          width={108}
          height={152}
          objectFit="cover"
        />

        <BookInfo>
          <div>
            <strong>A revolução dos bichos</strong>
            <span>George Orwell</span>
          </div>

          <RatingStars value={4} readOnly />
        </BookInfo>
      </BookContent>
    </BookContainer>
  )
}
