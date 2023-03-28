import Image from 'next/legacy/image'
import Link from 'next/link'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { useSession, signOut } from 'next-auth/react'

import { Avatar } from '../Avatar'
import {
  Login,
  LogoContainer,
  LogoutContainer,
  Navigation,
  NavItem,
  SidebarContainer,
} from './styles'

import logoImg from '@/assets/logo.svg'

export function Sidebar() {
  const { status } = useSession()

  const isAuthenticated = status === 'authenticated'

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
        {isAuthenticated && (
          <NavItem isActive={false}>
            <Link href="/profile">
              <div>
                <User size={24} weight="bold" />
                <span>Perfil</span>
              </div>
            </Link>
          </NavItem>
        )}
      </Navigation>

      {isAuthenticated ? (
        <LogoutContainer>
          <Avatar src="https://github.com/keyyuwan.png" alt="" size="small" />
          <span>Key</span>
          <button onClick={() => signOut()}>
            <SignOut weight="bold" color="#f75a68" />
          </button>
        </LogoutContainer>
      ) : (
        <Login href="/login">
          Fazer login
          <SignIn size={20} weight="bold" />
        </Login>
      )}
    </SidebarContainer>
  )
}
