import { useToast } from "../context/ToastContext";
import { AlertCircle, X } from "lucide-react";

const Toast = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between gap-4 min-w-[300px] animate-in slide-in-from-right-8 duration-300 transition-all cursor-pointer"
          onClick={() => removeToast(toast.id)}
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="text-lime-400" size={20} />
            <p className="text-sm font-medium">{toast.message}</p>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
