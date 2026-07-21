    'use client'

    import { useToastStore } from "@/lib/store/useToastStore";
    import { AnimatePresence, motion } from "framer-motion";

    export default function Toast() {
        const isVisible = useToastStore((state) => state.isVisible);
        const message = useToastStore((state) => state.message);
        const status = useToastStore((state) => state.status);

        return (
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        role={status === 'error' ? 'alert' : 'status'}
                        aria-live={status === 'error' ? 'assertive' : 'polite'}
                        className={`
                            fixed z-50 top-4 left-4 mr-4
                            md:top-auto md:bottom-4 md:left-4
                            px-6 py-3 rounded shadow-lg text-white font-medium
                            ${status === 'error' ? 'bg-red-600' : 'bg-green-800'}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                    >
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }