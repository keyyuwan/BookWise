import { styled } from '@/styles/stitches.config'

export const SearchContainer = styled('label', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  border: '1px solid',
  borderColor: '$gray500',
  borderRadius: 4,
  padding: '$4 $5',

  input: {
    width: '100%',
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: '$sm',
    color: '$gray200',
    marginRight: '$4',

    '&::placeholder': {
      color: '$gray400',
    },
  },

  svg: {
    width: 20,
    height: 20,
    color: '$gray500',
  },

  '&:focus-within': {
    borderColor: '$green200',

    svg: {
      color: '$green200',
    },
  },
})
