import { useContext } from "react";
import Menu from "./components/Menu/Menu";
import Table from "./components/Table/Table";
import { ThemeContext } from "./context/ThemeContext";
import "./scss/styles.scss";
import ElementInfo from "./components/ElementInfo/ElementInfo";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="app" id={theme}>
            <Table />
            <Menu />
            <ElementInfo />
            <LanguageSwitcher />
        </div>
    );
}

export default App;
