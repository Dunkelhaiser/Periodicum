import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faAtom, faEarthEurope, faMagnet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultTFuncReturn } from "i18next";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ElementContext } from "../../context/ElementContext";
import { LanguageContext } from "../../context/LanguageContext";
import { formatValue } from "../../utilities/utilities";
import ModalWindow from "../ModalWindow/ModalWindow";
import S from "./Info.module.scss";

interface Props {
    label: string;
    value: string | number | undefined;
    unit?: string | DefaultTFuncReturn;
    capitalize?: boolean;
}

const Data: React.FC<Props> = ({ label, value, unit, capitalize = true }) => {
    const nullValue = !value && value !== 0;
    const formattedValue = nullValue ? "---" : formatValue(value);
    const formattedUnit = unit && !nullValue && <span className={S.unit}>{unit === "%" || unit.includes("°") ? unit : ` ${unit}`}</span>;
    return (
        <div className={S.data}>
            <p className={`${S.property} ${nullValue ? S.null : ""}`}>{label}</p>
            <p className={`${S.value} ${nullValue ? S.null : ""} ${!capitalize ? S.unit : ""}`}>
                {formattedValue}
                {formattedUnit}
            </p>
        </div>
    );
};

interface ModalProps {
    isShowing: boolean;
    modalRef: React.RefObject<HTMLDivElement>;
}

const Info: React.FC<ModalProps> = ({ isShowing, modalRef }) => {
    const { element, setElement } = useContext(ElementContext);
    const { data } = useContext(LanguageContext);
    const { t } = useTranslation();

    useEffect(() => {
        if (!isShowing) {
            setElement("");
        }
    }, [isShowing]);

    const elementData = data.find((el) => el.symbol === element);

    const getCategoryColor = (category?: string) => {
        switch (category) {
            case "alkali metal":
                return "var(--alkali-metal)";
            case "alkaline earth metal":
                return "var(--alkaline-earth-metal)";
            case "transition metal":
                return "var(--transition-metal)";
            case "post-transition metal":
                return "var(--post-transition-metal)";
            case "metalloid":
                return "var(--metalloid)";
            case "nonmetal":
                return "var(--nonmetal)";
            case "halogen":
                return "var(--halogen)";
            case "noble gas":
                return "var(--noble-gas)";
            case "lanthanide":
                return "var(--lanthanide)";
            case "actinide":
                return "var(--actinide)";
            default:
                return "transparent";
        }
    };

    return (
        <ModalWindow show={isShowing} modalRef={modalRef}>
            <div className={S.heading}>
                <h2 className={S.header}>
                    {elementData?.name} <span className={S.symbol}>( {elementData?.symbol} )</span>
                </h2>
                <div className={S.badges}>
                    <span className={S.badge} style={{ backgroundColor: getCategoryColor(elementData?.category) }}>
                        {elementData?.category}
                    </span>
                    {elementData?.radioactive && <span className={S.radioactive}>{t("info.radioactive")}</span>}
                </div>
            </div>
            <div className={S.section}>
                <h3 className={S.title} style={{ backgroundColor: "var(--noble-gas)" }}>
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
            <div className={S.section}>
                <h3 className={S.title} style={{ backgroundColor: "var(--alkali-metal)" }}>
                    <FontAwesomeIcon icon={faMagnet} /> {t("info.electromagnetic_properties")}
                </h3>
                <Data label={t("info.electronegativity")} value={elementData?.electronegativity} />
                <Data label={t("info.magnetic_type")} value={elementData?.magneticType} />
                <Data label={t("info.electrical_type")} value={elementData?.electricalType} />
                <Data label={t("info.electrical_conductivity")} value={elementData?.electricalConductivity} unit={t("info.s_m")} />
                <Data label={t("info.resistivity")} value={elementData?.resistivity} unit={t("info.ohm_m")} />
                <Data label={t("info.superconducting_point")} value={elementData?.superconductingPoint} unit="°C" />
            </div>
            <div className={S.section}>
                <h3 className={S.title} style={{ backgroundColor: "var(--lanthanide)" }}>
                    <FontAwesomeIcon icon={faEarthEurope} /> {t("info.abundance")}
                </h3>
                <Data label={t("info.universe")} value={elementData?.abundanceUniverse} unit="%" />
                <Data label={t("info.sun")} value={elementData?.abundanceSun} unit="%" />
                <Data label={t("info.earth_crust")} value={elementData?.abundanceEarth} unit="%" />
                <Data label={t("info.oceans")} value={elementData?.abundanceOceans} unit="%" />
                <Data label={t("info.human_body")} value={elementData?.abundanceHumans} unit="%" />
            </div>
            <div className={S.section}>
                <h3 className={S.title} style={{ backgroundColor: "var(--post-transition-metal)" }}>
                    <FontAwesomeIcon icon={faReact} /> {t("info.overview")}
                </h3>
                <Data label={t("info.latin_name")} value={elementData?.latinName} />
                <Data label={t("info.year_of_discovery")} value={elementData?.yearDiscovered} />
                <Data label={t("info.discovered_by")} value={elementData?.discoveredBy} />
                <Data label={t("info.cas_number")} value={elementData?.casNumber} />
                <Data label={t("info.description")} value={elementData?.description} />
            </div>
        </ModalWindow>
    );
};
export default Info;
