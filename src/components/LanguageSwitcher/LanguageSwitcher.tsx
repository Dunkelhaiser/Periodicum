import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import Styles from "./LanguageSwitcher.module.scss";
import ukraineFlag from "../../images/flags/Ukraine.webp";
import englandFlag from "../../images/flags/UK.webp";
import Modal from "../Modal/Modal";

const LanguageSwitcher: React.FC = () => {
    const [, setSearchParams] = useSearchParams();
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
        <Modal params="languages" query="true" onClose={() => setSearchParams("")}>
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
        </Modal>
    );
};
export default LanguageSwitcher;
