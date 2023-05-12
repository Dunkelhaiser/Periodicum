import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../context/ThemeContext";
import useToggle from "../../hooks/useToggle";
import Styles from "./Menu.module.scss";
import { LanguageContext } from "../../context/LanguageContext";

const Menu: React.FC = () => {
    const [expanded, setExpanded] = useToggle(false);
    const { theme, setThemeHandler } = useContext(ThemeContext);
    const { language, setLanguageHandler } = useContext(LanguageContext);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setExpanded();
        }
    };

    return (
        <div className={`${Styles.menu} ${expanded ? Styles.expanded : ""}`} aria-expanded={expanded}>
            <div
                className={Styles.lines}
                aria-expanded={expanded}
                role="button"
                tabIndex={0}
                onClick={() => setExpanded()}
                onKeyDown={handleKeyDown}
            >
                <span className={Styles.line} />
                <span className={Styles.line} />
                <span className={Styles.line} />
            </div>
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
                        onClick={() => setLanguageHandler(language === "english" ? "ukrainian" : "english")}
                        className={Styles.button}
                        aria-label="Change Language"
                        tabIndex={expanded ? 0 : -1}
                    >
                        <FontAwesomeIcon icon={faLanguage} />
                    </button>
                </li>
            </ul>
        </div>
    );
};
export default Menu;
