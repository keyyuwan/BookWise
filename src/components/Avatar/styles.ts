import { styled } from '@/styles/stitches.config'
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: 40,
  height: 40,
  overflow: 'hidden',

  background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
  border: '1px solid transparent',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray500',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
