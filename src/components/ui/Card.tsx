
import { clsx } from "../../utils/clsx";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <article className={clsx("ui-card", className)}>{children}</article>;
}
