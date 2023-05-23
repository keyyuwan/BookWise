import { Check, X } from 'phosphor-react'

import { Avatar } from '@/components/Avatar'
import {
  BookRatingFormContainer,
  BookRatingFormFooter,
  BookRatingFormHeader,
  BookRatingFormTextareaContainer,
} from './styles'

interface BookRatingFormProps {
  onClose: () => void
}

export function BookRatingForm({ onClose }: BookRatingFormProps) {
  return (
    <BookRatingFormContainer>
      <BookRatingFormHeader>
        <div>
          <Avatar src="https://github.com/keyyuwan.png" alt="" size="medium" />
          <strong>Key Yu Wan</strong>
        </div>

        <p>Estrelas</p>
      </BookRatingFormHeader>

      <BookRatingFormTextareaContainer>
        <textarea placeholder="Escreva sua avaliação" />
        <span>0/450</span>
      </BookRatingFormTextareaContainer>

      <BookRatingFormFooter>
        <button onClick={onClose}>
          <X size={24} color="#8381D9" />
        </button>
        <button>
          <Check size={24} color="#50B2C0" />
        </button>
      </BookRatingFormFooter>
    </BookRatingFormContainer>
  )
}
