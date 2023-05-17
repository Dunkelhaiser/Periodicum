import { useContext } from "react";
import { ElementContext } from "../../context/ElementContext";
import { LanguageContext } from "../../context/LanguageContext";
import ModalWindow from "../ModalWindow/ModalWindow";
import S from "./Info.module.scss";

interface Props {
    label: string;
    value: string | number | undefined;
}
const Data: React.FC<Props> = ({ label, value }) => {
    const nullValue = !value && value !== 0;
    return (
        <div className={S.data}>
            <p className={`${S.property} ${nullValue ? S.null : ""}`}>{label}</p>
            <p className={`${S.value} ${nullValue ? S.null : ""}`}>{nullValue ? "---" : value}</p>
        </div>
    );
};

const Info: React.FC = () => {
    const { element, setElement } = useContext(ElementContext);
    const { data } = useContext(LanguageContext);

    const elementData = data.find((el) => el.symbol === element);

    return (
        <ModalWindow show={Boolean(elementData)} onClose={() => setElement("")}>
            <h2 className={S.header}>{elementData?.name}</h2>
            <div className={S.section}>
                <h3 className={S.title}>Atomic Properties</h3>
                <Data label="Atomic number" value={elementData?.atomicNumber} />
                <Data label="Period" value={elementData?.period} />
                <Data label="Group" value={elementData?.group} />
                <Data label="Block" value={elementData?.block} />
                <Data label="Crystal structure" value={elementData?.crystalStructure} />
                <Data label="Atomic mass" value={elementData?.atomicMass} />
                <Data label="Density" value={elementData?.density} />
                <Data label="Melting point" value={elementData?.meltingPoint} />
                <Data label="Boiling point" value={elementData?.boilingPoint} />
                <Data label="Electrons" value={elementData?.electronNumber} />
                <Data label="Protons" value={elementData?.protonNumber} />
                <Data label="Neutrons" value={elementData?.neutronNumber} />
                <Data label="Valence electrons" value={elementData?.valenceElectrons} />
                <Data label="Ionization energy" value={elementData?.ionizationEnergy} />
                <Data label="Electron Affinity" value={elementData?.electronAffinity} />
                <Data label="Atomic radius" value={elementData?.atomicRadius} />
                <Data label="Electron configuration" value={elementData?.electronConfiguration} />
                <Data label="Electron configuration( semantic )" value={elementData?.electronConfigurationSemantic} />
            </div>
            <div className={S.section}>
                <h3 className={S.title}>Electromagnetic Properties</h3>
                <Data label="Electronegativity" value={elementData?.electronegativity} />
                <Data label="Magnetic type" value={elementData?.magneticType} />
                <Data label="Electrical type" value={elementData?.electricalType} />
                <Data label="Electrical conductivity" value={elementData?.electricalConductivity} />
                <Data label="Resistivity" value={elementData?.resistivity} />
                <Data label="Superconducting point" value={elementData?.superconductingPoint} />
            </div>
            <div className={S.section}>
                <h3 className={S.title}>Abundance</h3>
                <Data label="Universe" value={elementData?.abundanceUniverse} />
                <Data label="Sun" value={elementData?.abundanceSun} />
                <Data label="Earth crust" value={elementData?.abundanceEarth} />
                <Data label="Oceans" value={elementData?.abundanceOceans} />
                <Data label="Human body" value={elementData?.abundanceHumans} />
            </div>
            <div className={S.section}>
                <h3 className={S.title}>Overview</h3>
                <Data label="Latin name" value={elementData?.latinName} />
                <Data label="Year of discovery" value={elementData?.yearDiscovered} />
                <Data label="Discovered by" value={elementData?.discoveredBy} />
                <Data label="CAS number" value={elementData?.casNumber} />
            </div>
        </ModalWindow>
    );
};
export default Info;
