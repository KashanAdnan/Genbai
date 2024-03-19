import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaCalendar } from 'react-icons/fa';
import { GiFallingStar } from 'react-icons/gi';
import { MdMenuBook } from 'react-icons/md';
import { BiSolidMedal } from "react-icons/bi";
import { IoMdBug } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";

const Sprint = () => {
    return (
        <div className='w-[380px] m-3 bg-[#0A1D38] border border-[#143261] rounded-lg h-[300px]'>
            <div className='p-3'>
                <div className='flex items-center justify-between w-full'>
                    <p className='bg-[#132C53] rounded-md text-[13px] px-4 py-2'>Mar 23, 2023 - Jan 31, 2024</p>
                    <BsThreeDots className='mr-3' />
                </div>
                <h1 className='text-[20px] mt-2 font-semibold'>Sprint 1.1</h1>
                <div className='mt-1 pb-4 w-full'>
                    <p className='text-[#AECDFF]'>25% Done, 15% In Progress</p>
                    <div className='mt-2 w-[300px] rounded-lg h-[10px] relative bg-[#143261]'>
                        <div className='w-[150px] h-full bg-[#0C5A4D] absolute rounded-lg'></div>
                        <div className='w-[100px] h-full bg-[#0EB498] absolute rounded-lg'></div>
                    </div>
                </div>
                <div className='flex items-center flex-wrap space-y-2 w-full justify-start'>
                    <span className='bg-[#132C53] w-[60px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'><FaCalendar className='mr-2' /> 50</span>
                    <span className='bg-[#132C53] w-[60px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <MdMenuBook className='mr-2 text-[14px]' /> 10</span>
                    <span className='bg-[#132C53] w-[80px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <GiFallingStar className='rotate-180 flex items-center justify-center  bg-[#F46A2A] rounded-sm text-[16px] text-[#fff] p-[1px] mr-2' />
                        (20%)</span>
                    <span className='bg-[#132C53] w-[90px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <IoMdBug className='rotate-180 flex items-center justify-center  bg-red-500 p-[2px] rounded-sm text-[16px] text-[#fff] mr-2' /> 2 (20%)</span>
                    <span className='bg-[#132C53] w-[90px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <BiSolidMedal className='rotate-180 flex items-center justify-center  bg-[#059BFF] p-[2px] rounded-sm text-[16px] text-[#fff] mr-2' /> 2 (20%)</span>
                    <span className='bg-[#132C53] w-[90px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <FiPenTool className='rotate-180 flex items-center justify-center  bg-[#5A1EF1] p-[2px] rounded-sm text-[16px] text-[#fff] mr-2' /> 2 (20%)</span>
                    <span className='bg-[#132C53] w-[90px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <FaTools className='rotate-180 flex items-center justify-center  bg-[#6482A0] p-[2px] rounded-sm text-[16px] text-[#fff] mr-2' /> 2 (20%)</span>
                </div>
            </div>
            <p className=' border-t border-[#143261] mt-2 h-[50px] w-full flex items-center justify-center bg-[#0A1D38]'>Show Stories <FaCaretDown className='ml-2' /></p>
        </div>
    )
}

export default Sprint