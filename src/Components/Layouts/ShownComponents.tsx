import React from 'react';
import { Dashboard } from "../Sections/Pages/Dashboard/Dashboard";
import { Works } from "../Sections/Pages/Works/Works";
import { Shelf } from "../Sections/Pages/Shelf/Shelf";
import { LetsTalk } from '../Sections/Pages/Dashboard/LetsTalk/LetsTalk';
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
    case 'Lets_talk':
      componentToRender = <LetsTalk />;
      break;
    default:
      // Handle other cases or set a default component
      componentToRender = <div>No matching component found</div>;
  }

  return (
    <div className='h-full'>
      {componentToRender}
    </div>
  );
};
