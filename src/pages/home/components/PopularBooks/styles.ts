import { styled } from '@/styles/stitches.config'

export const PopularBooksContainer = styled('section', {
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
