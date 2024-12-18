
import { cn } from '@/dir/lib/utils'
import { HTMLProps, forwardRef } from 'react'

export type ContainerProps = HTMLProps<HTMLDivElement> & {
  hasShadow?: boolean
  hasBorder?: boolean
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, hasShadow = true, hasBorder = true, ...rest }, ref) => {
    const containerClassNames = cn(
      className,
      'bg-light rounded-md dark:bg-dark',
      hasShadow ? 'shadow-md' : '',
      hasBorder ? 'border border-gray-200 dark:border-gray-700' : '',
    )

    return (
      <div className={containerClassNames} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

Container.displayName = 'Container'
