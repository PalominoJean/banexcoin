import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PopulateService } from "../services/auth.service";
import logoBanexCoin from "../assets/images/logo-banexcoin-letter-yellow.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const schema = yup.object().shape({
  username: yup.string().required("Por favor ingresa tu usuario"),
  password: yup.string().required("Por favor ingresa tu contrasena"),
});

const variants = {
  hiddenForm: { scale: 0.5, opacity: 0 },
  visibleForm: { scale: 1, opacity: 1 },

  hiddenErrorMsg: { y: -5, opacity: 0 },
  visibleErrorMsg: { y: 0, opacity: 1 },
};

export default function Login() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const submit = (form) => {
    console.log(form);
    setLoading(true);
    setTimeout(() => {
      if (form.username === "jean" && form.password === "jean") {
        PopulateService("123abc");
        navigate("/");
      }
      setLoading(false);
    }, 1000);
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <motion.div
      className="w-11/12 sm:w-2/3 md:w-7/12 lg:w-1/2 xl:w-1/3 2xl:w-1/4"
      initial="hiddenForm"
      animate="visibleForm"
      variants={variants}
    >
      <div className="text-center ">
        <div className="flex items-center justify-center w-full">
          <img src={logoBanexCoin} alt="logo" className="w-20" />
        </div>
        <p className="text-4xl font-bold mt-3">Ingresa a tu cuenta</p>
        <p className="mt-1">
          <span className="text-gray-500">O </span>
          <button
            className="text-orange-500 hover:text-orange-600 transition"
            type="button"
            onClick={() => goToSignup()}
          >
            registrate gratis
          </button>
        </p>
      </div>
      <form
        className="shadow border-gray-100 border rounded-lg px-7 sm:px-9 py-5 md:py-7 mt-8 bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div>
          <label className="block text-gray-800">Usuario</label>
          <input
            className={`border rounded-md py-2 px-4 w-full mt-1 ${
              errors.username?.message ? "border-red-500" : "border-gray-200"
            }`}
            {...register("username", { required: true })}
          />
          {errors.username?.message && (
            <motion.p
              initial="hiddenErrorMsg"
              animate="visibleErrorMsg"
              variants={variants}
              className="text-sm font-medium mt-1 text-red-500"
            >
              {errors.username?.message}
            </motion.p>
          )}
        </div>
        <div className="mt-5">
          <label className="block text-gray-800">Contrasena</label>
          <input
            type="password"
            className={`border rounded-md py-2 px-4 w-full mt-1 ${
              errors.username?.message ? "border-red-500" : "border-gray-200"
            }`}
            {...register("password", { required: true })}
          />
          {errors.password?.message && (
            <motion.p
              initial="hiddenErrorMsg"
              animate="visibleErrorMsg"
              variants={variants}
              className="text-sm font-medium mt-1 text-red-500"
            >
              {errors.password?.message}
            </motion.p>
          )}
        </div>
        <div className="mt-5 text-right flex items-center justify-between">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-600 checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label className="form-check-label inline-block text-gray-800">
              Recordarme
            </label>
          </div>
          <button
            type="button"
            className="text-orange-500 hover:text-orange-600 transition"
          >
            Olvidaste tu contrasena?
          </button>
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-600 transition w-full mt-5 p-2 rounded-md text-white flex justify-center items-center"
          type="submit"
        >
          {loading ? (
            <span>
              <FontAwesomeIcon icon={faCog} className="animate-spin mr-1" />
              Cargando
            </span>
          ) : (
            "Ingresar"
          )}
        </button>
      </form>
      <p className="mt-2 text-gray-500">usuario: jean password: jean</p>
    </motion.div>
  );
}
