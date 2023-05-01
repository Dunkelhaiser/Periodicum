import { useContext } from "react";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Table from "./components/Table/Table";
import { ElementContext } from "./context/ElementContext";
import "./scss/styles.scss";

function App() {
    const { element } = useContext(ElementContext);
    return (
        <>
            <Header />
            <Table />
            {element && <Info />}
        </>
    );
}

export default App;
