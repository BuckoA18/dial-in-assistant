import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Aside from "./Aside";

const AppLayout = () => {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <Header />

      {/* Hidden to md breakpoint */}
      <Aside />
      <Main>
        <Outlet />
      </Main>

      {/** Hidden from md breakpoint */}
      <Nav />
    </div>
  );
};

export default AppLayout;
