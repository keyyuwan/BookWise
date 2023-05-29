import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'

import { UserDTO } from '@/dtos/user'
import { Avatar } from '@/components/Avatar'
import { InfoItem } from './InfoItem'
import { ProfileInfoContainer, UserBooksData, UserProfile } from './styles'

interface ProfileInfoProps {
  user: UserDTO
}

export function ProfileInfo({ user }: ProfileInfoProps) {
  return (
    <ProfileInfoContainer>
      <UserProfile>
        <Avatar src={user.avatarUrl} alt="" size="large" />

        <div>
          <strong>{user.name}</strong>
          <span>membro desde {user.memberSince}</span>
        </div>
      </UserProfile>

      <UserBooksData>
        <InfoItem
          icon={<BookOpen />}
          label="Páginas lidas"
          value={user.metrics.pagesReadCount}
        />

        <InfoItem
          icon={<Books />}
          label="Livros avaliados"
          value={user.metrics.booksRatedCount}
        />

        <InfoItem
          icon={<UserList />}
          label="Autores lidos"
          value={user.metrics.authorsReadCount}
        />

        {user.metrics.mostReadCategory && (
          <InfoItem
            icon={<BookmarkSimple />}
            label="Categoria mais lida"
            value={user.metrics.mostReadCategory}
          />
        )}
      </UserBooksData>
    </ProfileInfoContainer>
  )
}
