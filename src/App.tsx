/* import { UserCard } from "./sections/users/UserCard";
import { useUsers } from "./sections/users/useUsers"; */

import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LoadingLogo } from "./components/Spinner/LoadingLogo.jsx";
//import * as React from "react";
/* import "./App.scss"; */
import { useTheme } from "./customHooks/theme";

export function App() {
	const { changeTheme, theme } = useTheme();
	const loading = <LoadingLogo />;
	const Home = lazy(() => import(`./sections/Home`));
	const Croissant = lazy(() => import(`./sections/Croissant/Croissant`));
	const init = async () => {
		//console.log(`init`);
	};
	useEffect(() => {
		init();
	});
	/* const switchTheme = () => {    
	  setTheme(theme==`dark`?`ligth`:`dark`);
	} */

	return (
		<div className="App wrapper" data-theme={theme}>
			<Router>
				<Suspense fallback={loading}>
					<Routes>
						<Route
							path="*" //*
							element={<Home changeTheme={changeTheme} />}
						/>
						<Route
							path="/croissant" //*
							element={<Croissant />}
						/>
					</Routes>
				</Suspense>
			</Router>
		</div>
	);
}
