// ToastItem.tsx
import { toast } from "./toast";
import type { Toast } from "./toastStore";
import { useToastTimer } from "./useToastTimer";

export function ToastItem({ toast: t }: { toast: Toast }) {
  const { start, stop } = useToastTimer(t.id, t.duration, t.persist);

  return (
    <div
      role="alert"
      className={`toast toast-${t.type}`}
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <span>{t.message}</span>
      <button
        aria-label="Dismiss notification"
        onClick={() => toast.dismiss(t.id)}
      >
        ✕
      </button>
    </div>
  );
}
