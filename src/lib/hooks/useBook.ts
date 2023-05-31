import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

async function getBook(id: string) {
  try {
    const response = await api.get(`/books/${id}`)

    const { book } = response.data

    return book
  } catch (err) {
    console.log(err)
  }
}

export function useBook(id: string) {
  return useQuery(['book', id], () => getBook(id), {
    enabled: !!id,
    staleTime: 1000 * 60 * 60, // 10 minutes
  })
}
