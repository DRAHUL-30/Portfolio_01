import React from 'react';
import lets_talk from "../../../../assets/lets_talk.png";
import { useDynamicPageContext } from '../../../../Context/ContextHook';

export const Info = () => {
    const { switchPage } = useDynamicPageContext();

      const handleButtonClick = (page:string) => {
        switchPage(page);
      };
    
  return (
    <div className="w-[90%] space-y-8 flex flex-col items-center">
      <div className="w-[30%]">
        <MessageCard />
      </div>
      <div>
        <h1 className="text-[24px] font-[600] tracking-wide text-gray-900">Rahul</h1>
        <p className="tracking-wide">Software Developer</p>
      </div>
      <p className="w-[50%]">
        A Software Developer from Chennai with rock-solid experience in building
        complex applications with modern technologies.
      </p>
      <img
        src={lets_talk}
        alt="lets_talk"
        className="rounded-full h-[120px] w-[120px] cursor-pointer"
        onClick={() => handleButtonClick("Lets_talk")}
      />
    </div>
  );
}

const MessageCard = () => {
  return (
    <div className="w-[85px] relative bg-black text-white p-4 rounded-md shadow-md select-none">
      <div className="text-sm">It's me</div>
      {/* Arrow pointing down */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-solid border-transparent border-white"></div>
    </div>
  );
};
