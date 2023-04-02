import { MagnifyingGlass } from 'phosphor-react'
import { SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Buscar livro avaliado" />
      <MagnifyingGlass />
    </SearchContainer>
  )
}
