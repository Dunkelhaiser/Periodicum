import { useEffect } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import OverlayStyles from "./Overlay.module.scss";

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
}

const Overlay: React.FC<Props> = ({ onClick, children }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Tab") {
                event.preventDefault();
            } else if (event.key === "Escape" && onClick) {
                onClick();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        // document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            // document.body.style.overflow = "unset";
        };
    }, []);

    return ReactDOM.createPortal(
        <motion.div
            className={OverlayStyles.overlay}
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
        >
            {children}
        </motion.div>,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.querySelector("#overlays")!
    );
};

export default Overlay;
