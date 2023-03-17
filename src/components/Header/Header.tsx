import React from "react";

export const Header = () => {
  return (
    <div className='px-5 py-4 flex justify-start border-b border-customBorderColor-100'>
      <h3 tabIndex={0} aria-label="Sign Up Builder" className='text-2xl text-customBlack-600 font-medium'>&lt; Sign Up Builder</h3>
    </div>
  );
};
