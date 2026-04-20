import { useState, useEffect } from "react";
export default function Content({ deslogar, usuario }: any) {
    const [contador, setContador] = useState(0);
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
        const intervalId = setInterval(() => {
            // 2. Usa a forma funcional para pegar o valor mais recente
            setContador((c) => c + 1);
        }, 1000);

        // 3. A FUNÇÃO DE LIMPEZA (Cleanup Function)
        // Isso roda antes do efeito executar novamente, limpando o anterior
        return () => clearInterval(intervalId);
    }, []); // Deixe o array vazio se o setInterval não depender de props/state

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
                // onClick={console.log("clicou")}
                className="text-blue-500 p-2.5 w-1/3 bg-red-200 cursor-pointer"
            >
                Add contador
            </button>
        </>
    );
}
