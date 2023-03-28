import { styled } from '@/styles/stitches.config'

export const LastReadCardContainer = styled('div', {
  height: 192,
  width: '100%',
  backgroundColor: '$gray600',
  borderRadius: 8,
  padding: '$5 $6',

  display: 'grid',
  gridTemplateColumns: '108px auto',
  gap: '$6',
})

export const LastReadContent = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    time: {
      fontSize: '$sm',
      color: '$gray300',
    },
  },

  div: {
    span: {
      display: 'block',
      fontSize: '$sm',
      color: '$gray400',
    },
  },

  p: {
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: '$base',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
