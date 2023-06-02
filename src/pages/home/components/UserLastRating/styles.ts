import { styled } from '@/styles/stitches.config'

export const UserLastRatingContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const UserLastRatingHeader = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
  },
})

export const UserLastRatingList = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
