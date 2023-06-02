import { useQuery } from '@tanstack/react-query'
import { api } from '../api'
import { BookDTO } from '@/dtos/book'

async function getBooks(query: string | null) {
  try {
    const response = await api.get('/books', {
      params: {
        q: query,
      },
    })

    console.log(response.data)

    const { books } = response.data

    return books
  } catch (err) {
    console.log(err)
  }
}

export function useBooks(query: string | null) {
  return useQuery<BookDTO[] | undefined>(
    ['books', query],
    () => getBooks(query),
    {
      enabled: !!query,
      staleTime: 1000 * 60 * 60, // 10 minutes
    },
  )
}
