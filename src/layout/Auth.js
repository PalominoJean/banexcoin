import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="h-full flex justify-center items-center bg-gray-50">
      <AnimatePresence>
        <Outlet></Outlet>
      </AnimatePresence>
    </div>
  );
}
