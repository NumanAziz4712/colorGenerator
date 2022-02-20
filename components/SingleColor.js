import React from 'react';
import { ClipboardCheckIcon } from '@heroicons/react/solid';

const SingleColor = ({ rgb, index, weight, hex }) => {
  const bgr = rgb.join(',');
  const hexVal = `#${hex}`;
  const copyClr = () => {
    navigator.clipboard.writeText(hexVal);
  };
  return (
    <div className='hover:scale-105 cursor-pointer ease-out transform duration-150'>
      <div
        className='py-12 relative rounded-md'
        style={{ backgroundColor: hexVal }}
      >
        <ClipboardCheckIcon
          onClick={copyClr}
          className=' h-6 w-6 absolute top-1 right-1 fill-white active:fill-green-500 cursor-pointer'
        />
      </div>
      <div className='text-white mt-2  px-1 text-sm flex justify-between'>
        <p>{hexVal}</p>
        <p className='hidden sm:inline-flex'>{weight}%</p>
      </div>
    </div>
  );
};

export default SingleColor;
