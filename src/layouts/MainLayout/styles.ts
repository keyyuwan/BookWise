import { styled } from '@/styles/stitches.config'

export const MainLayoutContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '232px auto',

  height: '200vh',
})

export const SidebarContainer = styled('div', {
  padding: '$5 0 $4 $5',

  position: 'sticky',
  top: 0,

  width: '100%',
  height: '100vh',
})
