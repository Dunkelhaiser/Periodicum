import { useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import Checkbox from "../Checkbox/Checkbox";
import Styles from "./Filters.module.scss";

const Filters: React.FC = () => {
    const { handleCheckboxChange } = useContext(OptionsContext);
    return (
        <section className={Styles.filters}>
            <div>
                <Checkbox label="Nonmetals" value="nonmetal" color="var(--nonmetal)" onChange={handleCheckboxChange} />
                <Checkbox label="Halogens" value="halogen" color="var(--halogen)" onChange={handleCheckboxChange} />
                <Checkbox label="Noble Gases" value="noble gas" color="var(--noble-gas)" onChange={handleCheckboxChange} />
                <Checkbox label="Alkali Metal" value="alkali metal" color="var(--alkali-metal)" onChange={handleCheckboxChange} />
                <Checkbox
                    label="Alkaline Earth Metal"
                    value="alkaline earth metal"
                    color="var(--alkaline-earth-metal)"
                    onChange={handleCheckboxChange}
                />
            </div>
            <div>
                <Checkbox
                    label="Transition Metal"
                    value="transition metal"
                    color="var(--transition-metal)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    label="Post-Transition Metal"
                    value="post-transition metal"
                    color="var(--post-transition-metal)"
                    onChange={handleCheckboxChange}
                />
                <Checkbox label="Metalloid" value="metalloid" color="var(--metalloid)" onChange={handleCheckboxChange} />
                <Checkbox label="Lanthanide" value="lanthanide" color="var(--lanthanide)" onChange={handleCheckboxChange} />
                <Checkbox label="Actinide" value="actinide" color="var(--actinide)" onChange={handleCheckboxChange} />
            </div>
        </section>
    );
};
export default Filters;
