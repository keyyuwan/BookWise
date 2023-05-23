import { styled } from '@/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

export const AuthOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  backgroundColor: 'rgba(0, 0, 0, .6)',
})

export const AuthContent = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 516,
  width: '100%',
  padding: '3.5rem 4.5rem',
  borderRadius: 12,
  boxShadow: '4px 16px 24px 0px #00000040',

  backgroundColor: '$gray700',

  willChange: 'transform',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const AuthTitle = styled(Dialog.Title, {
  color: '$gray200',
  fontSize: '$md',
})

export const AuthButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  marginTop: '$10',
})

export const AuthCloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: 16,
  right: 16,
  cursor: 'pointer',
})
