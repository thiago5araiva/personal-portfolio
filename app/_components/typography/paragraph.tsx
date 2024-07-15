import { createElement, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  children: ReactNode
}

export default function ParagraphComponent({ className, children }: Props) {
  return createElement(
    'p',
    {
      className: twMerge(
        `${className} text-base text-font-medium sm:text-lg leading-normal`
      ),
    },
    children
  )
}
