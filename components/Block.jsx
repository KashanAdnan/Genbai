import Image from 'next/image'
import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { GiFallingStar } from 'react-icons/gi'
import { IoFlag } from 'react-icons/io5'
import { RiArrowUpDoubleLine } from 'react-icons/ri'

const Block = ({ title, date, logo, aim, plug, sprint, images }) => {
    return (
        <div className='p-4 bg-[#0A1D38] border border-[#143261] mb-1 shadow-[#6B8CC266] shadow-md'>
            <p className='flex items-center text-[#6B8CC2]'> <IoFlag className='bg-[#1444E1] text-[#fff] rounded-sm p-[1px] mr-2' /> {logo}</p>
            <h3 className='text-[#AECDFF] text-[18px] my-2'>{title}</h3>
            <div className='flex items-center justify-start'>
                <span className='bg-[#132C53] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'><FaCalendar className='mr-2' /> {date}</span>
                <span className='bg-[#132C53] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'><Image className='mr-2' src="/aim.png" alt="ada" width="14" height="14"></Image> {aim}</span>
                <span className='bg-[#132C53] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'><Image className='mr-2' src="/charger.png" alt="ada" width="14" height="14"></Image> {plug}</span>
                <span className='bg-[#132C53] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'><Image className='mr-2' src="/spr.png" alt="ada" width="14" height="14"></Image> {sprint}</span>
            </div>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center justify-between mt-4 w-full'>
                    <div className='flex items-center space-x-1'>
                        <GiFallingStar className='rotate-180 flex items-center justify-center  bg-[#F46A2A] rounded-sm text-[16px] p-[1px] mr-2' />
                        <p className='text-[#AECDFF]'>PRJ-1
                         </p>
                        <RiArrowUpDoubleLine className='text-red-500 text-[20px]' />
                    </div>
                    <div className='flex items-center'>
                        <Image className='rounded-full mr-[-10px] z-20' src="/ProfileIcon.png" alt="ada" width="27" height="27"></Image>
                        <Image className='mr-[-10px] z-10 rounded-full' src="/user2.jpg" alt="ada" width="27" height="27"></Image>
                        <Image className='rounded-full' src="/user3.jpg" alt="ada" width="27" height="27"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block