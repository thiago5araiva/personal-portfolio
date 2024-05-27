import { createElement, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  variant?: "p1" | "p2" | "p3" | "p4"
  className?: string
  children: ReactNode
}

export default function ParagraphComponent({
  variant = "p1",
  className,
  children,
}: Props) {
  const types = {
    p1: "text-xl",
    p2: "text-base",
    p3: "text-sm",
    p4: "text-xs",
  }

  return createElement(
    "p",
    {
      className: twMerge(`${types[variant]} ${className} leading-normal`),
    },
    children
  )
}
