export interface RatingDTO {
  id: string
  rate: number
  description: string
  createdAt: string
  book: {
    coverUrl: string
    name: string
    author: string
  }
  user: {
    avatarUrl: string
    name: string
  }
}
