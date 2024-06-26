import { createElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function SubtitleComponent({ className, children }: Props) {
  return createElement(
    "h6",
    {
      className: twMerge("font-title  text-font-medium leading-normal", className),
    },
    children,
  );
}
