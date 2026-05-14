import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DialIn from "./pages/DialIn";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Settings from "./pages/Settings";
import Beans from "./pages/Beans";
import History from "./pages/History";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
