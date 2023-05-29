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

export const BookRated = styled('div', {
  time: {
    textTransform: 'capitalize',
  },
})

export const BookRatedCard = styled('div', {
  marginTop: '$2',
  padding: '$6',
  backgroundColor: '$gray700',
  borderRadius: 8,

  p: {
    marginTop: '$6',
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  gap: '$6',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  strong: {
    color: '$gray100',
    fontSize: '$lg',
    lineHeight: '$short',
    display: 'block',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})
