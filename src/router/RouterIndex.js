import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import RequireUnauth from "./RequireUnauth";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Owners from "../pages/Owners/Owners";
import Pets from "../pages/Pets";
import Medicines from "../pages/Medicines";

export default function RouterIndex() {
  return (
    <Routes>
      <Route element={<RequireUnauth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/" element={<RequireAuth />}>
        <Route index element={<Owners />} />
        <Route path="pets" element={<Pets />} />
        <Route path="medicines" element={<Medicines />} />
      </Route>
    </Routes>
  );
}
