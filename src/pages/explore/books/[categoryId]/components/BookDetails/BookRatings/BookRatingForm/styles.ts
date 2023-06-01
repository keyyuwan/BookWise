import { styled } from '@/styles/stitches.config'

export const BookRatingFormContainer = styled('form', {
  backgroundColor: '$gray700',
  padding: '$6',
  borderRadius: 8,
})

export const BookRatingFormHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  'div.user': {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
})

export const BookRatingFormTextareaContainer = styled('div', {
  position: 'relative',

  textarea: {
    marginTop: '$6',
    width: '100%',
    height: 164,

    resize: 'none',
    border: '1px solid',
    borderColor: '$gray500',
    backgroundColor: '$gray800',
    borderRadius: 4,
    padding: '14px 20px',

    fontSize: '$sm',
    color: '$gray200',
    lineHeight: '$base',
    outline: 0,

    '&:focus': {
      borderColor: '$green100',
    },
  },

  span: {
    position: 'absolute',
    bottom: 8,
    right: 8,

    fontSize: '$xs',
    color: '$gray400',
    lineHeight: '$base',
  },
})

export const BookRatingFormFooter = styled('div', {
  marginTop: '$3',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 8,

  button: {
    width: 40,
    height: 40,
    borderRadius: 4,
    padding: '$2',
    border: 'none',
    backgroundColor: '$gray600',
    lineHeight: 0,

    '&:hover': {
      backgroundColor: '$gray500',
    },
  },
})

export const FormErrorMessage = styled('p', {
  fontSize: '$sm',
  color: 'red',
  margin: '$1 0',
})
