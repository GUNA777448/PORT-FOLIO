import type { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "../../lib/clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "ui-button",
        variant === "secondary" && "ui-button-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
