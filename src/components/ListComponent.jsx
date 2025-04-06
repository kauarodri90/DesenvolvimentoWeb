import { useState } from "react";

export default function Home() {
  const [filtro, setFiltro] = useState("");
  const [lista, setLista] = useState([
    "Texto 1",
    "Texto 2",
    "Texto 3",
    "Texto 4",
    "Texto 5",
    "Texto 6",
    "Texto 7",
    "Texto 8",
    "Texto 9",
    "Kauã",
  ]);

  const listaFiltrada = lista.filter((item) => item.includes(filtro));

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Eng. de Software</h1>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Filtrar..."
      />
      <ul className="space-y-2">
        {listaFiltrada.map((item, index) => (
          <li key={index} className="flex items-center p-3 border rounded">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
              <span className="text-lg">👤</span>
            </div>
            <div className="flex-1">
              <p className="font-medium">Gabriel Garcia Pavan</p>
              <input
                type="text"
                defaultValue={item}
                className="w-full p-1 border rounded mt-1"
              />
            </div>
            <span className="ml-3 text-gray-500">21:05</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
