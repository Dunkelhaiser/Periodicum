import { useRef } from "react";
import S from "./Checkbox.module.scss";

interface Props {
    label: string;
    value: string;
    color?: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ value, label, checked, color = "#f9f9f9", onChange }) => {
    const checkboxRef = useRef<HTMLInputElement>(null);
    const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            checkboxRef.current?.click();
        }
    };

    return (
        <>
            <input type="checkbox" id={value} value={value} checked={checked} onChange={onChange} className={S.check} ref={checkboxRef} />
            <label
                htmlFor={value}
                className={S.checkbox}
                style={{ "--color": color } as React.CSSProperties}
                tabIndex={0}
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                role="checkbox"
                aria-checked={checked}
                onKeyDown={handleKeyDown}
            >
                {label}
            </label>
        </>
    );
};
export default Checkbox;
