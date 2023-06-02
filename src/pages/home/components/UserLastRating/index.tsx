import { CaretRight } from 'phosphor-react'

import { Link } from '@/components/Link'
import { LastReadCard } from '../LastReadCard'
import {
  UserLastRatingContainer,
  UserLastRatingHeader,
  UserLastRatingList,
} from './styles'

export function UserLastRating() {
  return (
    <UserLastRatingContainer>
      <UserLastRatingHeader>
        <span>Sua última leitura</span>

        <Link
          href="/profile/me"
          title="Ver todas"
          Icon={CaretRight}
          size="small"
          color="purple"
        />
      </UserLastRatingHeader>

      <UserLastRatingList>
        <LastReadCard />
      </UserLastRatingList>
    </UserLastRatingContainer>
  )
}
