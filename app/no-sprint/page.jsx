'use client'
import Header from '@/components/Header'
import { FaRegCircle } from "react-icons/fa";
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiLoaderCircle } from 'react-icons/bi'
import { FaCalendar, FaEye, FaPlus, FaRegSquare } from 'react-icons/fa'
import { GiFallingStar } from 'react-icons/gi'
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import { IoFlag } from 'react-icons/io5'
import { LuAtom } from 'react-icons/lu'
import { RiArrowUpDoubleLine } from 'react-icons/ri'
import Sprint from '@/components/Sprint';

const page = () => {
    const [lightMode, setLightMode] = useState(false)
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
            <Header light={lightMode} lightMode={lightMode} setLightMode={setLightMode} />
            <div className='flex items-center justify-start w-full o'>
                <Sidebar light={lightMode} height={"161vh"} />
                <div className="bg-[#06152D] w-full h-[161vh] text-[#99C0FF] overflow-x-scroll overflow-y-hidden max-[1024px]:h-[169.8vh]">
                    <p className='flex items-center  justify-start m-4 text-[#6B8CC2]'>Project Name / Team name (Workflow Type) / <span className='text-[#99C0FF]'> &ensp;Sprints</span> </p>
                    <h1 className='text-2xl text-[#99C0FF] font-medium ml-4'>Sprints</h1>
                    <div className='flex items-center justify-start border-b  border-[#305288] text-[#305288] m-4'>
                        <p className='w-[130px] text-[#AECDFF] border-b border-[#AECDFF] text-[15px] text-center pb-2'>Sprint Planning</p>
                        <p className='w-[130px] text-[15px] text-center pb-2'>Active Sprint</p>
                        <p className='w-[130px] text-[15px] text-center pb-2'>Retrospectives</p>
                    </div>
                    <div className='ml-4 flex item-center justify-between max-[1024px]:w-full'>
                        <div className='flex items-center space-x-3'>
                            <div className='bg-[#0A1D38] border border-[#143261] rounded-sm py-[7px] flex items-center justify-start px-2 outline-none w-[280px]'>
                                <IoIosSearch className='text-[20px] mr-4 text-[#305288]' />
                                <input type="text" className='bg-transparent w-full outline-none placeholder:text-[#305288]' placeholder='Search Sprints' />
                            </div>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Sprint Cycles&ensp;</span> <IoIosArrowDown /></button>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Story Owners&ensp;</span> <IoIosArrowDown /></button>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Epics&ensp;</span> <IoIosArrowDown /></button>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Story Types&ensp;</span> <IoIosArrowDown /></button>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Story Status&ensp;</span> <IoIosArrowDown /></button>
                        </div>

                    </div>
                    <div className='flex items-center flex-col justify-start p-14 h-full'>
                        <Image src={"/no.png"} width={200} height={200} alt='adas' />
                        <h1 className='text-[20px] mt-4 font-semibold'>Ready To Sprint Into Action?</h1>
                        <div className='text-[#6B8CC2] space-y-4 w-[480px] text-center my-4'>
                            <p>Sprints are time-boxed periods where your team can commit to a goal and complete an agreed upon amount of stories.</p>
                            <p>Create your first sprint by clicking 'Create Sprint' to organize your team's tasks into a plan for focused and efficient work."</p>
                        </div>
                        <button className='bg-[#4199F1] py-2 px-8 text-[#12294E] rounded-lg font-semibold'>Create Sprint</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page