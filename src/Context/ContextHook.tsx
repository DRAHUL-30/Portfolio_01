import React, { createContext, useContext } from 'react';

interface DynamicPageContextProps {
  currentPage: string;
  switchPage: (newPage: string) => void;
}

// Define the context
export const DynamicPageContext = createContext<DynamicPageContextProps | undefined>(undefined);

// Custom hook to access the context
export const useDynamicPageContext = (): DynamicPageContextProps => {
  const context = useContext(DynamicPageContext);
  if (!context) {
    throw new Error('useDynamicPageContext must be used within a DynamicPageContextProvider');
  }
  return context;
};