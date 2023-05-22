import { useState, useEffect, useRef } from "react";

const useModal = () => {
    const [isShowing, setIsShowing] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const showModal = () => setIsShowing(true);
    const hideModal = () => {
        setIsShowing(false);
    };
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isShowing) {
                return;
            }
            if (e.key === "Escape") {
                hideModal();
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                hideModal();
            }
        };

        if (isShowing) {
            const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
            const focusableOutsideModal = [...document.querySelectorAll(focusableElements)].filter((el) => !modalRef.current?.contains(el));

            focusableOutsideModal.forEach((el) => el.setAttribute("tabindex", "-1"));

            const handleFocus = (e: FocusEvent) => {
                if (!modalRef.current?.contains(e.target as Node)) {
                    e.preventDefault();
                    modalRef.current?.focus();
                }
            };
            modalRef.current?.addEventListener("focus", handleFocus, true);
        }

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);

            if (isShowing) {
                const focusableElements = 'button, [href], input, select, textarea, [tabindex="-1"]';
                const focusableOutsideModal = [...document.querySelectorAll(focusableElements)].filter(
                    (el) => !modalRef.current?.contains(el)
                );
                focusableOutsideModal.forEach((el) => el.setAttribute("tabindex", "0"));

                const handleFocus = (e: FocusEvent) => {
                    if (!modalRef.current?.contains(e.target as Node)) {
                        e.preventDefault();
                        modalRef.current?.focus();
                    }
                };
                modalRef.current?.removeEventListener("focus", handleFocus, true);
            }
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
