import { createElement, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  children: ReactNode
}

export default function SubtitleComponent({ className, children }: Props) {
  return createElement(
    'h3',
    {
      className: twMerge(
        'font-text text-font-medium leading-normal',
        className
      ),
    },
    children
  )
}
