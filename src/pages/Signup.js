import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/pngegg.png";

export default function Signup() {
  let navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="w-11/12 sm:w-2/3 md:w-7/12 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
      <div className="text-center">
        <div className="flex items-center justify-center w-full">
          <img src={logo} alt="logo" className="w-24" />
        </div>
        <p className="text-4xl font-bold mt-5">Registrate gratis</p>
        <p className="font-medium text-sm mt-1">
          <span className="text-gray-500">O </span>
          <button
            className="text-violet-500 font-medium"
            onClick={() => goToLogin()}
          >
            Ingresa a tu cuenta
          </button>
        </p>
      </div>

      <form
        action=""
        className="shadow border-gray-100 border rounded-lg px-8 py-6 mt-5"
      >
        <div>
          <label className="block text-gray-500 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            className="border-gray-200 border rounded-md py-1 px-2 w-full mt-1"
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-500 text-sm font-medium ">
            Contrasena
          </label>
          <input
            type="password"
            className="border-gray-200 border rounded-md py-1 px-2 w-full mt-1"
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-500 text-sm font-medium ">
            Telefono
          </label>
          <input
            type="number"
            className="border-gray-200 border rounded-md py-1 px-2 w-full mt-1"
          />
        </div>
        <button className="bg-indigo-600 w-full mt-5 p-1 rounded-md text-white">
          Registrarme
        </button>
      </form>
    </div>
  );
}
