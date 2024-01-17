import React from 'react';
import { Header } from './Header';

interface WrapperComponentProps {
  children: React.ReactElement;
}

export const WrapperComponent = ({children}:WrapperComponentProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
