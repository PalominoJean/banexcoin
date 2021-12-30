import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoBanexCoin from "../assets/images/logo-banexcoin-letter-yellow.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor introduzca un email valido")
    .required("Por favor ingresa tu email"),
  password: yup.string().required("Por favor ingresa tu contrasena"),
  phone: yup
    .string()
    // .matches(/^[0-9\- ]{8,14}$/, "Por favor ingrese un telefono valido")
    .matches(new RegExp("[0-9]{9}"), "Por favor ingresa un telefono valido"),
});

const variants = {
  hiddenForm: { scale: 0.5, opacity: 0 },
  visibleForm: { scale: 1, opacity: 1 },

  hiddenErrorMsg: { y: -5, opacity: 0 },
  visibleErrorMsg: { y: 0, opacity: 1 },
};

export default function Signup() {
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
      setLoading(false);
    }, 1000);
  };

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <motion.div
      className="w-11/12 sm:w-2/3 md:w-7/12 lg:w-1/2 xl:w-1/3 2xl:w-1/4"
      initial="hiddenForm"
      animate="visibleForm"
      variants={variants}
    >
      <div className="text-center">
        <div className="flex items-center justify-center w-full">
          <img src={logoBanexCoin} alt="logo" className="w-20" />
        </div>
        <p className="text-4xl font-bold mt-3">Registrate gratis</p>
        <p className="mt-1">
          <span className="text-gray-500">O </span>
          <button
            className="text-orange-500 hover:text-orange-600 transition"
            type="button"
            onClick={() => goToLogin()}
          >
            Ingresa a tu cuenta
          </button>
        </p>
      </div>
      <form
        className="shadow border-gray-100 border rounded-lg px-7 sm:px-9 py-5 md:py-7 mt-8 bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div>
          <label className="block text-gray-800">Email</label>
          <input
            type="email"
            className={`border rounded-md py-2 px-4 w-full mt-1 ${
              errors.email?.message ? "border-red-500" : "border-gray-200"
            }`}
            {...register("email", { required: true })}
          />
          {errors.email?.message && (
            <motion.p
              initial="hiddenErrorMsg"
              animate="visibleErrorMsg"
              variants={variants}
              className="text-sm font-medium mt-1 text-red-500"
            >
              {errors.email?.message}
            </motion.p>
          )}
        </div>
        <div className="mt-5">
          <label className="block text-gray-800">Contrasena</label>
          <input
            type="password"
            className={`border rounded-md py-2 px-4 w-full mt-1 ${
              errors.password?.message ? "border-red-500" : "border-gray-200"
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
        <div className="mt-5">
          <label className="block text-gray-800">Telefono</label>
          <input
            type="number"
            className={`border rounded-md py-2 px-4 w-full mt-1 ${
              errors.phone?.message ? "border-red-500" : "border-gray-200"
            }`}
            {...register("phone", { required: true })}
          />
          {errors.phone?.message && (
            <motion.p
              initial="hiddenErrorMsg"
              animate="visibleErrorMsg"
              variants={variants}
              className="text-sm font-medium mt-1 text-red-500"
            >
              {errors.phone?.message}
            </motion.p>
          )}
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
            "Registrarme"
          )}
        </button>
      </form>
    </motion.div>
  );
}
