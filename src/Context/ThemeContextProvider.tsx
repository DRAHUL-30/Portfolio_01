// import { useState } from "react";
// import { DynamicPageContext } from "./ContextHook";

// export const DynamicPageContextProvider = ({ children }: any) => {
//   const [themeColor, setThemeColor] = useState(false);

//   const switchPage = (newPage: any) => {
//     setThemeColor(newPage);
//   };

//   const contextValue = {
//     themeColor,
//     switchPage,
//   };

//   return <DynamicPageContext.Provider value={contextValue}>{children}</DynamicPageContext.Provider>;
// };