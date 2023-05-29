import { styled } from '@/styles/stitches.config'

export const ProfileInfoContainer = styled('section', {
  marginLeft: 64,
  paddingLeft: 64,
  borderLeft: '1px solid',
  borderColor: '$gray700',
  height: 555,
})

export const UserProfile = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$5',
  textAlign: 'center',

  '&::after': {
    content: '',
    display: 'inline-block',
    margin: '$8 0',
    height: 4,
    width: 32,
    borderRadius: '$full',
    background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
  },

  strong: {
    fontSize: '$xl',
    display: 'block',
    lineHeight: '$short',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const UserBooksData = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})
