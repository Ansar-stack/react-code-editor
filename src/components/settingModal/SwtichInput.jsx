import React from 'react'

const SwtichInput = ({text1, text2, value, handleChanges, name=""}) => {
  return (
     <label className="inline-flex items-center cursor-pointer input">
          <span className="me-2">{text1}</span>
          <input
          onChange={handleChanges}
          type="checkbox" value={value} className="sr-only peer outline-0" />
          <div className="relative  w-9 h-5 bg-[#111186] -quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
        <span className="ms-2">{text2}</span> </label>
  )
}

export default SwtichInput