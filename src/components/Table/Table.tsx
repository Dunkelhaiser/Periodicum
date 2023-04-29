import { v4 as uuid } from "uuid";
import TableStyles from "./Table.module.scss";
import Element from "../Element/Element";
import data from "../../data1.json";

const Table: React.FC = () => {
    return (
        <div className={TableStyles.periodic_table}>
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
                        />
                    )
            )}
        </div>
    );
};
export default Table;
