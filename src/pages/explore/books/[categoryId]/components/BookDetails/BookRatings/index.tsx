import { useState } from 'react'

import { Avatar } from '@/components/Avatar'
import { RatingStars } from '@/components/RatingStars'
import { BookRatingForm } from './BookRatingForm'
import { RatingButton } from './RatingButton'
import {
  BookRating,
  BookRatingUser,
  BookRatingsContainer,
  BookRatingsHeader,
  BookRatingsWrapper,
} from './styles'

export function BookRatings() {
  const [hasRatingForm, setHasRatingForm] = useState(false)

  function handleShowRatingForm() {
    setHasRatingForm(true)
  }

  function handleHideRatingForm() {
    setHasRatingForm(false)
  }

  const isRatingFromUserAuth = false

  return (
    <BookRatingsContainer>
      <BookRatingsHeader>
        <span>Avaliações</span>

        {!hasRatingForm && (
          <RatingButton onShowRatingForm={handleShowRatingForm} />
        )}
      </BookRatingsHeader>

      <BookRatingsWrapper>
        {hasRatingForm && <BookRatingForm onClose={handleHideRatingForm} />}

        <BookRating isLight={isRatingFromUserAuth}>
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

            <RatingStars value={4} readOnly />
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
