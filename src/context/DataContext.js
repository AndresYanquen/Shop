import React, { createContext, useState } from "react";
import Data from "../api/dummy";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(Data);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
