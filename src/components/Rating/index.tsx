import { ButtonHTMLAttributes } from 'react'
import { Star } from 'phosphor-react'
import { RatingContainer } from './styles'

interface RatingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rating: number
  readOnly?: boolean
}

export function Rating({ rating, readOnly = true, ...rest }: RatingProps) {
  return (
    <RatingContainer readOnly={readOnly}>
      {Array.from({ length: 5 }).map((_, index) => {
        index += 1

        return (
          <button key={index} {...rest}>
            <Star weight={rating >= index ? 'fill' : 'regular'} />
          </button>
        )
      })}
    </RatingContainer>
  )
}
