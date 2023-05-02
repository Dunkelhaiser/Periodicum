import { useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import Checkbox from "../Checkbox/Checkbox";
import Styles from "./Filters.module.scss";

const Filters: React.FC = () => {
    const { handleCheckboxChange } = useContext(OptionsContext);
    return (
        <section className={Styles.filters}>
            <div>
                <Checkbox label="Nonmetals" value="nonmetal" color="#ffc171" onChange={handleCheckboxChange} />
                <Checkbox label="Halogens" value="halogen" color="#ffea71" onChange={handleCheckboxChange} />
                <Checkbox label="Noble Gases" value="noble gas" color="#523c6f" onChange={handleCheckboxChange} />
                <Checkbox label="Alkali Metal" value="alkali metal" color="#ff616d" onChange={handleCheckboxChange} />
                <Checkbox label="Alkaline Earth Metal" value="alkaline earth metal" color="#ff9971" onChange={handleCheckboxChange} />
            </div>
            <div>
                <Checkbox label="Transition Metal" value="transition metal" color="#37cfdc" onChange={handleCheckboxChange} />
                <Checkbox label="Post-Transition Metal" value="post-transition metal" color="#5a88e5" onChange={handleCheckboxChange} />
                <Checkbox label="Metalloid" value="metalloid" color="#303d57" onChange={handleCheckboxChange} />
                <Checkbox label="Lanthanide" value="lanthanide" color="#58ac30" onChange={handleCheckboxChange} />
                <Checkbox label="Actinide" value="actinide" color="#a7df62" onChange={handleCheckboxChange} />
            </div>
        </section>
    );
};
export default Filters;
