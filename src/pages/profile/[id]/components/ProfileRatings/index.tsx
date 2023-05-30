import { ProfileRating } from './ProfileRating'
import { Rating } from '../../index.page'
import { BooksRated, ProfileRatingsContainer } from './styles'

interface ProfileRatingsProps {
  ratings: Rating[]
  userId: string
}

export function ProfileRatings({ ratings, userId }: ProfileRatingsProps) {
  return (
    <ProfileRatingsContainer>
      <BooksRated>
        {ratings.map((rating) => {
          return <ProfileRating key={rating.id} rating={rating} />
        })}
      </BooksRated>
    </ProfileRatingsContainer>
  )
}
