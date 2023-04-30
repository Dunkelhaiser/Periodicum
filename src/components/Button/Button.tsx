import S from "./Button.module.scss";

interface Props {
    label: string;
    color?: "primary";
    type?: "button" | "submit" | "reset";
    styleType?: "normal" | "outline" | "text";
}

const Button: React.FC<Props> = ({ label, color = "primary", type = "button", styleType = "normal" }) => {
    return (
        <button className={`${S.button} ${S[color]} ${S[styleType]}`} type={type}>
            {label}
        </button>
    );
};
export default Button;
