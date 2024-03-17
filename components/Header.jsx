import Image from 'next/image'
import React from 'react'
import Select from './Select'
import { FaPlus } from "react-icons/fa";
import { LuAtom } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";

const Header = () => {
    return (<div className="bg-[#061123]  w-full text-[#99C0FF] flex items-center justify-between px-4 py-3 border-b border-[#143261]">
        <div className='flex items-center justify-center'>
            <Image
                src="/Union.png"
                width={20}
                height={30}
                alt="Logo"
            />
            <p className='text-[28px] font-medium mt-[-7px] ml-2'>genbai</p>
            <div className='ml-14 flex items-center justify-center'>
                <Select left={true} color={"4199F1"} text={"Create Story"} icon={<FaPlus className='text-[12px] mr-2' />} />
                <Select color={"436BEF"} text={"Generate Story"} icon={<LuAtom className='text-[16px] mr-2' />} />
            </div>
            <div className='bg-[#0A1D38] border border-[#143261] rounded-lg py-[7px] flex items-center justify-start px-2 outline-none w-[440px]'>
                <IoIosSearch className='text-[20px] mr-4' />
                <input type="text" className='bg-transparent w-full outline-none' placeholder='Search' />
            </div>
        </div>
        <div className='flex items-center justify-around'>
            <div className='bell'>
                <FaBell className='text-[#99C0FF] text-[25px] mr-2 rotate-45' />
            </div>
            <div className='bg-[#1D91E4] rounded-full p-[5px] text-[#12294E]'>HG</div>
        </div>
    </div>

    )
}

export default Header