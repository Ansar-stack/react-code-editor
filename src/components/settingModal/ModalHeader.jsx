import React from 'react'
import { BiX } from 'react-icons/bi'

const ModalHeader = ({icon, close= ()=>{}, heading}) => {
  return (
      <div className="text-xl p-2 flex justify-between items-center w-full shadow-sm shadow-[#04042f]">
          <h2 className="flex items-center gap-1">
            {" "}
            {icon} {heading}
          </h2>
          <li className="list-none font-bold cursor-pointer">
            {" "}
            <BiX onClick={close} size={34} />
          </li>
        </div>
  )
}

export default ModalHeader