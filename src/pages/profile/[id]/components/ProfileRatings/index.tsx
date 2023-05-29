import Image from 'next/image'

import { Search } from '@/components/Search'
import { RatingStars } from '@/components/RatingStars'
import { EmptyRatings } from '../EmptyRatings'
import { Rating } from '../../index.page'
import {
  BookInfo,
  BookRated,
  BookRatedCard,
  BooksRated,
  ProfileRatingsContainer,
} from './styles'

interface ProfileRatingsProps {
  ratings: Rating[]
}

export function ProfileRatings({ ratings }: ProfileRatingsProps) {
  if (ratings.length === 0) {
    return <EmptyRatings />
  }

  return (
    <ProfileRatingsContainer>
      <Search placeholder="Buscar livro avaliado" />

      <BooksRated>
        {ratings.map((rating) => {
          return (
            <BookRated key={rating.id}>
              <time>{rating.createdAt}</time>

              <BookRatedCard>
                <BookInfo>
                  <Image
                    src={rating.book.coverUrl}
                    alt=""
                    width={98}
                    height={124}
                  />

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
            </BookRated>
          )
        })}
      </BooksRated>
    </ProfileRatingsContainer>
  )
}
