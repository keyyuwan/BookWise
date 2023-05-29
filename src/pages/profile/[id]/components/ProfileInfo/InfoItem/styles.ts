import { styled } from '@/styles/stitches.config'

export const InfoItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    width: 32,
    height: 32,
    color: '$green100',
  },

  strong: {
    color: '$gray200',
    lineHeight: '$short',
    display: 'block',
  },

  span: {
    color: '$gray300',
    fontSize: '$sm',
  },
})
