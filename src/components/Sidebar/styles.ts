import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

import sidebarBackground from '@/assets/sidebar-background.png'

export const SidebarContainer = styled('aside', {
  width: '100%',
  height: '100%',
  borderRadius: 12,
  padding: '$10 48px $6',
  display: 'flex',
  flexDirection: 'column',

  backgroundImage: `url(${sidebarBackground.src})`,
})

export const LogoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Navigation = styled('nav', {
  marginTop: 64,
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

export const Login = styled(Link, {
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  textDecoration: 'none',
  color: '$gray200',
  fontWeight: '$bold',

  svg: {
    color: '$green100',
  },
})

export const LogoutContainer = styled('div', {
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  span: {
    fontSize: '$sm',
    color: '$gray200',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
    lineHeight: 0,

    svg: {
      height: '$7',
      width: '$7',
    },
  },
})
