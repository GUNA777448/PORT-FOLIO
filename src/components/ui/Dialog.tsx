

export function Dialog({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="dialog-backdrop" role="presentation" onClick={onClose}>
      <section
        className="dialog-panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="dialog-header">
          <h3>{title}</h3>
          <button
            className="dialog-close"
            aria-label="Close dialog"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>
        <div className="dialog-body">{children}</div>
      </section>
    </div>
  );
}
