import { useState } from "react";
import { createContext } from "react";

const StartContext = createContext();


function Provider({ children }) {
  const [navbar, setNavbar] = useState(true);
  const [loading, SetLoading] = useState(true);


  const navbarFalse = () => {
    setNavbar(false);
  };
  const navbarTrue = () => {
    setNavbar(true);
  };

  const LoadingAct = () => {
    SetLoading(false);
  };
  const LoadingTrue = () => {
    SetLoading(true);
  };

  const value = {
    navbar,
    loading,
    LoadingAct,
    navbarFalse,
    navbarTrue,
    LoadingTrue,
  };

  return (
    <StartContext.Provider value={value}>{children}</StartContext.Provider>
  );
}

export { Provider };
export default StartContext;
