import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  marginTop: '$10',
  display: 'grid',
  gridTemplateColumns: '480px 1fr',
  gap: 64,
  paddingBottom: '$4',
})

export const SectionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})
