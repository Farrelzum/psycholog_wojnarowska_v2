import { create } from 'zustand';

interface ToastState {
    isVisible: boolean;
    message: string;
    status: 'idle' | 'success' | 'error';

    showToast: (status: ToastState['status'], message: string) => void;
    hideToast: () => void;
}

let timer: ReturnType<typeof setTimeout> | null = null;

export const useToastState = create<ToastState>((set, get) => ({
    isVisible: false,
    message: '',
    status: 'idle',

    showToast: (status, message) => {
        set({
            isVisible: true,
            message: message,
            status: status,
        })

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            get().hideToast();
        }, 3000);
    },
    hideToast: () => set({ isVisible: false }),
}))