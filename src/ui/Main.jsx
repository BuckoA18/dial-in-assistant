import React from "react";

const Main = ({ children }) => {
  return (
    <main className="flex flex-1 flex-col overflow-scroll bg-gray-200 lg:pt-14 lg:pl-14">
      {children}
    </main>
  );
};

export default Main;
