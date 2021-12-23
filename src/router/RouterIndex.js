import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import RequireUnauth from "./RequireUnauth";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Users from "../pages/Users/Users";
import Coins from "../pages/Coins";
import Graphs from "../pages/Graphs";

export default function RouterIndex() {
  return (
    <Routes>
      <Route element={<RequireUnauth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/" element={<RequireAuth />}>
        <Route index element={<Users />} />
        <Route path="coins" element={<Coins />} />
        <Route path="graphs" element={<Graphs />} />
      </Route>
    </Routes>
  );
}
