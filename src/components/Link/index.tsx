import { Icon } from 'phosphor-react'
import NextLink from 'next/link'

import { LinkContainer } from './styles'

interface LinkProps {
  title: string
  Icon: Icon
  size?: 'small' | 'medium'
  color?: 'white' | 'purple'
  isIconBeforeTitle?: boolean
  href?: string
  onClick?: () => void
}

export function Link({
  title,
  Icon,
  size,
  color,
  isIconBeforeTitle = false,
  href,
  onClick,
}: LinkProps) {
  return href ? (
    <LinkContainer as={NextLink} href={href} size={size} color={color}>
      {isIconBeforeTitle && <Icon />}

      <span>{title}</span>

      {!isIconBeforeTitle && <Icon />}
    </LinkContainer>
  ) : (
    <LinkContainer size={size} color={color} onClick={onClick}>
      {isIconBeforeTitle && <Icon />}

      <span>{title}</span>

      {!isIconBeforeTitle && <Icon />}
    </LinkContainer>
  )
}
