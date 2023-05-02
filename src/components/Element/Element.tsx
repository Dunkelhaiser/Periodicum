import { useContext } from "react";
import { ElementContext } from "../../context/ElementContext";
import S from "./Element.module.scss";

interface Props {
    name: string;
    symbol: string;
    number: number;
    atomicMass: number;
    color: "s" | "p" | "d" | "f";
    disabled?: boolean;
    onClick?: () => void;
}

const Element: React.FC<Props> = ({ name, symbol, number, atomicMass, color = "p", disabled, onClick }) => {
    const { element } = useContext(ElementContext);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <div
            className={`${S.element_wrapper} ${S[color]} ${element === symbol ? S.active : ""} ${disabled ? S.disabled : ""}`}
            tabIndex={0}
            role="button"
            aria-pressed={element === symbol}
            onClick={onClick}
            onKeyDown={handleKeyDown}
        >
            <div className={S.element}>
                <div className={S.header}>
                    <span className={S.title}>{symbol}</span>
                    <span className={S.number}>{number}</span>
                </div>
                <span className={S.name}>{name}</span>
                <span className={S.mass}>{atomicMass}</span>
            </div>
        </div>
    );
};
export default Element;
