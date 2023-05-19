import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

export const AppContext = createContext(null);

export default function AppStore({ children }) {
  const [crossOriginData, setCrossOriginData] = useState();
  return (
    <AppContext.Provider value={{ crossOriginData, setCrossOriginData }}>
      {children}
    </AppContext.Provider>
  );
}
