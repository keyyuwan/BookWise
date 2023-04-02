import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import { Icon } from 'phosphor-react'

import { NavItemContainer } from './styles'

interface NavItemProps extends LinkProps {
  Icon: Icon
  title: string
}

export function NavItem({ Icon, title, ...rest }: NavItemProps) {
  const router = useRouter()

  const isActive = router.asPath === rest.href

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
