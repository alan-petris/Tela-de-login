import "./App.css";
import Content from "./components/Content";
import { useState } from "react";
import Login from "./components/Login";

function App() {
    const [logged, setLogged] = useState(true);
    const [usuario, setUsuario] = useState("");
    const handleLogger = () => {
        setLogged(!logged);
    };
    const handleUser = (nome: string) => {
        setUsuario(nome);
    };
    return (
        <>
            {logged ? (
                <Login logar={handleLogger} usuario={handleUser} />
            ) : (
                <Content deslogar={handleLogger} usuario={usuario} />
            )}
        </>
    );
}

export default App;
