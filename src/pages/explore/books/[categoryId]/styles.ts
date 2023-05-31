import { styled } from '@/styles/stitches.config'

export const ExploreHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CategoriesWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',

  marginTop: 54,
})

export const BooksWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$5',

  marginTop: 48,
  paddingBottom: '$4',
})
