import { useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import Checkbox from "../Checkbox/Checkbox";
import S from "./Header.module.scss";

const Header: React.FC = () => {
    const { visibility, setVisibilityWrapper } = useContext(OptionsContext);
    return (
        <header className={S.header}>
            <Checkbox label="Nonmetals" value="nonmetal" checked={visibility.nonmetal} onChange={() => setVisibilityWrapper("nonmetal")} />
            <Checkbox label="Metals" value="metal" checked={visibility.metal} onChange={() => setVisibilityWrapper("metal")} />
            <Checkbox label="Gases" value="gas" checked={visibility.gas} onChange={() => setVisibilityWrapper("gas")} />
            <Checkbox label="Liquids" value="liquid" checked={visibility.liquid} onChange={() => setVisibilityWrapper("liquid")} />
            <Checkbox label="Solids" value="solid" checked={visibility.solid} onChange={() => setVisibilityWrapper("solid")} />
        </header>
    );
};
export default Header;
