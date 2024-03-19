import Image from 'next/image'
import React from 'react'
import Select from './Select'
import { FaPlus } from "react-icons/fa";
import { LuAtom } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";

const Header = ({ light, lightMode, setLightMode }) => {
    return (<div className={`${light ? "bg-[#fff] text-[#fff] border-b border[#CCE4FF]" : "bg-[#061123] text-[#99C0FF] border-b border-[#143261]"} w-full max-[1024px]:w-full flex items-center justify-between px-4 py-3 `}>
        <div className='flex items-center justify-center'>
            <Image
                src="/Union.png"
                width={20}
                height={30}
                alt="Logo"
            />
            <p className={`${light ? "text-[#12294E]" : "text-[#93ADD7]"} text-[28px] font-medium mt-[-7px] ml-2`}>genbai</p>
            <div className='ml-14 flex items-center justify-center'>
                <Select left={true} color={"4199F1"} light={light} text={"Create Story"} icon={<FaPlus className='text-[12px] mr-2' />} />
                <Select color={"436BEF"} light={light} text={"Generate Story"} icon={<LuAtom className='text-[16px] mr-2' />} />
            </div>
            <div className={`${light ? "border border-[#B4C6E4] text-[#93ADD7] bg-[#fff]" : "bg-[#0A1D38] border border-[#143261] text-[#93ADD7]"} rounded-lg py-[7px] flex items-center justify-start px-2 outline-none max-[1024px]:w-[320px] w-[440px]`}>
                <IoIosSearch className='text-[20px] mr-4' />
                <input type="text" className='bg-transparent w-full outline-none' placeholder='Search' />
            </div>
        </div>
        <div className='flex items-center justify-around'>
            <div className='bell'>
                <FaBell onClick={() => setLightMode(!lightMode)} className={`${light ? "text-[#305288]" : "text-[#99C0FF]"} text-[25px] mr-2 rotate-45`} />
            </div>
            <div className={`bg-[#1D91E4] rounded-full p-[5px] ${light ? "text-[#fff]" : "text-[#12294E]"}`}>HG</div>
        </div>
    </div>

    )
}

export default Header