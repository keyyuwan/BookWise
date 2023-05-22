import { Binoculars } from 'phosphor-react'

import { MainLayout } from '@/layouts/MainLayout'
import { PageTitle } from '@/components/PageTitle'
import { Drawer, DrawerTrigger, DrawerContent } from '@/components/Drawer'
import { Search } from '@/components/Search'
import { Category } from './components/Category'
import { Book } from './components/Book'
import { BookDetails } from './components/BookDetails'

import { BooksWrapper, CategoriesWrapper, ExploreHeader } from './styles'

export default function Expore() {
  return (
    <MainLayout>
      <ExploreHeader>
        <PageTitle
          icon={<Binoculars size={32} weight="bold" />}
          title="Explorar"
        />
        <Search placeholder="Buscar livro ou autor" />
      </ExploreHeader>

      <CategoriesWrapper>
        <Category />
      </CategoriesWrapper>

      <BooksWrapper>
        <Drawer>
          <DrawerTrigger>
            <Book isRead />
          </DrawerTrigger>

          <DrawerContent>
            <BookDetails />
          </DrawerContent>
        </Drawer>
      </BooksWrapper>
    </MainLayout>
  )
}
