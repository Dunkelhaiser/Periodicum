import ElementStyles from "./Element.module.scss";

interface Props {
    name: string;
    symbol: string;
    number: number;
    atomicMass: number;
    color: "s" | "p" | "d" | "f";
    active?: boolean;
}

const Element: React.FC<Props> = ({ name, symbol, number, atomicMass, color = "p", active }) => {
    return (
        <div
            className={`${ElementStyles.element} ${ElementStyles[color]} ${active ? ElementStyles.active : ""}`}
            tabIndex={0}
            role="button"
        >
            <div className={ElementStyles.element_inner}>
                <div className={ElementStyles.header}>
                    <span className={ElementStyles.title}>{symbol}</span>
                    <span className={ElementStyles.number}>{number}</span>
                </div>
                <span className={ElementStyles.name}>{name}</span>
                <span className={ElementStyles.mass}>{atomicMass}</span>
            </div>
        </div>
    );
};
export default Element;
