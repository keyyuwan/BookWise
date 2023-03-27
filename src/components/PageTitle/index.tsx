import { ReactElement } from 'react'
import { PageTitleContainer } from './styles'

interface PageTitleProps {
  title: string
  icon: ReactElement
}

export function PageTitle({ title, icon }: PageTitleProps) {
  return (
    <PageTitleContainer>
      {icon}
      <h1>{title}</h1>
    </PageTitleContainer>
  )
}
