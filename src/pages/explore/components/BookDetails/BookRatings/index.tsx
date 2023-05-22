import { Avatar } from '@/components/Avatar'
import {
  BookRating,
  BookRatingUser,
  BookRatingsContainer,
  BookRatingsHeader,
  BookRatingsWrapper,
} from './styles'

export function BookRatings() {
  return (
    <BookRatingsContainer>
      <BookRatingsHeader>
        <span>Avaliações</span>
        <button>Avaliar</button>
      </BookRatingsHeader>

      <BookRatingsWrapper>
        <BookRating>
          <div>
            <BookRatingUser>
              <Avatar
                src="https://github.com/keyyuwan.png"
                alt=""
                size="medium"
              />

              <div>
                <strong>Key Yu Wan</strong>
                <span>Há 2 dias</span>
              </div>
            </BookRatingUser>

            <span>avaliações</span>
          </div>

          <p>
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit
            porta eget nec vitae sit vulputate eget
          </p>
        </BookRating>
      </BookRatingsWrapper>
    </BookRatingsContainer>
  )
}
