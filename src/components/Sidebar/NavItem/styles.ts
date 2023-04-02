import { styled } from '@/styles/stitches.config'

export const NavItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  a: {
    textDecoration: 'none',
    color: '$gray400',

    div: {
      display: 'flex',
      alignItems: 'center',
      gap: '$3',
      lineHeight: '$base',
    },
  },

  '&:hover': {
    a: {
      div: {
        color: '$white',
      },
    },
  },

  variants: {
    isActive: {
      true: {
        '&::before': {
          content: '',
          display: 'inline-block',
          height: 24,
          width: 4,
          borderRadius: '$full',
          background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
        },

        div: {
          color: '$white',

          span: {
            fontWeight: '$bold',
          },
        },
      },

      false: {
        div: {
          color: '$gray400',

          span: {
            fontWeight: '$regular',
          },
        },
      },
    },
  },
})
