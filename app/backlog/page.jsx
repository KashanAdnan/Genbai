import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { FaEye } from "react-icons/fa";
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import { BiLoaderCircle } from "react-icons/bi";
import { FaRegSquare } from "react-icons/fa6";
import { LuAtom } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { IoFlag } from 'react-icons/io5';
import { FaCalendar } from "react-icons/fa";
import Image from 'next/image';
import { GiFallingStar } from 'react-icons/gi';
import { RiArrowUpDoubleLine } from "react-icons/ri";
import Block from '@/components/Block';
import Stories from '@/components/Stories';

const page = () => {
    const user = [
        {
            logo: 'Frontend Redesign',
            title: "Diagram user onboarding",
            date: "Mar 23",
            aim: 2,
            plug: 3,
            sprint: "Sprint 1.1",
            images: ["ProfileIcon.png", "user2.png", "user3.png"]
        },
        {
            logo: 'Frontend Redesign',
            title: "Diagram user onboarding",
            date: "Mar 23",
            aim: 2,
            plug: 3,
            sprint: "Sprint 1.1",
            images: ["ProfileIcon.png", "user2.png", "user3.png"]
        },
        {
            logo: 'Frontend Redesign',
            title: "Diagram user onboarding",
            date: "Mar 23",
            aim: 2,
            plug: 3,
            sprint: "Sprint 1.1",
            images: ["ProfileIcon.png", "user2.png", "user3.png"]
        },
    ]
    return (
        <>
            <Header />
            <div className="flex items-start justify-start">
                <Sidebar />
                <div className="bg-[#06152D] w-full h-[161.3vh] text-[#99C0FF]">
                    <p className='flex items-center justify-start m-4 text-[#6B8CC2]'>Project Name / Team name (Workflow Type) / <span className='text-[#99C0FF]'> &ensp;Backlog</span> </p>
                    <h1 className='text-2xl text-[#99C0FF] font-medium ml-4'>Blocklog Refining</h1>
                    <div className='flex items-center justify-start border-b  border-[#305288] text-[#305288] m-4'>
                        <p className='w-[100px] text-[15px] text-center pb-2'>Backlog</p>
                        <p className='w-[130px] text-[15px] text-center pb-2'>Backlog Refining</p>
                    </div>
                    <div className='ml-4 flex item-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <div className='bg-[#0A1D38] border border-[#143261] rounded-sm py-[7px] flex items-center justify-start px-2 outline-none w-[280px]'>
                                <IoIosSearch className='text-[20px] mr-4 text-[#305288]' />
                                <input type="text" className='bg-transparent w-full outline-none placeholder:text-[#305288]' placeholder='Search Stories' />
                            </div>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Epics&ensp;</span> <IoIosArrowDown /></button>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Story Types&ensp;</span> <IoIosArrowDown /></button>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Deliverables&ensp;</span> <IoIosArrowDown /></button>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Labels&ensp;</span> <IoIosArrowDown /></button>
                        </div>
                        <button className='mr-4 text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm py-2 px-3'> <FaEye /> &ensp;<span className='text-[#99C0FF]'>&ensp;Display</span></button>
                    </div>
                    <div className='p-4 flex items-center space-x-3  py-6'>
                        <div className='w-[690px] flex  rounded-tl-lg rounded-tr-lg bg-[#061123] h-[20px]'>
                            <Stories user={user} />
                            <Stories user={user} />
                        </div>
                        <div className='w-[340px] rounded-tl-lg rounded-tr-lg bg-[#061123] h-[20px]'>
                            <div className='w-[340px] mt-10 rounded-lg bg-[#061123] h-[620px]  shadow-[#6B8CC266] shadow-sm'>
                                <div className='w-full flex items-center justify-between p-4'>
                                    <div className='space-x-2 flex items-center justify-center'>
                                        <BiLoaderCircle />
                                        <p>Ready to Refine <span className='bg-[#12294E] px-1 rounded-md ml-2'>3</span></p>
                                    </div>
                                    <div className='space-x-2 flex item-center justify-center'>
                                        <FaPlus />
                                        <LuAtom />
                                        <FaRegSquare />
                                    </div>
                                </div>
                                <div className='px-3'>
                                    {
                                        user.map((item) => {
                                            return (
                                                <Block title={item.title} date={item.date} logo={item.logo} aim={item.aim} plug={item.plug} sprint={item.sprint} images={item.images} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default page