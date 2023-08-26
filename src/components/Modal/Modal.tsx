import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Styles from "./Modal.module.scss";

interface Props {
    children: React.ReactNode;
    onClose?: () => void;
    params: string;
    query?: string;
}

const Modal: React.FC<Props> = ({ children, onClose, params, query }) => {
    const [searchParamas] = useSearchParams();
    const ref = useRef<HTMLDialogElement>(null);
    const showModal = query ? searchParamas.get(params) === query : searchParamas.get(params);

    useEffect(() => {
        if (showModal) ref.current?.showModal();
    }, [showModal]);

    const closeModal = () => {
        onClose?.();
    };

    return createPortal(
        <AnimatePresence>
            {showModal && (
                <motion.dialog
                    ref={ref}
                    className={Styles.modal}
                    onClick={(e) => {
                        if (e.target === ref.current) closeModal();
                    }}
                    onCancel={closeModal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                >
                    {children}
                </motion.dialog>
            )}
        </AnimatePresence>,
        document.querySelector("#overlays") as HTMLDivElement
    );
};
export default Modal;
