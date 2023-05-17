import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import ModalStyles from "./ModalWindow.module.scss";
import Overlay from "../Overlay/Overlay";
import { handleChildElementClick } from "../../utilities/utilities";

interface Props {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const ModalWindow: React.FC<Props> = ({ show, children, onClose }) => {
    return createPortal(
        <AnimatePresence>
            {show && (
                <Overlay onClick={onClose}>
                    <motion.div
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
        </AnimatePresence>,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.querySelector("#overlays")!
    );
};

export default ModalWindow;
