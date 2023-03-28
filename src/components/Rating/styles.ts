import { styled } from '@/styles/stitches.config'

export const RatingContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',

  button: {
    all: 'unset',
    lineHeight: 0,

    svg: {
      color: '$purple100',
    },
  },

  variants: {
    readOnly: {
      true: {},

      false: {
        button: {
          cursor: 'pointer',
        },
      },
    },
  },
})
