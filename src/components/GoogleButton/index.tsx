import { signIn } from 'next-auth/react'
import Image from 'next/image'

import googleSvg from '@/assets/google.svg'
import { GoogleButtonContainer } from './styles'

export function GoogleButton() {
  return (
    <GoogleButtonContainer onClick={() => signIn('google')}>
      <Image src={googleSvg} alt="Google Logo" width={32} height={32} />
      Entrar com Google
    </GoogleButtonContainer>
  )
}
