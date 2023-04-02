import { ComponentProps } from 'react'
import { User } from 'phosphor-react'

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: 'small' | 'medium' | 'large'
}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer size={props.size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
