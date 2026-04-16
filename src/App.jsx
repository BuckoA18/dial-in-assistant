import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialIn from "./pages/DialIn";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="dial-in" element={<DialIn />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
