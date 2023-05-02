import { useContext } from "react";
import TableStyles from "./Table.module.scss";
import Element from "../Element/Element";
import data from "../../data1.json";
import { OptionsContext } from "../../context/OptionsContext";
import { ElementContext } from "../../context/ElementContext";
import Filters from "../Filters/Filters";

const Table: React.FC = () => {
    const { filter } = useContext(OptionsContext);
    const { element: globalElement, setElement } = useContext(ElementContext);

    const isDisabled = (category: string) => {
        if (filter.length === 0) {
            return false;
        }
        return (
            (category === "nonmetal" && !filter.includes("nonmetal")) ||
            (category === "halogen" && !filter.includes("halogen")) ||
            (category === "noble gas" && !filter.includes("noble gas")) ||
            (category === "alkaline earth metal" && !filter.includes("alkaline earth metal")) ||
            (category === "alkali metal" && !filter.includes("alkali metal")) ||
            (category === "post-transition metal" && !filter.includes("post-transition metal")) ||
            (category === "transition metal" && !filter.includes("transition metal")) ||
            (category === "metalloid" && !filter.includes("metalloid")) ||
            (category === "lanthanide" && !filter.includes("lanthanide")) ||
            (category === "actinide" && !filter.includes("actinide"))
        );
    };

    return (
        <div className={TableStyles.periodic_table}>
            <div className={TableStyles.empty} />

            <div className={TableStyles.empty}>
                <Filters />
            </div>
            <div className={TableStyles.empty} />
            <div className={TableStyles.empty} />
            {data.map(
                (element) =>
                    (element.number < 57 || element.number >= 71) &&
                    (element.number < 89 || element.number >= 103) && (
                        <Element
                            onClick={() => setElement(globalElement === element.symbol ? "" : element.symbol)}
                            key={element.number}
                            symbol={element.symbol}
                            name={element.name}
                            number={element.number}
                            atomicMass={Math.round(element.atomicMass * 1e3) / 1e3}
                            color={element.block as "s" | "p" | "d" | "f"}
                            disabled={isDisabled(element.category)}
                        />
                    )
            )}
            <div className={TableStyles.second_row}>
                {data.map(
                    (element) =>
                        ((element.number >= 57 && element.number <= 70) || (element.number >= 89 && element.number <= 102)) && (
                            <Element
                                onClick={() => setElement(globalElement === element.symbol ? "" : element.symbol)}
                                key={element.number}
                                symbol={element.symbol}
                                name={element.name}
                                number={element.number}
                                atomicMass={Math.round(element.atomicMass * 1e3) / 1e3}
                                color={element.block as "s" | "p" | "d" | "f"}
                                disabled={isDisabled(element.category)}
                            />
                        )
                )}
            </div>
        </div>
    );
};
export default Table;
