import { useContext } from "react";
import Info from "./components/Info/Info";
import Menu from "./components/Menu/Menu";
import Table from "./components/Table/Table";
import { ElementContext } from "./context/ElementContext";
import { ThemeContext } from "./context/ThemeContext";
import "./scss/styles.scss";

function App() {
    const { element } = useContext(ElementContext);
    const { theme } = useContext(ThemeContext);
    return (
        <div className="app" id={theme}>
            <Table />
            {element && <Info />}
            <Menu />
        </div>
    );
}

export default App;
