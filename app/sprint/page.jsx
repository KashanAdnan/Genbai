import Header from '@/components/Header'
import { FaRegCircle } from "react-icons/fa";
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React from 'react'
import { BiLoaderCircle } from 'react-icons/bi'
import { FaCalendar, FaEye, FaPlus, FaRegSquare } from 'react-icons/fa'
import { GiFallingStar } from 'react-icons/gi'
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import { IoFlag } from 'react-icons/io5'
import { LuAtom } from 'react-icons/lu'
import { RiArrowUpDoubleLine } from 'react-icons/ri'
import Sprint from '@/components/Sprint';

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
            <div className='flex items-center justify-start w-full'>
                <Sidebar />
                <div className="bg-[#06152D] w-full h-[161.3vh] text-[#99C0FF] overflow-x-scroll overflow-y-hidden">
                    <p className='flex items-center  justify-start m-4 text-[#6B8CC2]'>Project Name / Team name (Workflow Type) / <span className='text-[#99C0FF]'> &ensp;Sprints</span> </p>
                    <h1 className='text-2xl text-[#99C0FF] font-medium ml-4'>Sprints</h1>
                    <div className='flex items-center justify-start border-b  border-[#305288] text-[#305288] m-4'>
                        <p className='w-[130px] text-[#AECDFF] border-b border-[#AECDFF] text-[15px] text-center pb-2'>Sprint Planning</p>
                        <p className='w-[130px] text-[15px] text-center pb-2'>Active Sprint</p>
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
                        <div className='w-[400px] m-3 rounded-lg bg-[#061123] h-[790px]  shadow-[#6B8CC266] shadow-sm'>
                            <div className='w-full flex items-start justify-start flex-col p-4'>
                                <h1 className='font-semibold text-[18px] mb-2'>Sprint Planning</h1>
                                <p className='text-[14px]'>
                                    Ths list contains incomplete Stories not yet included in a sprint, sorted by their due date. Stories in the ‘Backlog’ are not listed here.
                                    <br />
                                    <br />
                                    Drag and drop stories into ‘Planned’ or ‘Active’ sprints as needed.
                                    <br />
                                    <br />
                                    You can manage the progress of active sprints in detail on the Active Sprints tab.
                                </p>
                            </div>
                            <div className='px-3'>
                                {
                                    user.map((item) => {
                                        return (
                                            <div className='p-4 bg-[#0A1D38] border border-[#143261] mb-1 shadow-[#6B8CC266] shadow-md'>
                                                <p className='flex items-center text-[#6B8CC2] text-[15px]'> <IoFlag className='bg-[#1444E1] text-[#fff] text-[15px] rounded-sm p-[1px] mr-2' /> {item.logo}</p>
                                                <h3 className='text-[#AECDFF] text-[17px] my-2'>{item.title}</h3>
                                                <div className='flex items-center justify-start'>
                                                    <span className='bg-[#F1B941] text-[#12294E] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[13.5px]'><FaRegCircle className='mr-1' /> Ready to Develop</span>
                                                    <span className='bg-[#132C53] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[13.5px]'><FaCalendar className='mr-2' /> {item.date}</span>
                                                    <span className='bg-[#132C53] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[13.5px]'><Image className='mr-2' src="/aim.png" alt="ada" width="14" height="14"></Image> {item.aim}</span>
                                                    <span className='bg-[#132C53] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[13.5px]'><Image className='mr-2' src="/charger.png" alt="ada" width="14" height="14"></Image> {item.plug}</span>
                                                </div>
                                                <div className='flex items-center justify-between w-full'>
                                                    <div className='flex items-center justify-between mt-4 w-full'>
                                                        <div className='flex items-center space-x-1 text-[14px]'>
                                                            <GiFallingStar className='rotate-180 flex items-center justify-center  bg-[#F46A2A] rounded-sm text-[14px] p-[1px] mr-2' />
                                                            <p className='text-[#AECDFF]'>PRJ-1
                                                            </p>
                                                            <RiArrowUpDoubleLine className='text-red-500 text-[20px]' />
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <Image className='rounded-full mr-[-7px] z-20' src="/ProfileIcon.png" alt="ada" width="24" height="24"></Image>
                                                            <Image className='mr-[-7px] z-10 rounded-full' src="/user2.jpg" alt="ada" width="24" height="24"></Image>
                                                            <Image className='rounded-full' src="/user3.jpg" alt="ada" width="24" height="24"></Image>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    })
                                }
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