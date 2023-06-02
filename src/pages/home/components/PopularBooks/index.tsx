import {
  PopularBooksContainer,
  PopularBooksHeader,
  PopularBooksList,
} from './styles'
import { CaretRight } from 'phosphor-react'

import { BookCard } from '@/components/BookCard'
import { Link } from '@/components/Link'
import { usePopularBooks } from '@/lib/hooks/usePopularBooks'

export function PopularBooks() {
  const { data: books } = usePopularBooks()

  return (
    <PopularBooksContainer>
      <PopularBooksHeader>
        <span>Livros populares</span>

        <Link
          href="/explore/books/all"
          title="Ver todos"
          Icon={CaretRight}
          size="small"
          color="purple"
        />
      </PopularBooksHeader>

      <PopularBooksList>
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </PopularBooksList>
    </PopularBooksContainer>
  )
}
