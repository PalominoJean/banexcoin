import React from "react";
import logoBanexCoin from "../assets/images/logo-banexcoin-word.svg";

export default function SidebarApp() {
  return (
    <div className="h-full px-4 py-10 text-white">
      <div className="flex justify-center mt-5">
        <img src={logoBanexCoin} alt="coin" className="w-44" />
      </div>
      <ul className="text-white mt-14">
        <li className="bg-orange-500 px-3 py-2 rounded-md">Usuarios</li>
        <li className="px-3 py-2 rounded-md mt-1">Monedas</li>
        <li className="px-3 py-2 rounded-md mt-1">Reportes</li>
      </ul>
    </div>
  );
}
