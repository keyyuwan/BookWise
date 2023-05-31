export interface BookDTO {
  id: string
  name: string
  author: string
  coverUrl: string
  averageRate: number
  ratings: {
    user: {
      id: string
    }
  }[]
}
