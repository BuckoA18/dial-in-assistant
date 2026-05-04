import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialIn from "./pages/DialIn";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Settings from "./pages/Settings";
import Beans from "./pages/Beans";
import History from "./pages/History";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dial-in" element={<DialIn />} />
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="beans" element={<Beans />} />
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
