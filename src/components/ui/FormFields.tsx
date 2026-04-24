import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { clsx } from "../../lib/clsx";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function InputField({
  label,
  id,
  className,
  ...inputProps
}: InputFieldProps) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;

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

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function TextareaField({
  label,
  id,
  className,
  ...textareaProps
}: TextareaFieldProps) {
  const textareaId =
    id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}-textarea`;

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
