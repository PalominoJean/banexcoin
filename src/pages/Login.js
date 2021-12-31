import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PopulateService } from "./../services/auth.service";
import logoBanexCoin from "../assets/images/logo-banexcoin-letter-yellow.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Divider from "../components/Divider";
import Button from "../components/Button";

const schema = yup.object().shape({
  username: yup.string().required("Por favor ingresa tu usuario"),
  password: yup.string().required("Por favor ingresa tu contrasena"),
});

const variants = {
  hiddenForm: { opacity: 0 },
  visibleForm: { opacity: 1 },

  hiddenErrorMsg: { y: -5, opacity: 0 },
  visibleErrorMsg: { y: 0, opacity: 1 },

  transition: { ease: "easeOut", duration: 3 },
};

// function Input({ errors, register, property, value }) {
//   useState(() => {
//     console.log("en staet");
//   });
//   console.log(errors, register, property, value);
//   return (
//     <div>
//       <label className="block text-gray-800">{value}</label>
//       <input
//         className={`border rounded-md py-2 px-4 w-full mt-1 ${
//           errors
//             ? errors[property]?.message
//               ? "border-red-500"
//               : "border-gray-200"
//             : ""
//         }`}
//         {...register(property, { required: true })}
//       />
//       {errors
//         ? errors[property]?.message && (
//             <motion.p
//               initial="hiddenErrorMsg"
//               animate="visibleErrorMsg"
//               transition="transition"
//               variants={variants}
//               className="text-sm font-medium mt-1 text-red-500"
//             >
//               {errors[property]?.message}
//             </motion.p>
//           )
//         : ""}
//     </div>
//   );
// }

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
      transition="transition"
      exit="exitForm"
      variants={variants}
    >
      <div className="text-center ">
        <div className="flex items-center justify-center w-full">
          <img src={logoBanexCoin} alt="logo" className="w-20" />
        </div>
        <p className="text-4xl font-bold mt-3">Ingresa a tu cuenta</p>
        <p className="mt-1">
          <span className="text-gray-500">O </span>
          <Button form="text" onClick={() => goToSignup()}>
            registrate gratis
          </Button>
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
              transition="transition"
              variants={variants}
              className="text-sm font-medium mt-1 text-red-500"
            >
              {errors.username?.message}
            </motion.p>
          )}
        </div>
        {/* <Input
          error={errors}
          register={register}
          property="username"
          value="Usuario"
        /> */}
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
          <div>
            <input
              type="checkbox"
              className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-600 checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
            />
            <label className="inline-block text-gray-800">Recordarme</label>
          </div>
          <Button form="text">Olvidaste tu contrasena?</Button>
        </div>
        <Button
          form="primary"
          type="submit"
          styles="mt-5 w-full flex justify-center items-center"
        >
          {loading ? (
            <span>
              <FontAwesomeIcon icon={faCog} className="animate-spin mr-1" />
              Cargando
            </span>
          ) : (
            "Ingresar"
          )}
        </Button>
        <Divider text="O ingresa con" />
        <div className="flex justify-between gap-3 mt-5">
          <Button form="secondary" styles="block w-4/12">
            <FontAwesomeIcon icon={faGoogle} className="mr-1" />
          </Button>
          <Button form="secondary" styles="block w-4/12">
            <FontAwesomeIcon icon={faTwitter} className="mr-1" />
          </Button>
          <Button form="secondary" styles="block w-4/12">
            <FontAwesomeIcon icon={faFacebook} className="mr-1" />
          </Button>
        </div>
      </form>

      <p className="mt-2 text-gray-500">usuario: jean password: jean</p>
    </motion.div>
  );
}
