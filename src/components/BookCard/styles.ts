import { styled } from '@/styles/stitches.config'

export const BookCardContainer = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: 8,
  width: '100%',
  padding: '$4 $5',
  display: 'flex',
  gap: '$5',
  border: '2px solid transparent',
  transition: '.2s',

  img: {
    borderRadius: 4,
  },

  variants: {
    size: {
      small: {
        height: 130,
      },

      big: {},
    },
  },
})

export const BookInfo = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    color: '$gray400',
    lineHeight: '$base',
    display: 'block',
  },
})
