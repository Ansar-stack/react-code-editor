import React from 'react'

const TabButton = ({text, handleClick, icon, className}) => {
  return (
    <button
    onClick={handleClick}
    type='button'
    className={`px-2 sm:px-5 cursor-pointer font-semibold text-md sm:text-xl py-0.5 sm:py-1 flex gap-0.5 items-center justify-center bg-[#0e0e47] text-gray-200  ${className}`}
    >
        {icon} {text}
    </button>
  )
}

export default TabButton