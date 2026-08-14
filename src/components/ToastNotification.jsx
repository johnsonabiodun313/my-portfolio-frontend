import * as Toast from '@radix-ui/react-toast'
import { CheckCircle2, AlertCircle, X } from 'lucide-react'

export default function ToastNotification({ toastState, onOpenChange }) {
  if (!toastState) return null

  const isSuccess = toastState.type !== 'error'

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={Boolean(toastState)}
        onOpenChange={onOpenChange}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 p-4 rounded-2xl glass-panel shadow-2xl border ${
          isSuccess
            ? 'border-emerald-500/40 text-emerald-300'
            : 'border-rose-500/40 text-rose-300'
        } animate-in slide-in-from-bottom-5 duration-300`}
      >
        <div className="shrink-0">
          {isSuccess ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-400" />
          )}
        </div>

        <div className="space-y-0.5 text-left">
          <Toast.Title className="text-sm font-bold text-white">
            {toastState.title}
          </Toast.Title>
          <Toast.Description className="text-xs text-slate-300">
            {toastState.description}
          </Toast.Description>
        </div>

        <Toast.Close className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2">
          <X className="w-4 h-4" />
        </Toast.Close>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 p-6 flex flex-col gap-2 w-96 max-w-[100vw] m-0 z-50 outline-none" />
    </Toast.Provider>
  )
}
