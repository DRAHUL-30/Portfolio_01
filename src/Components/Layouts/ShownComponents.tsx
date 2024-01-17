import React from 'react';
import { Dashboard } from "../Sections/Pages/Dashboard";
import { Works } from "../Sections/Pages/Works";
import { Shelf } from "../Sections/Pages/Shelf";
import { useDynamicPageContext } from "../../Context/ContextHook";

export const ComponentToBeShown = () => {
  const { currentPage, switchPage } = useDynamicPageContext();

  let componentToRender;

  // Depending on the value of currentPage, set the corresponding component to render
  switch (currentPage) {
    case 'Dashboard':
      componentToRender = <Dashboard />;
      break;
    case 'Works':
      componentToRender = <Works />;
      break;
    case 'Shelf':
      componentToRender = <Shelf />;
      break;
    default:
      // Handle other cases or set a default component
      componentToRender = <div>No matching component found</div>;
  }

  return (
    <div>
      <h2>
        <span className='text-red-600'>Title:</span> {currentPage}
      </h2>
      {componentToRender}
    </div>
  );
};
