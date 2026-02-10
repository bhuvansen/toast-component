// toastStore.ts
export type ToastType = "success" | "error" | "info" | "warning";

export type Toast = {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  persist?: boolean;
};

export type ToastState = {
  visible: Toast[];
  queue: Toast[];
};

const MAX_VISIBLE = 3;

let state: ToastState = {
  visible: [],
  queue: [],
};

const listeners = new Set<(s: ToastState) => void>();

function notify() {
  listeners.forEach((l) => l(state));
}
export const toastStore = {

  subscribe(listener: (s: ToastState) => void) {
    listeners.add(listener);
    listener(state);
    return () => listeners.delete(listener);
  },

  add(toast: Toast) {
    if (state.visible.length < MAX_VISIBLE) {
      state = { ...state, visible: [...state.visible, toast] };
    } else {
      state = { ...state, queue: [...state.queue, toast] };
    }
    notify();
  },

  remove(id: string) {
    const visible = state.visible.filter((t) => t.id !== id);
    const queue = [...state.queue];

    if (visible.length < MAX_VISIBLE && queue.length > 0) {
      visible.push(queue.shift()!);
    }

    state = { visible, queue };
    notify();
  },
};
