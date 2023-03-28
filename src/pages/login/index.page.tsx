import { GetServerSideProps } from 'next'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/pages/api/auth/[...nextauth].api'
import {
  ImageContainer,
  LoginContainer,
  Greetings,
  LoginOptions,
  LoginBox,
} from './styles'

import logoImg from '@/assets/logo.svg'
import googleSvg from '@/assets/google.svg'
import githubSvg from '@/assets/github.svg'
import rocketLaunchSvg from '@/assets/rocket-launch.svg'

export default function Login() {
  const router = useRouter()

  async function handleSignIn(provider: 'google' | 'github') {
    await signIn(provider)
  }

  async function handleAccessAsGuest() {
    await router.push('/')
  }

  return (
    <LoginContainer>
      <ImageContainer>
        <Image
          src={logoImg}
          alt="Book Wise Logo"
          width={232}
          height={58}
          objectFit="cover"
        />
      </ImageContainer>

      <LoginBox>
        <div>
          <Greetings>
            <strong>Boas vindas!</strong>
            <p>Faça seu login ou acesse como visitante.</p>
          </Greetings>

          <LoginOptions>
            <button onClick={() => handleSignIn('google')}>
              <Image src={googleSvg} alt="Google Logo" width={32} height={32} />
              Entrar com Google
            </button>
            <button onClick={() => handleSignIn('github')}>
              <Image src={githubSvg} alt="Google Logo" width={32} height={32} />
              Entrar com Github
            </button>
            <button onClick={handleAccessAsGuest}>
              <Image
                src={rocketLaunchSvg}
                alt="Google Logo"
                width={32}
                height={32}
              />
              Acessar como visitante
            </button>
          </LoginOptions>
        </div>
      </LoginBox>
    </LoginContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
