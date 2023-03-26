import Image from 'next/legacy/image'
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
            <button>
              <Image src={googleSvg} alt="Google Logo" width={32} height={32} />
              Entrar com Google
            </button>
            <button>
              <Image src={githubSvg} alt="Google Logo" width={32} height={32} />
              Entrar com Github
            </button>
            <button>
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
