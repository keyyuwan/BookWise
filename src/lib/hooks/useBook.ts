import { useQuery } from '@tanstack/react-query'
import { api } from '../api'
import { BookDTO } from '@/dtos/book'
import { getDateDifferenceRelativeToNow } from '@/utils/get-date-difference-relative-to-now'

async function getBook(id: string) {
  try {
    const response = await api.get(`/books/${id}`)

    const { book } = response.data

    const formattedBook: BookDTO = {
      ...book,
      ratings: book.ratings.map((rating: any) => {
        return {
          ...rating,
          createdAt: getDateDifferenceRelativeToNow(rating.createdAt),
        }
      }),
    }

    return formattedBook
  } catch (err) {
    console.log(err)
  }
}

export function useBook(id: string) {
  return useQuery<BookDTO | undefined>(['book', id], () => getBook(id), {
    enabled: !!id,
    staleTime: 1000 * 60 * 60, // 10 minutes
  })
}
