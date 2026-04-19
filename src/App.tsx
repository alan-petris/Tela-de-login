import "./App.css";
import Login from "./components/login";
import Content from "./components/Content";
import { useState } from "react";

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
