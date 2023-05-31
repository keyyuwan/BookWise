import { Drawer, DrawerTrigger, DrawerContent } from '@/components/Drawer'
import Image from 'next/image'

import { RatingStars } from '@/components/RatingStars'
import { BookDetails } from '../BookDetails'
import { BookContainer, BookContent, BookInfo, Read } from './styles'

interface IBook {
  name: string
  author: string
  coverUrl: string
  averageRate: number
}

interface BookProps {
  book: IBook
  isRead: boolean
}

export function Book({ book, isRead }: BookProps) {
  return (
    <Drawer>
      <DrawerTrigger>
        <BookContainer>
          {isRead && <Read>lido</Read>}

          <BookContent>
            <Image
              src={book.coverUrl}
              alt={book.name}
              width={108}
              height={152}
              objectFit="cover"
            />

            <BookInfo>
              <div>
                <strong>{book.name}</strong>
                <span>{book.author}</span>
              </div>

              <RatingStars value={book.averageRate} readOnly />
            </BookInfo>
          </BookContent>
        </BookContainer>
      </DrawerTrigger>

      <DrawerContent>
        <BookDetails />
      </DrawerContent>
    </Drawer>
  )
}
