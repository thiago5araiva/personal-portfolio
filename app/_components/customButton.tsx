import { cn } from "@/_lib/utils";
import { Button, ButtonProps } from "./ui/button";
import { cva, type VariantProps } from "class-variance-authority";

interface Props extends ButtonProps {
  label: string;
  variant?: "default" | "secondary" | "ghost";
  className?: string;
}

const buttonVariants = cva("rounded-full", {
  variants: {
    variant: {
      default:
        "bg-primary-default text-base text-background-primary hover:bg-primary-hover active:bg-primary-pressed disabled:bg-primary-disabled",
      secondary:
        "bg-transparent border border-font-high text-base text-font-high hover:bg-surface-low active:bg-surface-medium disabled:bg-primary-disabled disabled:border-primary-disabled",
      ghost: "bg-transparent text-base text-font-high",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function CustomButton({
  label,
  variant,
  className,
  children,
}: Props) {
  return (
    <Button className={cn(buttonVariants({ variant, className }))}>
      <span className="text-base mx-2">{label}</span>
      {children}
    </Button>
  );
}
