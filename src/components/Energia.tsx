import { useState, useEffect } from "react";
import { FaBoltLightning } from "react-icons/fa6";
export default function Energia() {
    const [eneAtual, setEneAtual] = useState(10);
    const [eneMax, setEneMax] = useState(10);
    const handleFight = () => {
        if (eneAtual >= 5) {
            console.log("Você usou 5 de energia em combate");
            setEneAtual(eneAtual - 5);
        } else {
            console.log("Você não tem energia suficiente");
        }
    };
    useEffect(() => {
        if (eneAtual < eneMax) {
            const intervalId = setInterval(() => {
                setEneAtual((prev) => prev + 1);
            }, 1000);
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [eneAtual]);
    console.log("renderizou Energia");
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="flex items-center">
                Energia {eneAtual}/{eneMax} <FaBoltLightning />
            </p>
            <button
                className="flex items-center justify-between bg-amber-600 p-1 p- cursor-pointer hover:bg-amber-700"
                onClick={handleFight}
            >
                Fight 5 <FaBoltLightning />
            </button>
        </div>
    );
}
