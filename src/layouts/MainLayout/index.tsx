import { ReactNode } from 'react'

import { Sidebar } from '@/components/Sidebar'
import { MainLayoutContainer, SidebarContainer } from './styles'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <MainLayoutContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <main>{children}</main>
    </MainLayoutContainer>
  )
}
