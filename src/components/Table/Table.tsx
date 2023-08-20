import { useContext } from "react";
import { useTranslation } from "react-i18next";
import TableStyles from "./Table.module.scss";
import Element from "../Element/Element";
import { OptionsContext } from "../../context/OptionsContext";
import Filters from "../Filters/Filters";
import { LanguageContext } from "../../context/LanguageContext";

const Table: React.FC = () => {
    const { filter } = useContext(OptionsContext);
    const { data } = useContext(LanguageContext);
    const { t } = useTranslation();

    const isDisabled = (category: string) => {
        if (filter.length === 0) {
            return false;
        }
        return (
            (category === t("filters.nonmetal") && !filter.includes(t("filters.nonmetal"))) ||
            (category === t("filters.halogen") && !filter.includes(t("filters.halogen"))) ||
            (category === t("filters.noble_gas") && !filter.includes(t("filters.noble_gas"))) ||
            (category === t("filters.alkaline_earth_metal") && !filter.includes(t("filters.alkaline_earth_metal"))) ||
            (category === t("filters.alkali_metal") && !filter.includes(t("filters.alkali_metal"))) ||
            (category === t("filters.post_transition_metal") && !filter.includes(t("filters.post_transition_metal"))) ||
            (category === t("filters.transition_metal") && !filter.includes(t("filters.transition_metal"))) ||
            (category === t("filters.metalloid") && !filter.includes(t("filters.metalloid"))) ||
            (category === t("filters.lanthanide") && !filter.includes(t("filters.lanthanide"))) ||
            (category === t("filters.actinide") && !filter.includes(t("filters.actinide")))
        );
    };

    return (
        <div className={TableStyles.wrapper}>
            <div className={TableStyles.periodic_table}>
                <div className={TableStyles.empty} />

                <div className={TableStyles.empty}>
                    <Filters />
                </div>
                <div className={TableStyles.empty} />
                <div className={TableStyles.empty} />
                {data?.map(
                    (element) =>
                        (element.atomicNumber < 57 || element.atomicNumber >= 71) &&
                        (element.atomicNumber < 89 || element.atomicNumber >= 103) && (
                            <Element
                                key={element.atomicNumber}
                                symbol={element.symbol}
                                name={element.name}
                                number={element.atomicNumber}
                                atomicMass={element.atomicMass}
                                color={element.block}
                                disabled={isDisabled(element.category)}
                            />
                        )
                )}
                <div className={TableStyles.second_row}>
                    {data?.map(
                        (element) =>
                            ((element.atomicNumber >= 57 && element.atomicNumber <= 70) ||
                                (element.atomicNumber >= 89 && element.atomicNumber <= 102)) && (
                                <Element
                                    key={element.atomicNumber}
                                    symbol={element.symbol}
                                    name={element.name}
                                    number={element.atomicNumber}
                                    atomicMass={element.atomicMass}
                                    color={element.block}
                                    disabled={isDisabled(element.category)}
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    );
};
export default Table;
