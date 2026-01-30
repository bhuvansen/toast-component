// useToastTimer.ts
import { useEffect, useRef } from "react";
import { toast } from "./toast";

export function useToastTimer(id: string, duration: number, persist?: boolean) {
  const timerRef = useRef<number | null>(null);

  const start = () => {
    if (persist) return;
    timerRef.current = window.setTimeout(() => toast.dismiss(id), duration);
  };

  const stop = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  useEffect(() => {
    start();
    return stop;
  }, []);

  return { start, stop };
}
