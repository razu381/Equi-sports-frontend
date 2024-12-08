import React, { createContext, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export let ThemeContext = createContext();

function Root() {
  let [isLight, setLight] = useState(true);

  let themeInfo = {
    isLight,
    setLight,
  };
  return (
    <ThemeContext.Provider value={themeInfo}>
      <div>
        <ToastContainer />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default Root;
