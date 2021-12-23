import React, { createContext, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderApp from "../components/HeaderApp";
import SidebarApp from "../components/SidebarApp";

export const MenuContext = createContext({
  isOpen: true,
  setIsOpen: () => {},
});

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);
  return (
    <MenuContext.Provider value={value}>
      <div className="h-full flex">
        <div
          className={`${isOpen ? "block" : "hidden"} w-72 bg-indigo-600 h-full`}
        >
          <SidebarApp />
        </div>
        <div className="w-full">
          <div className="h-16">
            <HeaderApp />
          </div>
          <div className="h-[calc(100%_-_4rem)] px-3 sm:px-5 md:px-8 lg:px-10 xl:px-15 2xl:px-20 py-10 overflow-y-scroll">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </MenuContext.Provider>
  );
}
