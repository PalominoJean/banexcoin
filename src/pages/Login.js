import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PopulateService } from "../services/auth.service";
import logo from "../assets/images/pngegg.png";

export default function Login() {
  let navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const submit = () => {
    if (formValue.username !== "jean" || formValue.password !== "jean") return;
    setLoading(true);
    PopulateService("123abc");
    setLoading(false);
    navigate("/");
  };
  const goToSignup = () => {
    navigate("/signup");
  };
  const onChangeUsername = (ev) => {
    setFormValue({ ...formValue, username: ev.target.value });
  };
  const onChangePassword = (ev) => {
    setFormValue({ ...formValue, password: ev.target.value });
  };

  return (
    <div className="w-11/12 sm:w-2/3 md:w-7/12 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
      <div className="text-center">
        <div className="flex items-center justify-center w-full">
          <img src={logo} alt="logo" className="w-24" />
        </div>
        <p className="text-4xl font-bold mt-5">Ingresa a tu cuenta</p>
        <p className="text-base font-medium mt-1">
          <span className="text-gray-500">O </span>
          <button
            className="text-violet-500 font-medium text-sm"
            onClick={() => goToSignup()}
          >
            registrate gratis
          </button>
        </p>
      </div>
      <form className="shadow border-gray-100 border rounded-lg px-8 py-6 mt-5">
        <div>
          <label className="block text-gray-500 text-sm font-medium">
            Usuario
          </label>
          <input
            type="text"
            className="border-gray-200 border rounded-md py-1 px-2 w-full mt-1"
            onChange={(ev) => onChangeUsername(ev)}
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-500 text-sm font-medium ">
            Contrasena
          </label>
          <input
            type="password"
            className="border-gray-200 border rounded-md py-1 px-2 w-full mt-1"
            onChange={(ev) => onChangePassword(ev)}
          />
        </div>
        <div className="mt-5 text-right">
          <button className=" text-violet-500 text-sm font-medium">
            olvidaste tu contrasena?
          </button>
        </div>
        <button
          className="bg-indigo-600 w-full mt-5 p-1 rounded-md text-white  flex justify-center items-center"
          type="button"
          onClick={() => submit()}
        >
          {loading ? "Cargando" : "Ingresar"}
        </button>
      </form>
      <p className="mt-2 text-gray-500">usuario: jean   password: jean</p>
    </div>
  );
}
