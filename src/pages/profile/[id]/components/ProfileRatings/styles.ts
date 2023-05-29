import { styled } from '@/styles/stitches.config'

export const ProfileRatingsContainer = styled('section', {
  paddingBottom: 84,
})

export const BooksRated = styled('div', {
  marginTop: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  time: {
    color: '$gray300',
    fontSize: '$sm',
  },
})
