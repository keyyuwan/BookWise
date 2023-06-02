import { Category } from '../Category'
import { CategoriesContainer } from './styles'

interface ICategory {
  id: string
  name: string
}

interface CategoriesProps {
  categories: ICategory[]
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <>
      <CategoriesContainer>
        <Category name="Tudo" href="/explore/books/all" />

        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              name={category.name}
              href={`/explore/books/${category.id}`}
            />
          )
        })}
      </CategoriesContainer>
    </>
  )
}
