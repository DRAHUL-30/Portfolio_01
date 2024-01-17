import React from 'react';
import { Header } from './Header';

interface WrapperComponentProps {
  children: React.ReactElement;
}

export const WrapperComponent = ({children}:WrapperComponentProps) => {
  return (
    <div className='w-full p-4 space-y-4'>
      <Header />
      {children}
    </div>
  );
}
