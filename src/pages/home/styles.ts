import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  marginTop: '$10',
  display: 'grid',
  gridTemplateColumns: '480px 1fr',
  gap: 64,
  paddingBottom: '$4',
})

export const SectionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const UserLastRead = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const UserLastReadHeader = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
  },

  a: {
    whiteSpace: 'nowrap',
    fontSize: '$sm',
    color: '$purple100',
    fontWeight: '$bold',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },
})

export const UserLastReadList = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

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

export const PopularBooks = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const PopularBooksList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const PopularBooksHeader = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
  },

  a: {
    whiteSpace: 'nowrap',
    fontSize: '$sm',
    color: '$purple100',
    fontWeight: '$bold',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },
})
