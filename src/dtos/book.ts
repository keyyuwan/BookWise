export interface BookDTO {
  id: string
  name: string
  author: string
  coverUrl: string
  averageRate: number
  ratingsCount: number
  totalPages: number
  categories: {
    category: {
      name: string
    }
  }[]
  ratings: {
    id: string
    rate: number
    createdAt: string
    description: string
    user: {
      id: string
      name: string
      avatarUrl: string
    }
  }[]
}
