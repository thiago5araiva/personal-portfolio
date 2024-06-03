import { createElement, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
  children: ReactNode
}

export default function ParagraphComponent({ className, children }: Props) {
  return createElement(
    "p",
    {
      className: twMerge(`${className} leading-normal`),
    },
    children
  )
}
