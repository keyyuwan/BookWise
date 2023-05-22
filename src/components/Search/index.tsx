import { InputHTMLAttributes } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import { SearchContainer } from './styles'

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Search({ ...rest }: SearchProps) {
  return (
    <SearchContainer>
      <input type="text" {...rest} />
      <MagnifyingGlass />
    </SearchContainer>
  )
}
