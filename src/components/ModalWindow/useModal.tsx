import { useState, useEffect, useRef } from "react";

const useModal = () => {
    const [isShowing, setIsShowing] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const showModal = () => setIsShowing(true);
    const hideModal = () => {
        setIsShowing(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            hideModal();
        }
    };
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isShowing) {
                return;
            }
            if (e.key === "Tab") {
                e.preventDefault();
            } else if (e.key === "Escape") {
                hideModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside);
        // document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
            // document.body.style.overflow = "unset";
        };
    }, [isShowing]);

    return {
        isShowing,
        showModal,
        hideModal,
        modalRef,
    };
};

export default useModal;
