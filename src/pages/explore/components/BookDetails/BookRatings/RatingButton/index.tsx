import { useSession } from 'next-auth/react'
import * as Dialog from '@radix-ui/react-dialog'

import { AuthModal } from '@/components/AuthModal'
import { RatingButtonContainer } from './styles'

interface RatingButtonProps {
  onShowRatingForm: () => void
}

export function RatingButton({ onShowRatingForm }: RatingButtonProps) {
  const { status } = useSession()

  if (status !== 'authenticated') {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <RatingButtonContainer>Avaliar</RatingButtonContainer>
        </Dialog.Trigger>

        <AuthModal />
      </Dialog.Root>
    )
  }

  return (
    <RatingButtonContainer onClick={onShowRatingForm}>
      Avaliar
    </RatingButtonContainer>
  )
}
