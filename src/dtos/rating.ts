export interface RatingDTO {
  rate: number
  description: string
  createdAt: string
  book: {
    coverUrl: string
    name: string
    author: string
  }
}
