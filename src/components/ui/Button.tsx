
import { clsx } from "../../utils/clsx";

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}) {
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
