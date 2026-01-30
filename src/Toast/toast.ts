import { toastStore, type  ToastType } from "./toastStore.ts";

function createToast(type: ToastType, message: string, options?: Partial<any>) {
  const id = crypto.randomUUID();

  toastStore.add({
    id,
    type,
    message,
    duration: options?.duration ?? 4000,
    persist: options?.persist ?? false,
  });

  return id;
}

export const toast = {
  success: (msg: string, opts?: any) => createToast("success", msg, opts),
  error: (msg: string, opts?: any) => createToast("error", msg, opts),
  info: (msg: string, opts?: any) => createToast("info", msg, opts),
  warning: (msg: string, opts?: any) => createToast("warning", msg, opts),
  dismiss: (id: string) => toastStore.remove(id),
};
