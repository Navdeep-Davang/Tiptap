import React, { ButtonHTMLAttributes, HTMLProps, forwardRef } from 'react'

import { Container } from './Container'
import { Button, ButtonProps, ButtonSize } from './Button'
import Tooltip from './Tooltip'
import { cn } from '@/dir/lib/utils'

export type ActionBarWrapperProps = {
  shouldDisplayContent?: boolean
  verticalLayout?: boolean
} & HTMLProps<HTMLDivElement>

const ActionBarWrapper = forwardRef<HTMLDivElement, ActionBarWrapperProps>(
  ({ shouldDisplayContent = true, children, verticalLayout = false, className, ...rest }, ref) => {
    const wrapperClassName = cn(
      'text-black inline-flex h-full leading-none gap-0.5',
      verticalLayout ? 'flex-col p-2' : 'flex-row p-1 items-center',
      className,
    )

    return (
      shouldDisplayContent && (
        <Container className={wrapperClassName} {...rest} ref={ref}>
          {children}
        </Container>
      )
    )
  },
)

ActionBarWrapper.displayName = 'ActionBar.Wrapper'

export type ActionBarDividerProps = {
  horizontal?: boolean
} & HTMLProps<HTMLDivElement>

const ActionBarDivider = forwardRef<HTMLDivElement, ActionBarDividerProps>(
  ({ horizontal, className, ...rest }, ref) => {
    const dividerClass = cn(
      'bg-neutral-200 dark:bg-neutral-800',
      horizontal
        ? 'w-full min-w-[1.5rem] h-[1px] my-1 first:mt-0 last:mt-0'
        : 'h-full min-h-[1.5rem] w-[1px] mx-1 first:ml-0 last:mr-0',
      className,
    )

    return <div className={dividerClass} ref={ref} {...rest} />
  },
)

ActionBarDivider.displayName = 'ActionBar.Divider'

export type ActionBarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
  activeClassname?: string
  tooltip?: string
  tooltipShortcut?: string[]
  buttonSize?: ButtonProps['size']
  variant?: ButtonProps['variant']
}

const ActionBarButton = forwardRef<HTMLButtonElement, ActionBarButtonProps>(
  (
    {
      children,
      buttonSize = 'icon',
      variant = 'ghost',
      className,
      tooltip,
      tooltipShortcut,
      activeClassname,
      ...rest
    },
    ref,
  ) => {
    const buttonClassName = cn('gap-1 min-w-[2rem] px-2 w-auto', className)

    const buttonContent = (
      <Button
        activeStyles={activeClassname}
        className={buttonClassName}
        variant={variant}
        size={buttonSize}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    )

    if (tooltip) {
      return (
        <Tooltip title={tooltip} shortcut={tooltipShortcut}>
          {buttonContent}
        </Tooltip>
      )
    }

    return buttonContent
  },
)

ActionBarButton.displayName = 'ActionBar.Button'

export const ActionBar = {
  Wrapper: ActionBarWrapper,
  Divider: ActionBarDivider,
  Button: ActionBarButton,
}
