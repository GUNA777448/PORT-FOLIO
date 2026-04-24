import type { ReactNode } from "react";
import { clsx } from "../../lib/clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <article className={clsx("ui-card", className)}>{children}</article>;
}
