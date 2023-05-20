import { AnimatePresence, motion } from "framer-motion";
import ModalStyles from "./ModalWindow.module.scss";
import Overlay from "../Overlay/Overlay";
import { handleChildElementClick } from "../../utilities/utilities";

interface Props {
    show: boolean;
    onClose?: () => void;
    modalRef: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
}
const ModalWindow: React.FC<Props> = ({ show, children, modalRef }) => {
    return (
        <AnimatePresence>
            {show && (
                <Overlay>
                    <motion.div
                        ref={modalRef}
                        className={ModalStyles.modal_window}
                        onClick={handleChildElementClick}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        {children}
                    </motion.div>
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default ModalWindow;
