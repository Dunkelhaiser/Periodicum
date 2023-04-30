import S from "./Element.module.scss";

interface Props {
    name: string;
    symbol: string;
    number: number;
    atomicMass: number;
    color: "s" | "p" | "d" | "f";
    active?: boolean;
    disabled?: boolean;
}

const Element: React.FC<Props> = ({ name, symbol, number, atomicMass, color = "p", active, disabled }) => {
    return (
        <div
            className={`${S.element_wrapper} ${S[color]} ${active ? S.active : ""} ${disabled ? S.disabled : ""}`}
            tabIndex={0}
            role="button"
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
