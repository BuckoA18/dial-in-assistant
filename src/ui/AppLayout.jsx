import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import BottomNav from "./BottomNav";

const AppLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
