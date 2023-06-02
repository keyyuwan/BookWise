import { useQuery } from '@tanstack/react-query'
import { api } from '../api'
import { BookDTO } from '@/dtos/book'

async function getPopularBooks() {
  try {
    const response = await api.get('/books/popular')

    const { books } = response.data

    return books
  } catch (err) {
    console.log(err)
  }
}

export function usePopularBooks() {
  return useQuery<BookDTO[] | undefined>(
    ['books', 'popular'],
    getPopularBooks,
    {
      staleTime: 1000 * 60 * 60, // 10 minutes
    },
  )
}
