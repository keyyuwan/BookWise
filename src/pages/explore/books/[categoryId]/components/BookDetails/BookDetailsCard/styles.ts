import { styled } from '@/styles/stitches.config'

export const BookDetailsCardContainer = styled('div', {
  padding: '$6 $8 $4 $8',
  backgroundColor: '$gray700',
  borderRadius: '$md',
})

export const BookInfo = styled('div', {
  display: 'grid',
  gridTemplateColumns: '172px 1fr',
  gap: '$8',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

export const BookInfoData = styled('div', {
  strong: {
    fontSize: '$lg',
    display: 'block',
    lineHeight: '$short',
  },

  span: {
    color: '$gray300',
  },
})

export const BookInfoRating = styled('div', {
  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const BookData = styled('div', {
  padding: '$6 0',
  marginTop: '$10',
  display: 'flex',
  alignItems: 'center',
  gap: 56,

  borderTop: '1px solid',
  borderTopColor: '$gray600',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: 16,

    svg: {
      color: '$green100',
      width: 24,
      height: 24,
    },

    span: {
      display: 'block',
      color: '$gray300',
      fontSize: '$sm',
      lineHeight: '$short',
    },

    'strong.total-pages': {
      color: '$gray200',
    },
  },
})

export const CategoryText = styled('strong', {
  '&::after': {
    content: ', ',
  },

  '&:last-child::after': {
    content: '""',
  },
})
