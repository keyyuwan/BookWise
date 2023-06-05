import Image from 'next/legacy/image'

import { RatingStars } from '@/components/RatingStars'
import { IUserLastRating } from '../UserLastRating'
import { LastReadCardContainer, LastReadContent, Wrapper } from './styles'

interface LastReadCardProps {
  rating: IUserLastRating
}

export function LastReadCard({ rating }: LastReadCardProps) {
  return (
    <LastReadCardContainer>
      <Image
        src={rating.book.coverUrl}
        alt=""
        width={108}
        height={152}
        objectFit="cover"
      />

      <LastReadContent>
        <Wrapper>
          <header>
            <time>{rating.createdAt}</time>
            <RatingStars value={rating.rate} readOnly />
          </header>

          <div>
            <strong>{rating.book.name}</strong>
            <span>{rating.book.author}</span>
          </div>
        </Wrapper>

        <p>{rating.description}</p>
      </LastReadContent>
    </LastReadCardContainer>
  )
}
