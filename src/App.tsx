import { useEffect, Suspense, useState, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as React from "react";
const logo = require(`./logo.svg`);
import "./App.scss";
import { useTheme } from "./customHooks/theme";
import {LoadingLogo} from "./components/Spinner/LoadingLogo.jsx";


function App() {
  const { changeTheme, theme } = useTheme();
  const loading = (
    <LoadingLogo/>
  );
  const Home = lazy(() => import(`./Views/Home`));
  const Croissant = lazy(() => import(`./Views/Croissant`));
  const init = async () => {
    console.log(`init`);
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
                element={
                  <Home  changeTheme={changeTheme}/>
                }
              />
              <Route
                path="/croissant" //*
                element={
                  <Croissant  />
                }
              />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
