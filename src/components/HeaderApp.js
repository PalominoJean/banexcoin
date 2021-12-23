import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutService } from "../services/auth.service";
import avatar from "../assets/images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MenuContext } from "../layout/Dashboard";

export default function HeaderApp() {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const navigate = useNavigate();
  const logout = () => {
    LogoutService();
    navigate("login");
  };
  const changeMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="shadow-md py-3 px-5 flex justify-between items-center h-full">
      <div>
        <button className=" px-3 py-1 rounded-md" onClick={() => changeMenu()}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="flex">
        <img className="w-11 mr-5" src={avatar} alt="user" />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm"
          onClick={() => logout()}
        >
          Salir
        </button>
      </div>
    </div>
  );
}
