import Styles from "./LanguageBtn.module.scss";

interface Props {
    label: string;
    native: string;
    onClick: () => void;
    active?: boolean;
    flag: string;
}

const LanguageBtn: React.FC<Props> = ({ label, native, onClick, active, flag }) => {
    return (
        <button onClick={onClick} type="button" className={`${Styles.button} ${active ? Styles.active : ""}`}>
            <img className={Styles.flag} src={flag} alt="Flag" />
            <div className={Styles.info}>
                {label}
                <span className={Styles.native}>{native}</span>
            </div>
        </button>
    );
};
export default LanguageBtn;
