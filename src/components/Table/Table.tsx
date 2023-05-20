import { useContext } from "react";
import TableStyles from "./Table.module.scss";
import Element from "../Element/Element";
import { OptionsContext } from "../../context/OptionsContext";
import { ElementContext } from "../../context/ElementContext";
import Filters from "../Filters/Filters";
import { LanguageContext } from "../../context/LanguageContext";
import Info from "../Info/Info";
import useModal from "../ModalWindow/useModal";

const Table: React.FC = () => {
    const { filter } = useContext(OptionsContext);
    const { element: globalElement, setElement } = useContext(ElementContext);
    const { data } = useContext(LanguageContext);
    const { isShowing, showModal, modalRef } = useModal();

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
        <>
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
                                    onClick={() => {
                                        setElement(globalElement === element.symbol ? "" : element.symbol);
                                        showModal();
                                    }}
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
                                        onClick={() => {
                                            setElement(globalElement === element.symbol ? "" : element.symbol);
                                            showModal();
                                        }}
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
            <Info isShowing={isShowing} modalRef={modalRef} />
        </>
    );
};
export default Table;
