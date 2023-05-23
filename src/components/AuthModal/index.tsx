import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { GoogleButton } from '../GoogleButton'
import { GithubButton } from '../GithubButton'
import {
  AuthButtons,
  AuthCloseButton,
  AuthContent,
  AuthOverlay,
  AuthTitle,
} from './styles'

export function AuthModal() {
  return (
    <Dialog.Portal>
      <AuthOverlay />
      <AuthContent>
        <AuthTitle>Faça login para deixar sua avaliação</AuthTitle>

        <AuthButtons>
          <GoogleButton />
          <GithubButton />
        </AuthButtons>

        <AuthCloseButton asChild>
          <X size={24} color="#8D95AF" />
        </AuthCloseButton>
      </AuthContent>
    </Dialog.Portal>
  )
}
