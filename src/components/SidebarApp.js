import React from "react";
import imgCoin from "../assets/images/pngegg.png";

export default function SidebarApp() {
  return (
    <div className="h-full px-4 py-10 text-white">
      <div className="flex justify-center">
        <img src={imgCoin} alt="coin" className="w-20" />
      </div>
      <p className="font-bold text-center mt-2">BanexCoin</p>
      <ul className="text-white mt-5">
        <li className="bg-indigo-800 px-3 py-2 rounded-md">Usuarios</li>
        <li className="px-3 py-2 rounded-md mt-1">Monedas</li>
        <li className="px-3 py-2 rounded-md mt-1">Reportes</li>
      </ul>
    </div>
  );
}
