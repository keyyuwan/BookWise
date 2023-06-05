import Image from 'next/legacy/image'

import { RatingDTO } from '@/dtos/rating'
import { Avatar } from '@/components/Avatar'
import { RatingStars } from '@/components/RatingStars'
import {
  RatingCardContainer,
  RatingCardContent,
  RatingCardHeader,
  RatingCardRater,
} from './styles'

interface RatingCardProps {
  rating: RatingDTO
}

export function RatingCard({ rating }: RatingCardProps) {
  return (
    <RatingCardContainer>
      <RatingCardHeader>
        <RatingCardRater>
          <Avatar
            src={rating.user.avatarUrl}
            alt={rating.user.name}
            size="medium"
          />

          <div>
            <span>{rating.user.name}</span>
            <time>{rating.createdAt}</time>
          </div>
        </RatingCardRater>

        <RatingStars value={rating.rate} readOnly />
      </RatingCardHeader>

      <RatingCardContent>
        <Image
          src={rating.book.coverUrl}
          alt={rating.book.name}
          width={108}
          height={152}
          objectFit="cover"
        />

        <div>
          <strong>{rating.book.name}</strong>
          <span>{rating.book.author}</span>

          <p>{rating.description}</p>
        </div>
      </RatingCardContent>
    </RatingCardContainer>
  )
}
