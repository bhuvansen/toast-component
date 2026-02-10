import { useEffect, useState } from "react";
import { ToastViewport } from "./ToastViewport";
import { toastStore } from "./toastStore";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState({ visible: [], queue: [] });

 useEffect(() => {
  const unsubscribe = toastStore.subscribe(setState);

  return () => {
    unsubscribe();
  };
}, []);


  return (
    <>
      {children}
      <ToastViewport toasts={state.visible} />
    </>
  );
}
