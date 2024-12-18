import { cn } from '@/dir/lib/utils'
import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'ghost'
export type ButtonSize = 'medium' | 'small' | 'icon' | 'iconSmall'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  isActive?: boolean
  activeStyles?: string
  size?: ButtonSize
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isActive,
      size = 'medium',
      children,
      disabled,
      variant = 'primary',
      className,
      activeStyles,
      ...props
    },
    ref,
  ) => {
    const computedClassName = cn(
      'flex items-center justify-center gap-2 font-semibold rounded-lg border border-transparent text-sm disabled:opacity-60 whitespace-nowrap group',

      // Variant-specific styles
      variant === 'primary' &&
        cn(
          'text-white bg-black border-black dark:text-black dark:bg-white dark:border-white',
          !disabled &&
            !isActive &&
            'hover:bg-neutral-800 active:bg-neutral-900 dark:hover:bg-neutral-200 dark:active:bg-neutral-300',
          isActive && cn('bg-neutral-900 dark:bg-neutral-300', activeStyles),
        ),

      variant === 'secondary' &&
        cn(
          'text-neutral-900 dark:text-white',
          !disabled &&
            !isActive &&
            'hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-900 dark:active:bg-neutral-800',
          isActive && 'bg-neutral-200 dark:bg-neutral-800',
        ),

      variant === 'tertiary' &&
        cn(
          'bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-white dark:border-neutral-900',
          !disabled &&
            !isActive &&
            'hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-800 dark:active:bg-neutral-700',
          isActive && cn('bg-neutral-200 dark:bg-neutral-800', activeStyles),
        ),

      variant === 'ghost' &&
        cn(
          'bg-transparent border-transparent text-neutral-500 dark:text-neutral-400',
          !disabled &&
            !isActive &&
            'hover:bg-black/5 hover:text-neutral-700 active:bg-black/10 active:text-neutral-800 dark:hover:bg-white/10 dark:hover:text-neutral-300 dark:active:text-neutral-200',
          isActive && cn('bg-black/10 text-neutral-800 dark:bg-white/20 dark:text-neutral-200', activeStyles),
        ),

      // Size-specific styles
      size === 'medium' && 'py-2 px-3',
      size === 'small' && 'py-1 px-2',
      size === 'icon' && 'w-8 h-8',
      size === 'iconSmall' && 'w-6 h-6',

      className,
    )

    return (
      <button ref={ref} disabled={disabled} className={computedClassName} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
