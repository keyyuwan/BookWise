import Link from 'next/link'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import { MainLayout } from '@/layouts/MainLayout'
import { PageTitle } from '@/components/PageTitle'
import { BookCard } from '@/components/BookCard'
import { RatingCard } from './components/RatingCard'
import { LastReadCard } from './components/LastReadCard'
import {
  HomeContainer,
  MostRecentRatings,
  PopularBooks,
  PopularBooksHeader,
  PopularBooksList,
  RatingsList,
  SectionWrapper,
  UserLastRead,
  UserLastReadHeader,
  UserLastReadList,
} from './styles'

export default function Home() {
  const isAuthenticated = false

  return (
    <MainLayout>
      <PageTitle title="Início" icon={<ChartLineUp />} />

      <HomeContainer>
        <SectionWrapper>
          {isAuthenticated && (
            <UserLastRead>
              <UserLastReadHeader>
                <span>Sua última leitura</span>
                <Link href="/profile">
                  Ver todas
                  <CaretRight size={16} />
                </Link>
              </UserLastReadHeader>

              <UserLastReadList>
                <LastReadCard />
              </UserLastReadList>
            </UserLastRead>
          )}

          <MostRecentRatings>
            <span>Avaliações mais recentes</span>

            <RatingsList>
              <RatingCard />
              <RatingCard />
              <RatingCard />
            </RatingsList>
          </MostRecentRatings>
        </SectionWrapper>

        <PopularBooks>
          <PopularBooksHeader>
            <span>Livros populares</span>
            <Link href="/explore">
              Ver todos
              <CaretRight size={16} />
            </Link>
          </PopularBooksHeader>

          <PopularBooksList>
            <BookCard />
            <BookCard />
            <BookCard />
          </PopularBooksList>
        </PopularBooks>
      </HomeContainer>
    </MainLayout>
  )
}
