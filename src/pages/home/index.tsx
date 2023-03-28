import Link from 'next/link'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import { MainLayout } from '@/layouts/MainLayout'
import { PageTitle } from '@/components/PageTitle'
import { BookCard } from '@/components/BookCard'
import { RatingCard } from './components/RatingCard'
import {
  HomeContainer,
  MostRecentRatings,
  PopularBooks,
  PopularBooksHeader,
  PopularBooksList,
  RatingsList,
} from './styles'

export default function Home() {
  return (
    <MainLayout>
      <PageTitle title="Início" icon={<ChartLineUp />} />

      <HomeContainer>
        <MostRecentRatings>
          <span>Avaliações mais recentes</span>

          <RatingsList>
            <RatingCard />
            <RatingCard />
            <RatingCard />
          </RatingsList>
        </MostRecentRatings>

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
