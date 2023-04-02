import Image from 'next/legacy/image'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { useSession, signOut } from 'next-auth/react'

import { Avatar } from '../Avatar'
import { NavItem } from './NavItem'
import {
  Login,
  LogoContainer,
  LogoutContainer,
  Navigation,
  SidebarContainer,
} from './styles'

import logoImg from '@/assets/logo.svg'

export function Sidebar() {
  const { status, data } = useSession()

  const isAuthenticated = status === 'authenticated'
  const userFirstName = data?.user?.name?.split(' ')[0]

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
        <NavItem Icon={ChartLineUp} title="Início" href="/" />
        <NavItem Icon={Binoculars} title="Explorar" href="/explore" />

        {isAuthenticated && (
          <NavItem Icon={User} title="Perfil" href="/profile" />
        )}
      </Navigation>

      {isAuthenticated ? (
        <LogoutContainer>
          <Avatar
            src={data?.user?.avatar_url || undefined}
            alt=""
            size="small"
          />
          <span>{userFirstName}</span>
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
