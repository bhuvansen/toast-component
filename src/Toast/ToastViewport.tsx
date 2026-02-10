import { createPortal } from "react-dom";
import { ToastItem } from "./ToastItem";
import { useEffect, useState } from "react";
import type { Toast } from "./toastStore";

export function ToastViewport({ toasts }: { toasts: Toast[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div aria-live="polite" className="toast-viewport">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} />
      ))}
    </div>,
    document.body
  );
}
