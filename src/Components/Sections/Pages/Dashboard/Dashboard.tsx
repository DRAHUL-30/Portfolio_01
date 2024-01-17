import React from 'react';
import { Index } from '.';
import { Platforms } from './Platforms';
import { Info } from './Info';
import { Photo } from './Photo';

export const Dashboard = () => {
  return (
    <Index>
      <div className='flex w-[40%]'>
        <Platforms />
        <Info />
      </div>
      <Photo />
    </Index>
  );
}
