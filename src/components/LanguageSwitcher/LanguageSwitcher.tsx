import { useTranslation } from "react-i18next";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import ModalWindow from "../ModalWindow/ModalWindow";
import Styles from "./LanguageSwitcher.module.scss";
import ukraineFlag from "../../images/flags/Ukraine.webp";
import englandFlag from "../../images/flags/UK.webp";

interface ModalProps {
    isShowing: boolean;
    modalRef: React.RefObject<HTMLDivElement>;
}

const LanguageSwitcher: React.FC<ModalProps> = ({ isShowing, modalRef }) => {
    const { t, i18n } = useTranslation();
    const locales: { [key: string]: { title: string; native: string; flag: string } } = {
        en: {
            title: t("languages.english"),
            native: "English",
            flag: englandFlag,
        },
        ua: {
            title: t("languages.ukrainian"),
            native: "Українська",
            flag: ukraineFlag,
        },
    };
    return (
        <ModalWindow show={isShowing} modalRef={modalRef}>
            <h2 className={Styles.title}>{t("languages.languages")}</h2>
            <ul className={Styles.list}>
                {Object.keys(locales).map((locale) => (
                    <LanguageBtn
                        key={locale}
                        label={locales[locale].title}
                        native={locales[locale].native}
                        flag={locales[locale].flag}
                        onClick={() => i18n.changeLanguage(locale)}
                        active={i18n.resolvedLanguage === locale}
                    />
                ))}
            </ul>
        </ModalWindow>
    );
};
export default LanguageSwitcher;
