import { styled } from '@/styles/stitches.config'

export const RatingCardContainer = styled('div', {
  padding: '$6',
  backgroundColor: '$gray700',
  borderRadius: 8,
  width: '100%',
  border: '2px solid transparent',
  transition: '.2s',

  '&:hover': {
    borderColor: '$gray500',
    backgroundColor: '$gray600',
  },

  variants: {
    isFullCard: {
      true: {},

      false: { height: 280 },
    },
  },
})

export const RatingCardHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const RatingCardRater = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  div: {
    span: {
      lineHeight: '$base',
      display: 'block',
    },

    time: {
      color: '$gray400',
      fontSize: '$sm',
    },
  },
})

export const RatingCardContent = styled('div', {
  marginTop: '$8',
  display: 'grid',
  gridTemplateColumns: '108px auto',
  gap: '$5',

  div: {
    height: 152,

    strong: {
      lineHeight: '$short',
      display: 'block',
    },

    span: {
      color: '$gray400',
      fontSize: '$sm',
    },

    p: {
      marginTop: '$5',
      color: '$gray300',
      fontSize: '$sm',
      lineHeight: '$base',
    },

    button: {
      all: 'unset',
      cursor: 'pointer',
      color: '$purple100',
      fontWeight: '$bold',
    },
  },

  variants: {
    isFullCard: {
      true: {
        div: {
          height: '100%',
        },
      },

      false: {
        div: {
          p: {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-line-clamp': 3,
            '-webkit-box-orient': 'vertical',
          },
        },
      },
    },
  },
})

export const RatingCardBookData = styled('div', {})
