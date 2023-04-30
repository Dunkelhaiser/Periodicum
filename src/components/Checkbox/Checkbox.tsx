import S from "./Checkbox.module.scss";

interface Props {
    label: string;
    value: string;
    checked?: boolean;
    onChange: () => void;
}

const Checkbox: React.FC<Props> = ({ value, label, checked, onChange }) => {
    return (
        <>
            <input type="checkbox" id={value} value={value} checked={checked} onChange={onChange} className={S.check} />
            <label htmlFor={value} className={S.checkbox}>
                {label}
            </label>
        </>
    );
};
export default Checkbox;
