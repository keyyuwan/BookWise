import {
  BookOpen,
  BookmarkSimple,
  Books,
  CaretLeft,
  User,
  UserList,
} from 'phosphor-react'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router'

import { MainLayout } from '@/layouts/MainLayout'
import { PageTitle } from '@/components/PageTitle'
import { Search } from '@/components/Search'
import { RatingStars } from '@/components/RatingStars'
import { Avatar } from '@/components/Avatar'
import { Link } from '@/components/Link'
import {
  BookInfo,
  BookRatedCard,
  BooksRated,
  BooksSection,
  ProfileContainer,
  ProfileSection,
  UserBooksData,
  UserProfile,
} from './styles'

import bookImg from '@/images/books/Book.png'

interface Book {
  id: string
  title: string
  author: string
  rating: number
  description: string
  createdAt: string
}

const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Entendendo algoritmos',
    author: 'Adtiya Bhargava',
    rating: 4,
    description:
      'Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.',
    createdAt: '2023-03-24',
  },
  {
    id: '2',
    title: 'Entendendo algoritmos',
    author: 'Adtiya Bhargava',
    rating: 4,
    description:
      'Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.',
    createdAt: '2023-03-24',
  },
]

export default function Profile() {
  const isUserAuth = true
  const router = useRouter()

  function handleGoBack() {
    router.back()
  }

  return (
    <MainLayout>
      {isUserAuth ? (
        <PageTitle icon={<User size={32} weight="bold" />} title="Perfil" />
      ) : (
        <Link
          isIconBeforeTitle
          title="Voltar"
          Icon={CaretLeft}
          size="medium"
          color="white"
          onClick={handleGoBack}
        />
      )}

      <ProfileContainer>
        <BooksSection>
          <Search placeholder="Buscar livro avaliado" />

          <BooksRated>
            {BOOKS.map((book) => (
              <div key={book.id}>
                <time>{book.createdAt}</time>

                <BookRatedCard>
                  <BookInfo>
                    <Image src={bookImg} alt="" width={98} height={124} />

                    <div>
                      <div>
                        <strong>{book.title}</strong>
                        <span>{book.author}</span>
                      </div>

                      <RatingStars value={4} readOnly />
                    </div>
                  </BookInfo>

                  <p>{book.description}</p>
                </BookRatedCard>
              </div>
            ))}
          </BooksRated>
        </BooksSection>

        <ProfileSection>
          <UserProfile>
            <Avatar src="https://github.com/keyyuwan.png" alt="" size="large" />

            <div>
              <strong>Key Yu Wan</strong>
              <span>membro desde 2019</span>
            </div>
          </UserProfile>

          <UserBooksData>
            <div>
              <BookOpen />

              <div>
                <strong>3853</strong>
                <span>Páginas lidas</span>
              </div>
            </div>
            <div>
              <Books />

              <div>
                <strong>10</strong>
                <span>Livros avaliados</span>
              </div>
            </div>
            <div>
              <UserList />

              <div>
                <strong>8</strong>
                <span>Autores lidos</span>
              </div>
            </div>
            <div>
              <BookmarkSimple />

              <div>
                <strong>Computação</strong>
                <span>Categoria mais lida</span>
              </div>
            </div>
          </UserBooksData>
        </ProfileSection>
      </ProfileContainer>
    </MainLayout>
  )
}
