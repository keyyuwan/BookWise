import Image from 'next/image'

import { RatingStars } from '@/components/RatingStars'
import { Rating } from '../../../index.page'
import { BookInfo, BookRatedCard, ProfileRatingContainer } from './styles'

interface ProfileRatingProps {
  rating: Rating
}

export function ProfileRating({ rating }: ProfileRatingProps) {
  return (
    <ProfileRatingContainer>
      <time>{rating.createdAt}</time>

      <BookRatedCard>
        <BookInfo>
          <Image src={rating.book.coverUrl} alt="" width={98} height={124} />

          <div>
            <div>
              <strong>{rating.book.name}</strong>
              <span>{rating.book.author}</span>
            </div>

            <RatingStars value={rating.rate} readOnly />
          </div>
        </BookInfo>

        <p>{rating.description}</p>
      </BookRatedCard>
    </ProfileRatingContainer>
  )
}
