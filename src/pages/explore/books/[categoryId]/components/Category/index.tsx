import { LinkProps } from 'next/link'

import { Chip } from './styles'

interface CategoryProps extends LinkProps {
  name: string
}

export function Category({ name, ...rest }: CategoryProps) {
  return <Chip {...rest}>{name}</Chip>
}
