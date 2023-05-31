import Link from 'next/link'
import { styled } from '@/styles/stitches.config'

export const Chip = styled(Link, {
  padding: '$1 $4',
  textDecoration: 'none',
  borderRadius: '$full',

  '&:hover': {
    backgroundColor: '$purple200',
    color: '$gray100',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$purple200',
        color: '$gray100',
      },

      false: {
        backgroundColor: 'transparent',
        color: '$purple100',
        border: '1px solid',
        borderColor: '$purple100',
      },
    },
  },

  defaultVariants: {
    isSelected: false,
  },
})
