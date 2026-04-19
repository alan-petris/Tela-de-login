import { useState } from "react";
export default function Content({ deslogar, usuario }: any) {
    const [contador, setContador] = useState(0);
    const handleExit = () => {
        console.log("Você saiu da aplicação");
        deslogar();
    };
    // const handleAddContador = () => {
    //     setContador(contador + 1);
    // };

    const handlePerSecond = () => {
        setInterval(() => {
            setContador(contador + 3);
        }, 1000);
    };

    return (
        <>
            <h2>Bem vindo: {usuario}</h2>
            <p>Você passou da tela de login utilizando conditional render</p>
            <button
                onClick={handleExit}
                className=" p-1.5 text-red-500 cursor-pointer"
            >
                Sair
            </button>
            <p>Contador: {contador}</p>
            <button
                onClick={handlePerSecond}
                className="text-blue-500 p-2.5 w-1/3 bg-red-200 cursor-pointer"
            >
                Add contador
            </button>
        </>
    );
}
