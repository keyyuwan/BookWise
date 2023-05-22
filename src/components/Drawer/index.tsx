import React from 'react'
import { VariantProps, CSS } from '@/styles/stitches.config'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import {
  StyledCloseButton,
  StyledContent,
  StyledOverlay,
  StyledDrawerTrigger,
} from './styles'

const Drawer = DialogPrimitive.Root
const DrawerTrigger = StyledDrawerTrigger

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
        <X size={24} color="#8D95AF" />
      </StyledCloseButton>
    </StyledContent>
  </DialogPrimitive.Portal>
))

const DrawerTitle = DialogPrimitive.Title
const DrawerDescription = DialogPrimitive.Description

export { Drawer, DrawerTrigger, DrawerContent, DrawerTitle, DrawerDescription }
