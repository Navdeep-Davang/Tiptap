import { type ClassValue, clsx as classNames } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(classNames(inputs))
}

export function getRandomItem<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)]
}

export * from './variableStyles'
export * from './getRenderContainer'
export * from './isCustomNodeActive'
export * from './isTextHighlighted'