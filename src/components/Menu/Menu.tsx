import { useContext } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../context/ThemeContext";
import useToggle from "../../hooks/useToggle";
import Styles from "./Menu.module.scss";

const Menu: React.FC = () => {
    const [expanded, setExpanded] = useToggle(false);
    const [, setSearchParams] = useSearchParams();
    const { theme, setThemeHandler } = useContext(ThemeContext);

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
                                onClick={() => {
                                    setSearchParams("languages=true");
                                }}
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
        </>
    );
};
export default Menu;
