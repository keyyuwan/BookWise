import { styled } from '@/styles/stitches.config'

export const PageTitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    color: '$green100',
    width: 32,
    height: 32,
  },

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
    fontWeight: '$bold',
  },
})
