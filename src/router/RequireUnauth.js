import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../layout/Auth";
import TokenService from "../services/token.service";

export default function RequireUnauth() {
  const isLogged = TokenService.exist();
  return isLogged ? <Navigate to="/" /> : <Auth />;
}
