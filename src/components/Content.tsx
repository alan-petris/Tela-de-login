import { useState, useEffect } from "react";
import { FaBoltLightning } from "react-icons/fa6";
export default function Content({ deslogar, usuario }: any) {
    const [contador, setContador] = useState(0);
    const [ativarContador, setAtivarContador] = useState(false);
    const handleExit = () => {
        console.log("Você saiu da aplicação");
        deslogar();
    };
    // const handleAddContador = () => {
    //     setContador(contador + 1);
    // };

    // const handlePerSecond = () => {
    //     setInterval(() => {
    //         setContador(contador + 3);
    //     }, 1000);
    // };
    useEffect(() => {
        // 1. Cria o intervalo e guarda a referência
        if (ativarContador) {
            const intervalId = setInterval(() => {
                // 2. Usa a forma funcional para pegar o valor mais recente
                setContador((c) => c + 1);
            }, 1000);

            // 3. A FUNÇÃO DE LIMPEZA (Cleanup Function)
            // Isso roda antes do efeito executar novamente, limpando o anterior
            return () => clearInterval(intervalId);
        }
    }, [ativarContador]); // Deixe o array vazio se o setInterval não depender de props/state

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
                onClick={() => {
                    setAtivarContador(!ativarContador);
                }}
                className="flex justify-between text-blue-700 p-2 w-40 bg-red-400 cursor-pointer"
            >
                Add contador <FaBoltLightning />
            </button>
        </>
    );
}
