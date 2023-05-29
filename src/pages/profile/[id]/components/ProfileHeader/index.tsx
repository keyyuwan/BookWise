import { CaretLeft, User } from 'phosphor-react'

import { PageTitle } from '@/components/PageTitle'
import { Link } from '@/components/Link'

interface ProfileHeaderProps {
  isUserAuthProfile: boolean
  onGoBack: () => void
}

export function ProfileHeader({
  isUserAuthProfile,
  onGoBack,
}: ProfileHeaderProps) {
  if (isUserAuthProfile) {
    return <PageTitle icon={<User size={32} weight="bold" />} title="Perfil" />
  }

  return (
    <Link
      isIconBeforeTitle
      title="Voltar"
      Icon={CaretLeft}
      size="medium"
      color="white"
      onClick={onGoBack}
    />
  )
}
