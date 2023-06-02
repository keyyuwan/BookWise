import { ChartLineUp } from 'phosphor-react'

import { MainLayout } from '@/layouts/MainLayout'
import { PageTitle } from '@/components/PageTitle'
import { PopularBooks } from './components/PopularBooks'
import { UserLastRating } from './components/UserLastRating'
import { RecentRatings } from './components/RecentRatings'
import { HomeContainer, SectionWrapper } from './styles'

export default function Home() {
  const hasLastRead = true

  return (
    <MainLayout>
      <PageTitle title="Início" icon={<ChartLineUp />} />

      <HomeContainer>
        <SectionWrapper>
          {hasLastRead && <UserLastRating />}

          <RecentRatings />
        </SectionWrapper>

        <PopularBooks />
      </HomeContainer>
    </MainLayout>
  )
}
