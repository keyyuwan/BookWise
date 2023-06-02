import { styled } from '@/styles/stitches.config'

export const MostRecentRatings = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  span: {
    fontSize: '$sm',
  },
})

export const RatingsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
