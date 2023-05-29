import { ReactElement } from 'react'
import { InfoItemContainer } from './styles'

interface InfoItemProps {
  icon: ReactElement
  label: string
  value: string | number
}

export function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <InfoItemContainer>
      {icon}

      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </InfoItemContainer>
  )
}
