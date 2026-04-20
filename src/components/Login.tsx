import { useState, useEffect } from "react";
import ErrorLogged from "./ErrorLogged";

export default function Login({ logar, usuario }: any) {
    const [user, setUser] = useState("");
    const [data, setData] = useState("");
    const handleClick = (e: any) => {
        e.preventDefault();

        usuario(user);
        user && logar();
        console.log("Você está logado !");
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setData("Data adicionado após 3s");
        }, 3000);
    });
    return (
        <div className="border-2 rounded-md h-[100] w-[100] m-auto p-4 bg-cyan-700">
            <h2>Login</h2>
            <form action="" className="flex items-center flex-col gap-2">
                <input
                    value={user}
                    onChange={(e) => {
                        setUser(e.target.value);
                    }}
                    type="text"
                    placeholder="Digite seu usuario"
                />
                <input
                    className=""
                    type="password"
                    name=""
                    id=""
                    placeholder="Digite sua senha"
                />
                <button type="submit" onClick={handleClick}>
                    Logar
                </button>
            </form>
            {<p>Dado adicionado: {data ? data : "Carregando..."}</p>}
        </div>
    );
}
