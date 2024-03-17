import React from 'react'
import { FaCaretDown } from "react-icons/fa";

const Select = ({ text, icon, color, left }) => {
    return (
        <>
            {
                left ? <div className='bg-[#4199F1] cursor-pointer text-[#12294E] flex items-center justify-center px-2 py-[4px] rounded-lg pr-4 mr-3'>
                    <div className='border-r border-[#12294E] p-2'>
                        <FaCaretDown />
                    </div>
                    <div className='pl-2 flex items-center'>
                        {icon}
                        <p>{text}</p>
                    </div>
                </div> : <div className='bg-[#436BEF] cursor-pointer text-[#12294E] flex items-center justify-center pl-2 px-2 py-[4px] rounded-lg mr-3'>
                    <div className='pr-2 flex items-center'>
                        {icon}
                        <p>{text}</p>
                    </div>
                    <div className='border-l border-[#12294E] p-2'>
                        <FaCaretDown />
                    </div>
                </div>
            }
        </>
    )
}

export default Select