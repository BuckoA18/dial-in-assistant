import React from "react";

const Main = ({ children }) => {
  return (
    <main className="overflow-scrol flex flex-1 flex-col bg-white lg:pt-14 lg:pl-14">
      {children}
    </main>
  );
};

export default Main;
