import Image from 'next/legacy/image'
import Link from 'next/link'
import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react'

import {
  Login,
  LogoContainer,
  Navigation,
  NavItem,
  SidebarContainer,
} from './styles'

import logoImg from '@/assets/logo.svg'

export function Sidebar() {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Image
          src={logoImg}
          alt="Book Wise Logo"
          width={128}
          height={32}
          objectFit="cover"
        />
      </LogoContainer>

      <Navigation>
        <NavItem isActive>
          <Link href="/">
            <div>
              <ChartLineUp size={24} weight="bold" />
              <span>Início</span>
            </div>
          </Link>
        </NavItem>
        <NavItem isActive={false}>
          <Link href="/explore">
            <div>
              <Binoculars size={24} weight="bold" />
              <span>Explorar</span>
            </div>
          </Link>
        </NavItem>
      </Navigation>

      <Login href="/login">
        Fazer login
        <SignIn size={20} weight="bold" />
      </Login>
    </SidebarContainer>
  )
}
