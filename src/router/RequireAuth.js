import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import TokenService from "../services/token.service";

export default function RequireAuth() {
  const isLogged = TokenService.exist();
  return isLogged ? <Dashboard /> : <Navigate to="/login" />;
}
