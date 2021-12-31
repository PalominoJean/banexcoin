import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="block sm:flex justify-between">
      <p className="text-xl font-medium text-gray-700">Usuarios</p>
      <div>
        <button className="px-4 py-2 rounded-md text-sm border-2 mr-2 hover:bg-gray-200 transition">
          <span className="mr-2">
            <FontAwesomeIcon icon={faFilter} />
          </span>
          <span className="hidden md:inline mr-1">Mostrar</span>
          filtro
        </button>
        <button className="px-4 py-2 rounded-md text-sm border-2 border-orange-500 text-white bg-orange-500 hover:bg-orange-600 transition">
          <span className="mr-2">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          Crear
          <span className="hidden md:inline ml-1">usuario</span>
        </button>
      </div>
    </div>
  );
}
