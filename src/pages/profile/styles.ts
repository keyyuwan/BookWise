import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('div', {
  marginTop: '$10',
  display: 'grid',
  gridTemplateColumns: '480px 1fr',
  marginRight: 96,
})

export const BooksSection = styled('section', {
  paddingBottom: 84,
})

export const BooksRated = styled('div', {
  marginTop: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  time: {
    color: '$gray300',
    fontSize: '$sm',
  },
})

export const BookRatedCard = styled('div', {
  marginTop: '$2',
  padding: '$6',
  backgroundColor: '$gray700',
  borderRadius: 8,

  p: {
    marginTop: '$6',
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  gap: '$6',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  strong: {
    color: '$gray100',
    fontSize: '$lg',
    lineHeight: '$short',
    display: 'block',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const ProfileSection = styled('section', {
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

  '> div': {
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
  },
})
