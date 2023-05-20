import { Suspense, useContext } from "react";
import { useTranslation } from "react-i18next";
import { OptionsContext } from "../../context/OptionsContext";
import Checkbox from "../Checkbox/Checkbox";
import Styles from "./Filters.module.scss";

const Filters: React.FC = () => {
    const { handleCheckboxChange } = useContext(OptionsContext);
    const { t, i18n } = useTranslation();
    return (
        <section className={Styles.filters}>
            <div>
                <Checkbox label={t("filters.nonmetals")} value="nonmetal" color="var(--nonmetal)" onChange={handleCheckboxChange} />
                <Checkbox label={t("filters.halogens")} value="halogen" color="var(--halogen)" onChange={handleCheckboxChange} />
                <Checkbox label={t("filters.noble_gases")} value="noble gas" color="var(--noble-gas)" onChange={handleCheckboxChange} />
                <Checkbox
                    label={t("filters.alkali_metals")}
                    value="alkali metal"
                    color="var(--alkali-metal)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label={t("filters.alkaline_earth_metals")}
                    value="alkaline earth metal"
                    color="var(--alkaline-earth-metal)"
                    onChange={handleCheckboxChange}
                />
            </div>
            <div>
                <Checkbox
                    label={t("filters.transition_metals")}
                    value="transition metal"
                    color="var(--transition-metal)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label={t("filters.post_transition_metals")}
                    value="post-transition metal"
                    color="var(--post-transition-metal)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox label={t("filters.metalloids")} value="metalloid" color="var(--metalloid)" onChange={handleCheckboxChange} />
                <Checkbox label={t("filters.lanthanides")} value="lanthanide" color="var(--lanthanide)" onChange={handleCheckboxChange} />
                <Checkbox label={t("filters.actinides")} value="actinide" color="var(--actinide)" onChange={handleCheckboxChange} />
            </div>
        </section>
    );
};
// export default Filters;
export default function WrappedFilters() {
    return (
        <Suspense fallback="loading">
            <Filters />
        </Suspense>
    );
}
