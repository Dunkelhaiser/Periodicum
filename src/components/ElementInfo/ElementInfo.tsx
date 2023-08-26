import { useSearchParams } from "react-router-dom";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faAtom, faEarthEurope, faMagnet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultTFuncReturn } from "i18next";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../context/LanguageContext";
import { formatValue } from "../../utilities/utilities";
import Modal from "../Modal/Modal";
import Styles from "./ElementInfo.module.scss";

interface Props {
    label: string;
    value: string | number | undefined;
    unit?: string | DefaultTFuncReturn;
    capitalize?: boolean;
}

const Data: React.FC<Props> = ({ label, value, unit, capitalize = true }) => {
    const nullValue = !value && value !== 0;
    const formattedValue = nullValue ? "---" : formatValue(value);
    const formattedUnit = unit && !nullValue && (
        <span className={Styles.unit}>{unit === "%" || unit.includes("°") ? unit : ` ${unit}`}</span>
    );
    return (
        <div className={Styles.data}>
            <p className={`${Styles.property} ${nullValue ? Styles.null : ""}`}>{label}</p>
            <p className={`${Styles.value} ${nullValue ? Styles.null : ""} ${!capitalize ? Styles.unit : ""}`}>
                {formattedValue}
                {formattedUnit}
            </p>
        </div>
    );
};

const ElementInfo: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data } = useContext(LanguageContext);
    const { t } = useTranslation();

    const elementData = data.find((el) => el.symbol.toLowerCase() === searchParams.get("element")?.toLowerCase());

    const getCategoryColor = (category?: string) => {
        switch (category) {
            case t("filters.alkali_metal"):
                return "var(--alkali-metal)";
            case t("filters.alkaline_earth_metal"):
                return "var(--alkaline-earth-metal)";
            case t("filters.transition_metal"):
                return "var(--transition-metal)";
            case t("filters.post_transition_metal"):
                return "var(--post-transition-metal)";
            case t("filters.metalloid"):
                return "var(--metalloid)";
            case t("filters.nonmetal"):
                return "var(--nonmetal)";
            case t("filters.halogen"):
                return "var(--halogen)";
            case t("filters.noble_gas"):
                return "var(--noble-gas)";
            case t("filters.lanthanide"):
                return "var(--lanthanide)";
            case t("filters.actinide"):
                return "var(--actinide)";
            default:
                return "transparent";
        }
    };

    if (!elementData) {
        return null;
    }

    return (
        <Modal onClose={() => setSearchParams("")} params="element">
            <div className={Styles.heading}>
                <h2 className={Styles.header}>
                    {elementData?.name} <span className={Styles.symbol}>( {elementData?.symbol} )</span>
                </h2>
                <div className={Styles.badges}>
                    <span className={Styles.badge} style={{ backgroundColor: getCategoryColor(elementData?.category) }}>
                        {elementData?.category}
                    </span>
                    {elementData?.radioactive && <span className={Styles.radioactive}>{t("info.radioactive")}</span>}
                </div>
            </div>
            <div className={Styles.section}>
                <h3 className={Styles.title} style={{ backgroundColor: "var(--noble-gas)" }}>
                    <FontAwesomeIcon icon={faAtom} /> {t("info.atomic_properties")}
                </h3>
                <Data label={t("info.atomic_number")} value={elementData?.atomicNumber} />
                <Data label={t("info.period")} value={elementData?.period} />
                <Data label={t("info.group")} value={elementData?.group} />
                <Data label={t("info.block")} value={elementData?.block} capitalize={false} />
                <Data label={t("info.state")} value={elementData?.state} />
                <Data label={t("info.crystal_structure")} value={elementData?.crystalStructure} />
                <Data label={t("info.atomic_mass")} value={elementData?.atomicMass} unit={t("info.g_mol")} />
                <Data label={t("info.density")} value={elementData?.density} unit={t("info.g_cm3")} />
                <Data label={t("info.melting_point")} value={elementData?.meltingPoint} unit="°C" />
                <Data label={t("info.boiling_point")} value={elementData?.boilingPoint} unit="°C" />
                <Data label={t("info.electrons")} value={elementData?.electronNumber} />
                <Data label={t("info.protons")} value={elementData?.protonNumber} />
                <Data label={t("info.neutrons")} value={elementData?.neutronNumber} />
                <Data label={t("info.valence_electrons")} value={elementData?.valenceElectrons} />
                <Data label={t("info.ionization_energy")} value={elementData?.ionizationEnergy} unit={t("info.ev")} />
                <Data label={t("info.electron_affinity")} value={elementData?.electronAffinity} unit={t("info.kj_mol")} />
                <Data label={t("info.atomic_radius")} value={elementData?.atomicRadius} unit="pm" />
                <Data label={t("info.electron_configuration")} value={elementData?.electronConfiguration} />
                <Data label={t("info.electron_configuration_semantic")} value={elementData?.electronConfigurationSemantic} />
            </div>
            <div className={Styles.section}>
                <h3 className={Styles.title} style={{ backgroundColor: "var(--alkali-metal)" }}>
                    <FontAwesomeIcon icon={faMagnet} /> {t("info.electromagnetic_properties")}
                </h3>
                <Data label={t("info.electronegativity")} value={elementData?.electronegativity} />
                <Data label={t("info.magnetic_type")} value={elementData?.magneticType} />
                <Data label={t("info.electrical_type")} value={elementData?.electricalType} />
                <Data label={t("info.electrical_conductivity")} value={elementData?.electricalConductivity} unit={t("info.s_m")} />
                <Data label={t("info.resistivity")} value={elementData?.resistivity} unit={t("info.ohm_m")} />
                <Data label={t("info.superconducting_point")} value={elementData?.superconductingPoint} unit="°C" />
            </div>
            <div className={Styles.section}>
                <h3 className={Styles.title} style={{ backgroundColor: "var(--lanthanide)" }}>
                    <FontAwesomeIcon icon={faEarthEurope} /> {t("info.abundance")}
                </h3>
                <Data label={t("info.universe")} value={elementData?.abundanceUniverse} unit="%" />
                <Data label={t("info.sun")} value={elementData?.abundanceSun} unit="%" />
                <Data label={t("info.earth_crust")} value={elementData?.abundanceEarth} unit="%" />
                <Data label={t("info.oceans")} value={elementData?.abundanceOceans} unit="%" />
                <Data label={t("info.human_body")} value={elementData?.abundanceHumans} unit="%" />
            </div>
            <div className={Styles.section}>
                <h3 className={Styles.title} style={{ backgroundColor: "var(--post-transition-metal)" }}>
                    <FontAwesomeIcon icon={faReact} /> {t("info.overview")}
                </h3>
                <Data label={t("info.latin_name")} value={elementData?.latinName} />
                <Data label={t("info.year_of_discovery")} value={elementData?.yearDiscovered} />
                <Data label={t("info.discovered_by")} value={elementData?.discoveredBy} />
                <Data label={t("info.named_after")} value={elementData?.namedAfter} />
                <Data label={t("info.cas_number")} value={elementData?.casNumber} />
                <Data label={t("info.description")} value={elementData?.description} />
            </div>
        </Modal>
    );
};
export default ElementInfo;
