import { styled } from '@/styles/stitches.config'

import loginImg from '@/assets/login.png'

export const LoginContainer = styled('div', {
  padding: '$5 0 $5 $5',
  display: 'grid',
  gridTemplateColumns: '598px auto',

  height: '100vh',
  width: '100vw',
})

export const ImageContainer = styled('div', {
  height: '100%',
  width: '100%',
  borderRadius: '$md',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundImage: `url(${loginImg.src})`,
  objectFit: 'cover',
  backgroundPosition: 'bottom',
})

export const LoginBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Greetings = styled('div', {
  strong: {
    fontSize: '$2xl',
  },

  p: {
    color: '$gray200',
  },
})

export const LoginOptions = styled('div', {
  marginTop: '$10',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  button: {
    width: 348,
    color: '$gray200',
    backgroundColor: '$gray600',
    border: 0,
    borderRadius: 8,
    padding: '$5 $6',
    fontWeight: '$bold',
    fontSize: '$lg',

    display: 'flex',
    alignItems: 'center',
    gap: '$5',
  },
})
