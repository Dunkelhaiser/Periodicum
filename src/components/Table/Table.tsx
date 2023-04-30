import { useContext } from "react";
import { v4 as uuid } from "uuid";
import TableStyles from "./Table.module.scss";
import Element from "../Element/Element";
import data from "../../data1.json";
import { OptionsContext } from "../../context/OptionsContext";

const Table: React.FC = () => {
    const { visibility } = useContext(OptionsContext);

    const isVisible = (category: string, phase: string) => {
        return (
            ((category === "nonmetal" || category === "halogen" || category === "noble gas") && !visibility.nonmetal) ||
            ((category === "alkali metal" ||
                category === "alkaline earth metal" ||
                category === "post-transition metal" ||
                category === "transition metal" ||
                category === "metalloid" ||
                category === "lanthanide" ||
                category === "actinide") &&
                !visibility.metal) ||
            (phase === "Solid" && !visibility.solid) ||
            (phase === "Liquid" && !visibility.liquid) ||
            (phase === "Gas" && !visibility.gas)
        );
    };

    return (
        <div className={TableStyles.periodic_table}>
            <div className={TableStyles.empty} />
            <div className={TableStyles.empty} />
            <div className={TableStyles.empty} />
            <div className={TableStyles.empty} />
            {data.map(
                (element) =>
                    (element.number < 57 || element.number >= 71) &&
                    (element.number < 89 || element.number >= 103) && (
                        <Element
                            key={uuid()}
                            symbol={element.symbol}
                            name={element.name}
                            number={element.number}
                            atomicMass={Math.round(element.atomicMass * 1e3) / 1e3}
                            color={element.block as "s" | "p" | "d" | "f"}
                            disabled={isVisible(element.category, element.phase)}
                        />
                    )
            )}
            <div className={TableStyles.second_row}>
                {data.map(
                    (element) =>
                        ((element.number >= 57 && element.number <= 70) || (element.number >= 89 && element.number <= 102)) && (
                            <Element
                                key={uuid()}
                                symbol={element.symbol}
                                name={element.name}
                                number={element.number}
                                atomicMass={Math.round(element.atomicMass * 1e3) / 1e3}
                                color={element.block as "s" | "p" | "d" | "f"}
                                disabled={isVisible(element.category, element.phase)}
                            />
                        )
                )}
            </div>
        </div>
    );
};
export default Table;
