import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { OptionsContext } from "../../context/OptionsContext";
import Checkbox from "../Checkbox/Checkbox";
import Styles from "./Filters.module.scss";

const Filters: React.FC = () => {
    const { handleCheckboxChange } = useContext(OptionsContext);
    const { t } = useTranslation();
    return (
        <section className={Styles.filters}>
            <div>
                <Checkbox
                    label={t("filters.nonmetals")}
                    value={t("filters.nonmetal")}
                    color="var(--nonmetal)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label={t("filters.halogens")}
                    value={t("filters.halogen")}
                    color="var(--halogen)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label={t("filters.noble_gases")}
                    value={t("filters.noble_gas")}
                    color="var(--noble-gas)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label={t("filters.alkali_metals")}
                    value={t("filters.alkali_metal")}
                    color="var(--alkali-metal)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label={t("filters.alkaline_earth_metals")}
                    value={t("filters.alkaline_earth_metal")}
                    color="var(--alkaline-earth-metal)"
                    onChange={handleCheckboxChange}
                />
            </div>
            <div>
                <Checkbox
                    label={t("filters.transition_metals")}
                    value={t("filters.transition_metal")}
                    color="var(--transition-metal)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label={t("filters.post_transition_metals")}
                    value={t("filters.post_transition_metal")}
                    color="var(--post-transition-metal)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label={t("filters.metalloids")}
                    value={t("filters.metalloid")}
                    color="var(--metalloid)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label={t("filters.lanthanides")}
                    value={t("filters.lanthanide")}
                    color="var(--lanthanide)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label={t("filters.actinides")}
                    value={t("filters.actinide")}
                    color="var(--actinide)"
                    onChange={handleCheckboxChange}
                />
            </div>
        </section>
    );
};
export default Filters;
