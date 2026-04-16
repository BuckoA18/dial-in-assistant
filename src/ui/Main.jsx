import React from "react";

const Main = ({ children }) => {
  return (
    <main className="flex flex-1 flex-col bg-slate-100 px-3 py-6">
      {children}
    </main>
  );
};

export default Main;
