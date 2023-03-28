import Image from 'next/legacy/image'

import { Rating } from '@/components/Rating'
import { LastReadCardContainer, LastReadContent, Wrapper } from './styles'

import bookImg from '@/images/books/Book.png'

export function LastReadCard() {
  return (
    <LastReadCardContainer>
      <Image src={bookImg} alt="" width={108} height={152} objectFit="cover" />

      <LastReadContent>
        <Wrapper>
          <header>
            <time>Há 2 dias</time>
            <Rating rating={4} />
          </header>

          <div>
            <strong>Entendendo Algoritmos</strong>
            <span>Aditya Bhargava</span>
          </div>
        </Wrapper>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          repellendus eos illum similique beatae consequatur repellat a, soluta
          sit exercitationem earum, facilis eveniet corporis expedita ad impedit
          quisquam voluptate minus.
        </p>
      </LastReadContent>
    </LastReadCardContainer>
  )
}
