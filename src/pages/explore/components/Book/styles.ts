import { styled } from '@/styles/stitches.config'

export const BookContainer = styled('button', {
  all: 'unset',
  padding: '$4 $5',
  backgroundColor: '$gray700',
  borderRadius: 8,
  cursor: 'pointer',
  border: '2px solid transparent',

  position: 'relative',

  '&:hover': {
    borderColor: '$gray600',
  },
})

export const BookContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '108px 1fr',
  gap: '$5',
})

export const BookInfo = styled('div', {
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

export const Read = styled('div', {
  backgroundColor: '$green300',
  padding: '$1 $3',
  color: '$green100',
  fontSize: '$xs',
  fontWeight: '$bold',
  textTransform: 'uppercase',
  borderRadius: '0 8px 0 4px',

  position: 'absolute',
  top: 0,
  right: 0,
})
