import React from 'react'

const Header = ({title, subtitle}) => {
  return (
    <div>
      <div className="text-2xl md:text-3xl text-center font-semibold mt-20">
        {title}
      </div>
      <div className="text-gray-500 mt-2 text-center">
        {subtitle}
      </div>
    </div>
  );
}

export default Header