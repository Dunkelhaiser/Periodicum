import { useContext } from "react";
import { ElementContext } from "../../context/ElementContext";
import { LanguageContext } from "../../context/LanguageContext";
import { formatValue } from "../../utilities/utilities";
import ModalWindow from "../ModalWindow/ModalWindow";
import S from "./Info.module.scss";

interface Props {
    label: string;
    value: string | number | undefined;
    unit?: string;
    capitalize?: boolean;
}

const Data: React.FC<Props> = ({ label, value, unit, capitalize = true }) => {
    const nullValue = !value && value !== 0;
    const formattedValue = nullValue ? "---" : formatValue(value);
    const formattedUnit = unit && !nullValue && <span className={S.unit}>{unit === "%" || unit.includes("°") ? unit : ` ${unit}`}</span>;
    return (
        <div className={S.data}>
            <p className={`${S.property} ${nullValue ? S.null : ""} ${S.capitalize}`}>{label}</p>
            <p className={`${S.value} ${nullValue ? S.null : ""} ${capitalize ? S.capitalize : ""}`}>
                {formattedValue}
                {formattedUnit}
            </p>
        </div>
    );
};

const Info: React.FC = () => {
    const { element, setElement } = useContext(ElementContext);
    const { data } = useContext(LanguageContext);

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
        <ModalWindow show={Boolean(elementData)} onClose={() => setElement("")}>
            <div className={S.heading}>
                <h2 className={S.header}>{elementData?.name}</h2>
                <div className={S.badges}>
                    <span className={S.badge} style={{ backgroundColor: getCategoryColor(elementData?.category) }}>
                        {elementData?.category}
                    </span>
                    {elementData?.radioactive && <span className={S.radioactive}>Radioactive</span>}
                </div>
            </div>
            <div className={S.section}>
                <h3 className={S.title}>Atomic Properties</h3>
                <Data label="Atomic number" value={elementData?.atomicNumber} />
                <Data label="Period" value={elementData?.period} />
                <Data label="Group" value={elementData?.group} />
                <Data label="Block" value={elementData?.block} capitalize={false} />
                <Data label="State" value={elementData?.state} />
                <Data label="Crystal structure" value={elementData?.crystalStructure} />
                <Data label="Atomic mass" value={elementData?.atomicMass} unit="g/mol" />
                <Data label="Density" value={elementData?.density} unit="g/cm³" />
                <Data label="Melting point" value={elementData?.meltingPoint} unit="°C" />
                <Data label="Boiling point" value={elementData?.boilingPoint} unit="°C" />
                <Data label="Electrons" value={elementData?.electronNumber} />
                <Data label="Protons" value={elementData?.protonNumber} />
                <Data label="Neutrons" value={elementData?.neutronNumber} />
                <Data label="Valence electrons" value={elementData?.valenceElectrons} />
                <Data label="Ionization energy" value={elementData?.ionizationEnergy} unit="eV" />
                <Data label="Electron Affinity" value={elementData?.electronAffinity} unit="kJ/mole" />
                <Data label="Atomic radius" value={elementData?.atomicRadius} unit="pm" />
                <Data label="Electron configuration" value={elementData?.electronConfiguration} />
                <Data label="Electron configuration( semantic )" value={elementData?.electronConfigurationSemantic} />
            </div>
            <div className={S.section}>
                <h3 className={S.title}>Electromagnetic Properties</h3>
                <Data label="Electronegativity" value={elementData?.electronegativity} />
                <Data label="Magnetic type" value={elementData?.magneticType} />
                <Data label="Electrical type" value={elementData?.electricalType} />
                <Data label="Electrical conductivity" value={elementData?.electricalConductivity} unit="S/m" />
                <Data label="Resistivity" value={elementData?.resistivity} unit="Ω·m" />
                <Data label="Superconducting point" value={elementData?.superconductingPoint} unit="°C" />
            </div>
            <div className={S.section}>
                <h3 className={S.title}>Abundance</h3>
                <Data label="Universe" value={elementData?.abundanceUniverse} unit="%" />
                <Data label="Sun" value={elementData?.abundanceSun} unit="%" />
                <Data label="Earth crust" value={elementData?.abundanceEarth} unit="%" />
                <Data label="Oceans" value={elementData?.abundanceOceans} unit="%" />
                <Data label="Human body" value={elementData?.abundanceHumans} unit="%" />
            </div>
            <div className={S.section}>
                <h3 className={S.title}>Overview</h3>
                <Data label="Latin name" value={elementData?.latinName} />
                <Data label="Year of discovery" value={elementData?.yearDiscovered} />
                <Data label="Discovered by" value={elementData?.discoveredBy} />
                <Data label="CAS number" value={elementData?.casNumber} />
                <Data label="Description" value={elementData?.description} capitalize={false} />
            </div>
        </ModalWindow>
    );
};
export default Info;
