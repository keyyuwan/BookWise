import { Rating, RoundedStar, RatingProps } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

interface RatingStarsProps extends RatingProps {
  value: number
}

export function RatingStars({ ...rest }: RatingStarsProps) {
  return (
    <Rating
      style={{ maxWidth: 96 }}
      itemStyles={{
        itemShapes: RoundedStar,
        activeFillColor: '#8381D9',
        inactiveStrokeColor: '#8381D9',
        activeStrokeColor: '#8381D9',
        itemStrokeWidth: 2,
      }}
      {...rest}
    />
  )
}
