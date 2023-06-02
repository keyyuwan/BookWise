import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Binoculars } from 'phosphor-react'
import { useSession } from 'next-auth/react'

import { CategoryDTO } from '@/dtos/category'
import { BookDTO } from '@/dtos/book'
import { api } from '@/lib/api'
import { useBooks } from '@/lib/hooks/useBooks'
import { useDebounce } from '@/hooks/useDebounce'
import { MainLayout } from '@/layouts/MainLayout'
import { PageTitle } from '@/components/PageTitle'
import { Search } from '@/components/Search'
import { Book } from './components/Book'
import { Categories } from './components/Categories'

import { BooksWrapper, ExploreHeader, SearchText } from './styles'

interface ExporeProps {
  categories: CategoryDTO[]
  books: BookDTO[]
}

export default function Explore({ categories, books }: ExporeProps) {
  const { data: session } = useSession()
  const [query, setQuery] = useState<string | null>(null)
  const debouncedQuery = useDebounce(query)

  const { data: queriedBooks, refetch } = useBooks(debouncedQuery)

  const booksToShow = debouncedQuery ? queriedBooks : books

  function getReadState(book: BookDTO) {
    return book.ratings.some((rating) => rating.user.id === session?.user.id)
  }

  useEffect(() => {
    refetch()
  }, [debouncedQuery, refetch])

  return (
    <MainLayout>
      <ExploreHeader>
        <PageTitle
          icon={<Binoculars size={32} weight="bold" />}
          title="Explorar"
        />
        <Search
          placeholder="Buscar livro ou autor"
          value={query || ''}
          onChange={(event) => setQuery(event.target.value)}
        />
      </ExploreHeader>

      {debouncedQuery ? (
        <SearchText>Busca por: {query}</SearchText>
      ) : (
        <Categories categories={categories} />
      )}

      <BooksWrapper>
        {booksToShow?.map((book) => {
          return <Book key={book.id} book={book} isRead={getReadState(book)} />
        })}
      </BooksWrapper>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categoriesResponse = await api.get('/categories')
  const { categories } = categoriesResponse.data

  const categoryId = params?.categoryId

  const booksResponse = await api.get(`/books/categories/${categoryId}`)
  const { books } = booksResponse.data

  return {
    props: {
      categories,
      books,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
