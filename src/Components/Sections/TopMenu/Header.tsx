import React from 'react';
import { LeftColumn } from './LeftColumn';
import { RightColumn } from './RightColumn';

export const Header = () => {
  return (
    <div className="py-2 lg:px-4 md:px-3 sm:px-2 flex flex-col sm:flex-row justify-between items-center sm:items-start">
      <LeftColumn />
      <RightColumn />
    </div>
  );
};
