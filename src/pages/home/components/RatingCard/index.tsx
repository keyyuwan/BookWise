import { useRef, useState } from 'react'
import Image from 'next/legacy/image'

import { useIsOverflow } from '@/hooks/useIsOverflow'
import { Avatar } from '@/components/Avatar'
import { Rating } from '@/components/Rating'
import {
  RatingCardContainer,
  RatingCardContent,
  RatingCardHeader,
  RatingCardRater,
} from './styles'

import bookImg from '@/images/books/Book.png'

export function RatingCard() {
  const ref = useRef<HTMLDivElement>(null)
  const isTextOverflow = useIsOverflow(ref)

  const [isFullTextVisible, setIsFullTextVisible] = useState(false)

  function handleSetFullTextVisible() {
    setIsFullTextVisible((prevState) => !prevState)
  }

  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero, veritatis magnam illum exercitationem numquam, reiciendis quidem blanditiis assumenda dolore soluta tenetur. Inventore vitae sadecee wdefeww Rem liber cwcwcwc cww vwev vwwv iidciebehce eef veve. Lorem ipsum dolor sit amet consectetur adipisicing elit.'

  return (
    <RatingCardContainer isFullCard={isFullTextVisible}>
      <RatingCardHeader>
        <RatingCardRater>
          <Avatar src="https://github.com/keyyuwan.png" alt="" size="medium" />

          <div>
            <span>Key Yu Wan</span>
            <time>Hoje</time>
          </div>
        </RatingCardRater>

        <Rating rating={4} />
      </RatingCardHeader>

      <RatingCardContent ref={ref} isFullCard={isFullTextVisible}>
        <Image
          src={bookImg}
          alt=""
          width={108}
          height={152}
          objectFit="cover"
        />

        <div>
          <strong>Revolução dos bichos</strong>
          <span>J.R.R Tolkien</span>

          <p>{text}</p>
          {isTextOverflow && (
            <button onClick={handleSetFullTextVisible}>
              {isFullTextVisible ? 'ver menos' : 'ver mais'}
            </button>
          )}
        </div>
      </RatingCardContent>
    </RatingCardContainer>
  )
}
