import { useState } from "react";
import { DynamicPageContext } from "./ContextHook";

export const DynamicPageContextProvider = ({ children }: any) => {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const switchPage = (newPage: any) => {
    setCurrentPage(newPage);
  };

  const contextValue = {
    currentPage,
    switchPage,
  };

  return <DynamicPageContext.Provider value={contextValue}>{children}</DynamicPageContext.Provider>;
};