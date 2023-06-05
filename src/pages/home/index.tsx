import { ChartLineUp } from 'phosphor-react'

import { useUserLastRating } from '@/lib/hooks/useUserLastRating'
import { MainLayout } from '@/layouts/MainLayout'
import { PageTitle } from '@/components/PageTitle'
import { PopularBooks } from './components/PopularBooks'
import { UserLastRating } from './components/UserLastRating'
import { RecentRatings } from './components/RecentRatings'
import { HomeContainer, SectionWrapper } from './styles'

export default function Home() {
  const { data: userLastRating, isLoading: isLoadingUserLastRating } =
    useUserLastRating()

  const hasUserLastRating =
    userLastRating && Object.keys(userLastRating).length > 0

  return (
    <MainLayout>
      <PageTitle title="Início" icon={<ChartLineUp />} />

      <HomeContainer>
        <SectionWrapper>
          {isLoadingUserLastRating || !hasUserLastRating ? null : (
            <UserLastRating rating={userLastRating} />
          )}

          <RecentRatings />
        </SectionWrapper>

        <PopularBooks />
      </HomeContainer>
    </MainLayout>
  )
}
