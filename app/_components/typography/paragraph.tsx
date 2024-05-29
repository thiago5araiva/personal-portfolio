import { createElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  variant?: "p1" | "p2" | "p3" | "p4";
  className?: string;
  children: ReactNode;
};

export default function ParagraphComponent({
  variant = "p1",
  className,
  children,
}: Props) {
  return createElement(
    "p",
    {
      className: twMerge(`${className} leading-normal`),
    },
    children,
  );
}
