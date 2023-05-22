import Image from 'next/image'
import { BookOpen, BookmarkSimple } from 'phosphor-react'

import {
  BookData,
  BookDetailsCardContainer,
  BookInfo,
  BookInfoData,
  BookInfoRating,
} from './styles'
import bookImg from '@/images/books/Book.png'

export function BookDetailsCard() {
  return (
    <BookDetailsCardContainer>
      <BookInfo>
        <Image
          src={bookImg}
          alt=""
          width={172}
          height={242}
          objectFit="cover"
        />

        <div>
          <BookInfoData>
            <strong>A revolução dos bichos</strong>
            <span>George Orwell</span>
          </BookInfoData>

          <BookInfoRating>
            <p>estrerlas</p>
            <span>3 avaliações</span>
          </BookInfoRating>
        </div>

        {/* <Rating rating={4} /> */}
      </BookInfo>

      <BookData>
        <div>
          <BookmarkSimple />
          <div>
            <span>Categoria</span>
            <strong>Computação, educação</strong>
          </div>
        </div>

        <div>
          <BookOpen />
          <div>
            <span>Páginas</span>
            <strong>160</strong>
          </div>
        </div>
      </BookData>
    </BookDetailsCardContainer>
  )
}
