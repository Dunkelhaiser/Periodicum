import { useRef, useState } from "react";
import { handleKeyDown } from "../../utilities/utilities";
import S from "./Checkbox.module.scss";

interface Props {
    label: string;
    value: string;
    color?: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ value, label, checked = false, color = "#f9f9f9", onChange }) => {
    const [check, setCheck] = useState(checked);
    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(e.target.checked);
        onChange(e);
    };

    return (
        <>
            <input type="checkbox" id={value} value={value} checked={check} onChange={handleChange} className={S.check} ref={checkboxRef} />
            <label
                htmlFor={value}
                className={S.checkbox}
                style={{ "--color": color } as React.CSSProperties}
                tabIndex={0}
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                role="checkbox"
                aria-checked={check}
                onKeyDown={(e) => handleKeyDown(e, () => checkboxRef.current?.click())}
            >
                {label}
            </label>
        </>
    );
};
export default Checkbox;
