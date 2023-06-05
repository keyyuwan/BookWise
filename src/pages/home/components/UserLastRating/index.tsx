import { CaretRight } from 'phosphor-react'
import { useSession } from 'next-auth/react'

import { Link } from '@/components/Link'
import { LastReadCard } from '../LastReadCard'
import {
  UserLastRatingContainer,
  UserLastRatingHeader,
  UserLastRatingList,
} from './styles'

export interface IUserLastRating {
  rate: number
  description: string
  createdAt: string
  book: {
    coverUrl: string
    name: string
    author: string
  }
}

interface UserLastRatingProps {
  rating: IUserLastRating
}

export function UserLastRating({ rating }: UserLastRatingProps) {
  const { data: session } = useSession()

  return (
    <UserLastRatingContainer>
      <UserLastRatingHeader>
        <span>Sua última leitura</span>

        <Link
          href={`/profile/${session?.user.id}`}
          title="Ver todas"
          Icon={CaretRight}
          size="small"
          color="purple"
        />
      </UserLastRatingHeader>

      <UserLastRatingList>
        <LastReadCard rating={rating} />
      </UserLastRatingList>
    </UserLastRatingContainer>
  )
}
