import { ChartLineUp } from 'phosphor-react'

import { MainLayout } from '@/layouts/MainLayout'
import { PageTitle } from '@/components/PageTitle'

export default function Home() {
  return (
    <MainLayout>
      <PageTitle title="Início" icon={<ChartLineUp />} />
    </MainLayout>
  )
}
