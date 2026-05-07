import React from "react";

const Badge = ({ children, styles = "" }) => {
  return (
    <div
      className={`rounded-full border px-4 py-1.5 text-sm shadow-xs ${styles}`}
    >
      {children}
    </div>
  );
};

export default Badge;
