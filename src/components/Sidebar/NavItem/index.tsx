import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import { Icon } from 'phosphor-react'

import { NavItemContainer } from './styles'

interface NavItemProps extends LinkProps {
  Icon: Icon
  title: string
  shouldMatchExactRef?: boolean
}

export function NavItem({
  Icon,
  title,
  shouldMatchExactRef = true,
  ...rest
}: NavItemProps) {
  const { asPath } = useRouter()

  let isActive = false

  if (shouldMatchExactRef && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (
    (!shouldMatchExactRef && asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as))
  ) {
    isActive = true
  }

  return (
    <NavItemContainer isActive={isActive}>
      <Link {...rest}>
        <div>
          <Icon size={24} weight="bold" />
          <span>{title}</span>
        </div>
      </Link>
    </NavItemContainer>
  )
}
