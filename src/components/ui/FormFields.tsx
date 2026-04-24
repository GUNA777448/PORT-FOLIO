
import { clsx } from "../../utils/clsx";

export function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string },
) {
  const { label, id, className, ...inputProps } = props;
  const inputId = id ?? `field-${label.toLowerCase().replace(/\\s+/g, "-")}`;

  return (
    <label className="field-group" htmlFor={inputId}>
      <span>{label}</span>
      <input
        id={inputId}
        className={clsx("ui-input", className)}
        {...inputProps}
      />
    </label>
  );
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string },
) {
  const { label, id, className, ...textareaProps } = props;
  const textareaId =
    id ?? `field-${label.toLowerCase().replace(/\\s+/g, "-")}-textarea`;

  return (
    <label className="field-group" htmlFor={textareaId}>
      <span>{label}</span>
      <textarea
        id={textareaId}
        className={clsx("ui-input ui-textarea", className)}
        {...textareaProps}
      />
    </label>
  );
}
