import { Link, useSearchParams } from "react-router-dom";
import { handleKeyDown } from "../../utilities/utilities";
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
    const [searchParams] = useSearchParams();

    const isSelected = searchParams.get("element")?.toLowerCase() === symbol?.toLowerCase();

    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <Link
            to={`?element=${symbol.toLowerCase()}`}
            className={`${S.element_wrapper} ${S[color]} ${isSelected ? S.active : ""} ${disabled ? S.disabled : ""}`}
            tabIndex={disabled ? undefined : 0}
            role="button"
            aria-pressed={isSelected}
            onClick={onClick}
            onKeyDown={(e) => handleKeyDown(e, onClick)}
        >
            <div className={S.element}>
                <div className={S.header}>
                    <span className={S.title}>{symbol}</span>
                    <span className={S.number}>{number}</span>
                </div>
                <span className={S.name}>{name}</span>
                <span className={S.mass}>{Math.round(atomicMass * 1e3) / 1e3}</span>
            </div>
        </Link>
    );
};
export default Element;
