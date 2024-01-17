import React from 'react'

export const Info = () => {
  return (
    <div className='w-[90%] border'>
        <MessageCard />
    </div>
  )
}

const MessageCard = () => {
  return (
    <div className="w-[85px] relative bg-black text-white p-4 rounded-md shadow-md">
      <div className="text-sm">It's me</div>
      {/* Arrow pointing down */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-solid border-transparent border-white"></div>
    </div>
  );
};
