'use client'

import HeadlessTippy from '@tippyjs/react/headless'
import React, { JSX, useMemo } from 'react'

import { TippyProps, TooltipProps } from './types'

const isMacPlatform = typeof navigator !== 'undefined' && /Mac/.test(navigator.userAgent)

const KeyShortcut = ({ children }: { children: string }): JSX.Element => {
  const baseStyles =
    'inline-flex items-center justify-center w-5 h-5 p-1 text-[0.625rem] font-semibold rounded leading-none border text-neutral-500 border-neutral-200 border-b-2'

  const getKeyLabel = (): string => {
    if (children === 'Mod') return isMacPlatform ? '⌘' : 'Ctrl'
    if (children === 'Shift') return '⇧'
    if (children === 'Alt') return isMacPlatform ? '⌥' : 'Alt'
    return children
  }

  return <kbd className={baseStyles}>{getKeyLabel()}</kbd>
}

export const Tooltip = ({
  children,
  enabled = true,
  title,
  shortcut,
  tippyOptions = {},
}: TooltipProps): JSX.Element => {
  const renderContent = useMemo(
    () => (attrs: TippyProps) => (
      <span
        className="flex items-center gap-2 px-2.5 py-1 bg-white border border-neutral-100 rounded-lg shadow-sm z-[999]"
        tabIndex={-1}
        {...attrs}
      >
        {title && <span className="text-xs font-medium text-neutral-500">{title}</span>}
        {shortcut && (
          <span className="flex items-center gap-0.5">
            {shortcut.map(key => (
              <KeyShortcut key={key}>{key}</KeyShortcut>
            ))}
          </span>
        )}
      </span>
    ),
    [shortcut, title],
  )

  if (!enabled) return <>{children}</>

  return (
    <HeadlessTippy
      delay={500}
      offset={[0, 8]}
      touch={false}
      zIndex={99999}
      appendTo={typeof window !== 'undefined' ? document.body : undefined}
      {...tippyOptions}
      render={renderContent}
    >
      <span>{children}</span>
    </HeadlessTippy>
  )
}

export default Tooltip
