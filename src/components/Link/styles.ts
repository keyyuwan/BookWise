import { styled } from '@/styles/stitches.config'

export const LinkContainer = styled('button', {
  all: 'unset',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$1 $2',
  cursor: 'pointer',
  width: 'fit-content',

  span: {
    fontWeight: '$bold',
  },

  '&:hover': {
    borderRadius: 4,
    transition: '.2s',
  },

  variants: {
    size: {
      small: {
        span: {
          fontSize: '$sm',
        },

        svg: {
          width: '$4',
          height: '$4',
        },
      },

      medium: {
        span: {
          fontSize: '$md',
        },

        svg: {
          width: '$5',
          height: '$5',
        },
      },
    },

    color: {
      white: {
        color: '$gray200',

        '&:hover': {
          background: '#E6E8F20A',
        },
      },

      purple: {
        color: '$gray100',

        '&:hover': {
          background: '#8381D90F',
        },
      },
    },
  },

  defaultVariants: {
    size: 'small',
    color: 'purple',
  },
})
