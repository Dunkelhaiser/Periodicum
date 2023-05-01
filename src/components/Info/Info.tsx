import { useContext } from "react";
import { ElementContext } from "../../context/ElementContext";
import Element from "../Element/Element";
import S from "./Info.module.scss";
import data from "../../data1.json";

const Info: React.FC = () => {
    const { element } = useContext(ElementContext);

    const elementData = data.find((el) => el.symbol === element);

    return (
        <div className={S.info}>
            <div className={S.summary}>
                {elementData && (
                    <div>
                        <Element
                            symbol={elementData.symbol}
                            name={elementData.name}
                            number={elementData.number}
                            atomicMass={Math.round(elementData.atomicMass * 1e3) / 1e3}
                            color={elementData.block as "s" | "p" | "d" | "f"}
                        />
                    </div>
                )}
                <p>{elementData?.summary}</p>
            </div>
            <div className={S.data}>
                <p>
                    <span>Discovered by:</span> {elementData?.discoveredBy}
                </p>
                {/* <p>
                        <span>Named by:</span> {elementData?.namedBy || elementData?.discoveredBy}
                    </p> */}
                <p>
                    <span>Atomic weight:</span> {elementData?.atomicMass}
                </p>
                <p>
                    <span>Boiling point:</span> {elementData?.boil}
                </p>
                <p>
                    <span>Melting point:</span> {elementData?.melt}
                </p>
                <p>
                    <span>Density:</span> {elementData?.density}
                </p>
                <p>
                    <span>Electron configuration:</span> {elementData?.electronConfiguration}
                </p>
            </div>
        </div>
    );
};
export default Info;
