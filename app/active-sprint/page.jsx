import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Stories from '@/components/Stories'
import Image from 'next/image'
import React from 'react'
import { BiSolidMedal } from 'react-icons/bi'
import { FaCalendar, FaTools } from 'react-icons/fa'
import { FiPenTool } from 'react-icons/fi'
import { GiFallingStar } from 'react-icons/gi'
import { IoIosArrowDown, IoIosSearch, IoMdBug } from 'react-icons/io'
import { MdMenuBook } from 'react-icons/md'
import { MdKeyboardArrowRight } from "react-icons/md";

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
            <div className='flex items-start justify-start'>
                <Sidebar height={"170.3vh"} />
                <div className="bg-[#06152D] w-full h-[170.3vh] text-[#99C0FF] overflow-x-scroll overflow-y-hidden">
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
                    <div className='flex items-start justify-start p-4'>
                        <div>
                            <div className='w-[1130px] px-4 bg-[#061123] shadow-sm shadow-black h-[50px] flex items-center justify-between'>
                                <div className='flex items-center justify-center w-[660px]'>
                                    <MdKeyboardArrowRight className='mr-2 text-[94px]' />
                                    <p className='w-full flex items-center'><Image src={"/spr.png"} width={15} alt={"spiral"} height={30} className='mr-2' />Active Sprint Name</p>
                                    <p className='w-full ml-2'>Mar 23, 2023 - Jan </p>

                                    <div className='flex items-center  w-full justify-center'>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'><FaCalendar className='mr-2' /> 50</span>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <MdMenuBook className='mr-2 text-[14px]' /> 10</span>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <GiFallingStar className='rotate-180 flex items-center justify-center  bg-[#F46A2A] rounded-sm text-[16px] text-[#fff] p-[1px] mr-2' />
                                            2</span>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <IoMdBug className='rotate-180 flex items-center justify-center  bg-red-500 p-[2px] rounded-sm text-[16px] text-[#fff] mr-2' /> 2</span>

                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <FaTools className='rotate-180 flex items-center justify-center  bg-[#6482A0] p-[2px] rounded-sm text-[16px] text-[#fff] mr-2' /> 2</span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='mt-4 pb-5 w-full'>
                                        <p className='text-[14px] text-[#AECDFF]'>25% Done, 15% In Progress</p>
                                        <div className='mt-2 w-[250px] rounded-lg h-[9px] relative bg-[#143261]'>
                                            <div className='w-[150px] h-full bg-[#0C5A4D] absolute rounded-lg'></div>
                                            <div className='w-[100px] h-full bg-[#0EB498] absolute rounded-lg'></div>
                                        </div>
                                    </div>
                                    <button className='py-2 px-3 w-full rounded-md bg-[#12294E] text-[14px] ml-3 shadow-sm shadow-[#6B8CC266]'>Complete Sprint</button>
                                </div>
                            </div>
                            <div className='w-[1130px] my-3 px-4 bg-[#061123] shadow-sm shadow-black h-[50px] flex items-center justify-between'>
                                <div className='flex items-center justify-center w-[660px]'>
                                    <MdKeyboardArrowRight className='mr-2 text-[94px]' />
                                    <p className='w-full flex items-center'><Image src={"/spr.png"} width={15} alt={"spiral"} height={30} className='mr-2' />Active Sprint Name</p>
                                    <p className='w-full ml-2'>Mar 23, 2023 - Jan </p>

                                    <div className='flex items-center  w-full justify-center'>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'><FaCalendar className='mr-2' /> 50</span>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <MdMenuBook className='mr-2 text-[14px]' /> 10</span>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <GiFallingStar className='rotate-180 flex items-center justify-center  bg-[#F46A2A] rounded-sm text-[16px] text-[#fff] p-[1px] mr-2' />
                                            2</span>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <IoMdBug className='rotate-180 flex items-center justify-center  bg-red-500 p-[2px] rounded-sm text-[16px] text-[#fff] mr-2' /> 2</span>

                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <FaTools className='rotate-180 flex items-center justify-center  bg-[#6482A0] p-[2px] rounded-sm text-[16px] text-[#fff] mr-2' /> 2</span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='mt-4 pb-5 w-full'>
                                        <p className='text-[14px] text-[#AECDFF]'>25% Done, 15% In Progress</p>
                                        <div className='mt-2 w-[250px] rounded-lg h-[9px] relative bg-[#143261]'>
                                            <div className='w-[150px] h-full bg-[#0C5A4D] absolute rounded-lg'></div>
                                            <div className='w-[100px] h-full bg-[#0EB498] absolute rounded-lg'></div>
                                        </div>
                                    </div>
                                    <button className='py-2 px-3 w-full rounded-md bg-[#12294E] text-[14px] ml-3 shadow-sm shadow-[#6B8CC266]'>Complete Sprint</button>
                                </div>
                            </div>
                            <div className='w-[1130px] px-4 h-[50px] flex items-center justify-between'>
                                <div className='flex items-center justify-center w-[660px]'>
                                    <MdKeyboardArrowRight className='mr-2 rotate-90 text-[94px]' />
                                    <p className='w-full flex items-center'><Image src={"/spr.png"} width={15} alt={"spiral"} height={30} className='mr-2' />Active Sprint Name</p>
                                    <p className='w-full ml-2'>Mar 23, 2023 - Jan </p>

                                    <div className='flex items-center  w-full justify-center'>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'><FaCalendar className='mr-2' /> 50</span>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <MdMenuBook className='mr-2 text-[14px]' /> 10</span>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <GiFallingStar className='rotate-180 flex items-center justify-center  bg-[#F46A2A] rounded-sm text-[16px] text-[#fff] p-[1px] mr-2' />
                                            2</span>
                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <IoMdBug className='rotate-180 flex items-center justify-center  bg-red-500 p-[2px] rounded-sm text-[16px] text-[#fff] mr-2' /> 2</span>

                                        <span className='bg-[#132C53] w-[50px] rounded-md px-[8px] py-[6px] mr-2 flex items-center justify-center space-x-2 text-[12px]'> <FaTools className='rotate-180 flex items-center justify-center  bg-[#6482A0] p-[2px] rounded-sm text-[16px] text-[#fff] mr-2' /> 2</span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='mt-4 pb-5 w-full'>
                                        <p className='text-[14px] text-[#AECDFF]'>25% Done, 15% In Progress</p>
                                        <div className='mt-2 w-[250px] rounded-lg h-[9px] relative bg-[#143261]'>
                                            <div className='w-[150px] h-full bg-[#0C5A4D] absolute rounded-lg'></div>
                                            <div className='w-[100px] h-full bg-[#0EB498] absolute rounded-lg'></div>
                                        </div>
                                    </div>
                                    <button className='py-2 px-3 w-full rounded-md bg-[#12294E] text-[14px] ml-3 shadow-sm shadow-[#6B8CC266]'>Complete Sprint</button>
                                </div>
                            </div>
                            <p className='text-[15px] mt-3'><span className='font-semibold'> Sprint Goal:</span> Successfully integrate the new analytics dashboard, enhance the file-sharing capabilities, and improve the l...</p>
                            <div className='w-full flex items-center justify-start space-x-4 mt-3'>
                                <Stories user={user} />
                                <Stories user={user} />
                                <Stories user={user} />
                                <Stories user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page