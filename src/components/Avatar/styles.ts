import { styled } from '@/styles/stitches.config'
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
  border: '1px solid transparent',

  variants: {
    size: {
      small: {
        width: 32,
        height: 32,
      },

      medium: {
        width: 40,
        height: 40,
      },

      large: {
        width: 72,
        height: 72,
      },
    },
  },
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
