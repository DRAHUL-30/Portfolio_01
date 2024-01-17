import React, { createContext, useContext } from "react";

interface DynamicPageContextProps {
  currentPage: string;
  switchPage: (newPage: string) => void;
}

// Define the context
export const DynamicPageContext = createContext<
  DynamicPageContextProps | undefined
>(undefined);

// Custom hook to access the context
export const useDynamicPageContext = (): DynamicPageContextProps => {
  const context = useContext(DynamicPageContext);
  if (!context) {
    throw new Error(
      "useDynamicPageContext must be used within a DynamicPageContextProvider"
    );
  }
  return context;
};

// import React, { createContext, useContext, ReactNode } from "react";

// // Create a generic type for the context
// export type DynamicContextType<T> = {
//   contextValue: T;
//   children: ReactNode;
// };

// // Create the context with the generic type
// export const DynamicPageContext = createContext<any | undefined>(undefined);

// // Custom hook to access the context with a generic return type
// export const useDynamicPageContext = <T,>(): T => {
//   const context = useContext(DynamicPageContext);
//   if (!context) {
//     throw new Error(
//       "useDynamicPageContext must be used within a DynamicPageContextProvider"
//     );
//   }
//   return context as T;
// };
