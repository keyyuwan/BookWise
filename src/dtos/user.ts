interface Rating {
  id: string
  rate: number
  description: string
  createdAt: string
  book: {
    author: string
    name: string
    coverUrl: string
  }
}

export interface UserDTO {
  name: string
  avatarUrl: string
  memberSince: string
  metrics: {
    pagesReadCount: number
    booksRatedCount: number
    authorsReadCount: number
    mostReadCategory?: string
  }
  ratings: Rating[]
}
