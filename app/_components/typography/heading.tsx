import { createElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}

export default function HeadingComponent({
  type = "h1",
  className,
  children,
}: Props) {
  return createElement(
    type,
    {
      className: twMerge("text-4xl font-bold text-font-high", className),
    },
    children,
  );
}
