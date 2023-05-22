import React from 'react'
import { VariantProps, CSS } from '@/styles/stitches.config'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { StyledCloseButton, StyledContent, StyledOverlay } from './styles'

const Drawer = DialogPrimitive.Root
const DrawerTrigger = DialogPrimitive.Trigger

type DrawerContentVariants = VariantProps<typeof StyledContent>
type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>
type DrawerContentProps = DialogContentPrimitiveProps &
  DrawerContentVariants & { css?: CSS }

// eslint-disable-next-line react/display-name
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DrawerContentProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      <StyledCloseButton asChild>
        <button>
          <p>fechar</p>
        </button>
      </StyledCloseButton>
    </StyledContent>
  </DialogPrimitive.Portal>
))

const DrawerClose = DialogPrimitive.Close
const DrawerTitle = DialogPrimitive.Title
const DrawerDescription = DialogPrimitive.Description

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
  DrawerDescription,
}
