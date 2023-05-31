import Image from 'next/image'
import { BookOpen, BookmarkSimple } from 'phosphor-react'

import { RatingStars } from '@/components/RatingStars'
import {
  BookData,
  BookDetailsCardContainer,
  BookInfo,
  BookInfoData,
  BookInfoRating,
  CategoryText,
} from './styles'

interface Category {
  category: {
    name: string
  }
}

interface Book {
  coverUrl: string
  name: string
  author: string
  totalPages: number
  averageRate: number
  ratingsCount: number
  categories: Category[]
}

interface BookDetailsCardProps {
  book: Book
}

export function BookDetailsCard({ book }: BookDetailsCardProps) {
  return (
    <BookDetailsCardContainer>
      <BookInfo>
        <Image
          src={book.coverUrl}
          alt=""
          width={172}
          height={242}
          objectFit="cover"
        />

        <div>
          <BookInfoData>
            <strong>{book.name}</strong>
            <span>{book.author}</span>
          </BookInfoData>

          <BookInfoRating>
            <RatingStars value={book.averageRate} readOnly />
            <span>
              {book.ratingsCount}{' '}
              {book.ratingsCount === 1 ? 'avaliação' : 'avaliações'}
            </span>
          </BookInfoRating>
        </div>
      </BookInfo>

      <BookData>
        <div>
          <BookmarkSimple />
          <div>
            <span>Categoria</span>
            {book.categories.map((category) => {
              return (
                <CategoryText key={category.category.name}>
                  {category.category.name}
                </CategoryText>
              )
            })}
          </div>
        </div>

        <div>
          <BookOpen />
          <div>
            <span>Páginas</span>
            <strong className="total-pages">{book.totalPages}</strong>
          </div>
        </div>
      </BookData>
    </BookDetailsCardContainer>
  )
}
