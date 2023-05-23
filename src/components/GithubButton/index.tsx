import { signIn } from 'next-auth/react'
import Image from 'next/image'

import githubSvg from '@/assets/github.svg'
import { GithubButtonContainer } from './styles'

export function GithubButton() {
  return (
    <GithubButtonContainer onClick={() => signIn('github')}>
      <Image src={githubSvg} alt="Google Logo" width={32} height={32} />
      Entrar com Github
    </GithubButtonContainer>
  )
}
