import React from 'react';
import { LeftColumn } from './LeftColumn';
import { RightColumn } from './RightColumn';

export const Header = () => {
    return(
        <div className="flex flex-wrap">
            <LeftColumn />
            <RightColumn />
        </div>
    )
}
