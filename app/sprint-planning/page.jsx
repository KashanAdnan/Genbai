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
            <div className='flex items-center justify-start w-full'>
                <Sidebar light={lightMode} height={"161vh"} />
                <div className="bg-[#06152D] w-full h-[161vh] max-[1024px]:h-[169.8vh]  text-[#99C0FF] overflow-x-scroll  overflow-y-hidden">
                    <p className='flex items-center  justify-start m-4 text-[#6B8CC2]'>Project Name / Team name (Workflow Type) / <span className='text-[#99C0FF]'> &ensp;Sprints</span> </p>
                    <h1 className='text-2xl text-[#99C0FF] font-medium ml-4'>Sprints</h1>
                    <div className='flex items-center justify-start border-b  border-[#305288] text-[#305288] m-4'>
                        <p className='w-[130px] text-[#AECDFF] border-b border-[#AECDFF] text-[15px] text-center pb-2'>Sprint Planning</p>
                        <p className='w-[130px]  text-[15px] text-center pb-2'>Active Sprint</p>
                        <p className='w-[130px] text-[15px] text-center pb-2'>Retrospectives</p>
                    </div>
                    <div className='ml-4 flex item-center justify-between'>
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
                    <div className='flex items-start justify-start w-[1650px]'>
                        <div className='w-[400px] m-3 p-4 rounded-lg bg-[#061123] h-[590px]  shadow-[#6B8CC266] shadow-sm'>
                            <h1 className='text-[18px] font-semibold'>Sprint Planning</h1>
                            <div className='flex h-full items-center justify-center flex-col'>
                                <Image src={"/no.png"} alt='not found' width={150} height={150} className='mb-2' />
                                <h1 className='text-[#99C0FF] text-[17px] my-1 font-medium'>No Stories Found</h1>
                                <p className='text-[#6B8CC2] mb-5'>Uh oh! No stories match your filters.</p>
                                <button className='bg-[#4199F1] py-2 px-3 text-[#12294E] rounded-lg'>Clear Filter</button>
                            </div>
                        </div>
                        <div>
                            <div className='w-[380px] mt-5 m-3 rounded-tl-lg rounded-tr-lg bg-[#061123] h-[20px] text-center'>
                                <p className='text-[13px]'>PLANNED</p>
                            </div>
                            <Sprint />
                            <Sprint className="mt-3" />
                        </div>
                        <div>
                            <div className='w-[380px] mt-5 m-3 rounded-tl-lg rounded-tr-lg bg-[#061123] h-[20px] text-center'>
                                <p className='text-[13px]'>ACTIVE </p>
                            </div>
                            <Sprint />
                        </div>
                        <div>
                            <div className='w-[380px] mt-5 m-3 rounded-tl-lg rounded-tr-lg bg-[#061123] h-[20px] text-center'>
                                <p className='text-[13px]'>COMPLETED</p>
                            </div>
                            <Sprint />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page