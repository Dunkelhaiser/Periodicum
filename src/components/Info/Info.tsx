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
    );
};
export default Info;
