import { useContext } from "react";
import Info from "./components/Info/Info";
import Menu from "./components/Menu/Menu";
import Table from "./components/Table/Table";
import { ThemeContext } from "./context/ThemeContext";
import "./scss/styles.scss";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="app" id={theme}>
            <Info />
            <Table />
            <Menu />
        </div>
    );
}

export default App;
