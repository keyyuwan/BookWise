import { GetStaticPaths, GetStaticProps } from 'next'
import { Binoculars } from 'phosphor-react'
import { useSession } from 'next-auth/react'

import { CategoryDTO } from '@/dtos/category'
import { BookDTO } from '@/dtos/book'
import { api } from '@/lib/api'
import { MainLayout } from '@/layouts/MainLayout'
import { PageTitle } from '@/components/PageTitle'
import { Search } from '@/components/Search'
import { Category } from './components/Category'
import { Book } from './components/Book'

import { BooksWrapper, CategoriesWrapper, ExploreHeader } from './styles'

interface ExporeProps {
  categories: CategoryDTO[]
  books: BookDTO[]
}

export default function Expore({ categories, books }: ExporeProps) {
  const { data: session } = useSession()

  function getReadState(book: BookDTO) {
    return book.ratings.some((rating) => rating.user.id === session?.user.id)
  }

  return (
    <MainLayout>
      <ExploreHeader>
        <PageTitle
          icon={<Binoculars size={32} weight="bold" />}
          title="Explorar"
        />
        <Search placeholder="Buscar livro ou autor" />
      </ExploreHeader>

      <CategoriesWrapper>
        <Category name="Tudo" href="/explore/books/all" />

        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              name={category.name}
              href={`/explore/books/${category.id}`}
            />
          )
        })}
      </CategoriesWrapper>

      <BooksWrapper>
        {books.map((book) => {
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

  const booksResponse = await api.get(`/books/${categoryId}`)
  const { books } = booksResponse.data

  return {
    props: {
      categories,
      books,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
