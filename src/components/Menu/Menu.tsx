import { useContext } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../context/ThemeContext";
import useToggle from "../../hooks/useToggle";
import Styles from "./Menu.module.scss";
import useModal from "../ModalWindow/useModal";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Menu: React.FC = () => {
    const [expanded, setExpanded] = useToggle(false);
    const { theme, setThemeHandler } = useContext(ThemeContext);
    const { isShowing, showModal, modalRef } = useModal();

    return (
        <>
            {createPortal(
                <div className={`${Styles.menu} ${expanded ? Styles.expanded : ""}`}>
                    <button className={Styles.lines} aria-expanded={expanded} onClick={() => setExpanded()} aria-label="Menu Button">
                        <span className={Styles.line} />
                        <span className={Styles.line} />
                        <span className={Styles.line} />
                    </button>
                    <ul className={`${Styles.options}`}>
                        <li>
                            <button
                                type="button"
                                onClick={() => setThemeHandler()}
                                className={Styles.button}
                                aria-label="Theme Button"
                                tabIndex={expanded ? 0 : -1}
                            >
                                {theme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={showModal}
                                className={Styles.button}
                                aria-label="Change Language"
                                tabIndex={expanded ? 0 : -1}
                            >
                                <FontAwesomeIcon icon={faLanguage} />
                            </button>
                        </li>
                    </ul>
                </div>,
                document.querySelector("#overlays") as HTMLDivElement
            )}

            <LanguageSwitcher isShowing={isShowing} modalRef={modalRef} />
        </>
    );
};
export default Menu;
