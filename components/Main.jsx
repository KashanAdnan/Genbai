import React from 'react'
import { IoFlag } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { GiFallingStar } from "react-icons/gi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { BiLoaderCircle } from "react-icons/bi";
import Image from 'next/image';
import { LuAtom } from "react-icons/lu";
import Status from './Status';

const Main = ({ light }) => {
  return (
    <div className={`${light ? "bg-[#fff] text-[#143261] border-l border-[#CCE4FF]" : "bg-[#06152D] text-[#99C0FF]"
      } w-full h-[170vh] max-[1024px]:h-[190vh] max-[1024px]:w-full max-[1024px]:overflow-x-scroll`}>
      <p className='flex items-center justify-start m-4'>Projectspace / Epics / &ensp; <IoFlag className={`${light ? "text-[#fff]" : ""} bg-[#1444E1] rounded-sm p-[1px]`} /> &ensp; Maps-100 </p>
      <div className='flex items-center justify-start border-b  border-[#143261] m-4'>
        <p className='w-[150px] border-b border-[#99C0FF] text-center pb-2'>Overview</p>
        <p className='w-[150px]  text-center pb-2'>Story Board</p>
        <p className='w-[150px]  text-center pb-2'>Story List</p>
      </div>
      <div className='w-full flex items-start justify-between'>
        <div className='w-[800px]'>
          <h1 className={`${light ? "text-[#143261]" : "text-[#AECDFF]"} border border-[#143261] p-3 rounded-lg w-[600px] m-3  text-[18px] font-medium`}>Epic Title</h1>
          <div className='flex items-center justify-start'>
            <button className={`${light ? "border border-[#B4C6E4] bg-[#fff]" : "bg-[#12294E] border border-[#143261]"} flex items-center justify-start ml-4  py-2 px-4 rounded-md`}><GrAttachment className={`text-[16px] mr-2`} /> Attach File</button>
            <button className={`${light ? "border border-[#B4C6E4] bg-[#fff]" : "bg-[#12294E] border border-[#143261]"} flex items-center justify-start ml-4  py-2 px-4 rounded-md`}><MdMenuBook className={`text-[16px] mr-2`} /> Add Story</button>
          </div>
          <div className='m-5'>
            <h3 className={`${light ? "text-[#143261]" : "text-[#AECDFF]"} font-semibold mb-3 `}>Description</h3>
            <h3 className={`${light ? "text-[#143261]" : "text-[#AECDFF]"} font-semibold mb-3 `}>Summary:</h3>
            <p className={`mb-3`}>To improve usability during evening hours and provide eye comfort to users, introduce a "Dark Mode" theme for the project management app interface.</p>
            <h3 className={`${light ? "text-[#143261]" : "text-[#AECDFF]"} font-semibold mb-3 `}>User Story:</h3>
            <p className={`mb-3`}>As a user who often works late, I want to switch the app interface to "Dark Mode" so that I can reduce eye strain and have a comfortable viewing experience in low-light conditions,</p>
          </div>
          <div className={`m-4 mt-10 ${light ? "text-[#143261]" : "text-[#AECDFF]"} flex items-center justify-between border-b border-[#143261] pb-3`}>
            <h1 className='font-semibold flex items-center '><MdMenuBook className='mr-2 text-[20px]' /> Stories <span className={` px-1 rounded-md ml-2 ${light ? "bg-[#D5E2F6]" : "bg-[#12294E]"}`}>3</span></h1>
            <button className={`flex items-center ${light ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#12294E] border border-[#143261]"}  py-1 px-3 rounded-md`}><FaPlus className='text-[12px] mr-2' />Add Existing</button>
          </div>
          <div className={`shadow mb-[1px] shadow-[#6B8CC266] ${light ? "bg-[#fff] shadow-md shadow-[#6B8CC266]" : "bg-[#0A1D38] border border-[#143261]"}  rounded-md p-2 flex items-center justify-between mx-4`}>
            <div className='flex items-center'>
              <GiFallingStar className={`rotate-180 bg-[#F46A2A] ${light ? "text-[#fff]" : ""} rounded-sm text-[16px] p-[1px] mr-2`} />
              <p className={`${light ? "text-[#143261]" : "text-[#AECDFF]"}`}>PRJ-1  Some Story Name Goes Here And gets cropped out</p>
            </div>
            <div className='flex items-center justify-center'>
              <MdOutlineKeyboardDoubleArrowDown className='text-[24px] text-[#1354D7]' />
              <Image src={"/paint.png"} width={20} height={30} className='mx-3' alt='Teams' />
              <button className={`flex items-center justify-start ${light ? "bg-[#F2F7FD]" : "bg-[#12294E]"} py-1 px-2 rounded-md`}>
                <BiLoaderCircle className='mr-2' />
                Unrefined
              </button>
            </div>
          </div>
          <div className={`shadow mb-[1px] shadow-[#6B8CC266] ${light ? "bg-[#fff] shadow-md shadow-[#6B8CC266]" : "bg-[#0A1D38] border border-[#143261]"}  rounded-md p-2 flex items-center justify-between mx-4`}>
            <div className='flex items-center'>
              <GiFallingStar className={`rotate-180 bg-[#F46A2A] ${light ? "text-[#fff]" : ""} rounded-sm text-[16px] p-[1px] mr-2`} />
              <p className={`${light ? "text-[#143261]" : "text-[#AECDFF]"}`}>PRJ-1  Some Story Name Goes Here And gets cropped out</p>
            </div>
            <div className='flex items-center justify-center'>
              <MdOutlineKeyboardDoubleArrowDown className='text-[24px] text-[#1354D7]' />
              <Image src={"/paint.png"} width={20} height={30} className='mx-3' alt='Teams' />
              <button className={`flex items-center justify-start ${light ? "bg-[#F2F7FD]" : "bg-[#12294E]"} py-1 px-2 rounded-md`}>
                <BiLoaderCircle className='mr-2' />
                Unrefined
              </button>
            </div>
          </div>
          <div className={`shadow mb-[1px] shadow-[#6B8CC266] ${light ? "bg-[#fff] shadow-md shadow-[#6B8CC266]" : "bg-[#0A1D38] border border-[#143261]"}  rounded-md p-2 flex items-center justify-between mx-4`}>
            <div className='flex items-center'>
              <GiFallingStar className={`rotate-180 bg-[#F46A2A] ${light ? "text-[#fff]" : ""} rounded-sm text-[16px] p-[1px] mr-2`} />
              <p className={`${light ? "text-[#143261]" : "text-[#AECDFF]"}`}>PRJ-1  Some Story Name Goes Here And gets cropped out</p>
            </div>
            <div className='flex items-center justify-center'>
              <MdOutlineKeyboardDoubleArrowDown className='text-[24px] text-[#1354D7]' />
              <Image src={"/paint.png"} width={20} height={30} className='mx-3' alt='Teams' />
              <button className={`flex items-center justify-start ${light ? "bg-[#F2F7FD]" : "bg-[#12294E]"} py-1 px-2 rounded-md`}>
                <BiLoaderCircle className='mr-2' />
                Unrefined
              </button>
            </div>
          </div>
          <div className='flex items-center justify-start mt-4'>
            <button className={`flex items-center justify-start  ml-4 ${light ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#12294E] border border-[#143261]"} py-2 px-4 rounded-md`}><FaPlus className='mr-2' /> Create Story</button>
            <button className={`flex items-center justify-start  ml-4 ${light ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#12294E] border border-[#143261]"} py-2 px-4 rounded-md`}><LuAtom className='mr-2' /> Generate Story</button>
          </div>
          <div className={`m-4 mt-10 ${light ? "text-[#143261]" : "text-[#AECDFF]"} flex items-center justify-between border-b border-[#143261] pb-3`}>
            <h1 className='font-semibold flex items-center '><GrAttachment className='mr-2 text-[20px]' /> Attachment <span className={` px-1 rounded-md ml-2 ${light ? "bg-[#D5E2F6]" : "bg-[#12294E]"}`}>3</span></h1>
            <button className={`flex items-center ${light ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#12294E] border border-[#143261]"}  py-1 px-3 rounded-md`}><FaPlus className='text-[12px] mr-2' />Add Attachment</button>
          </div>
          <div className='flex items-center justify-start'>
            <div className={`${light ? "border border-[#EEF2F7]" : "border border-[#143261]"} ml-4 w-[150px] flex items-center justify-start flex-col rounded-lg`}>
              <div className={`${light ? 'w-full bg-[#06152D] flex items-center justify-center rounded-tl-md rounded-tr-md' : ''}`}>
                <Image src="/attachment.png" width={110} height={110} alt='' />
              </div>
              <div className={`${light ? "#fff" : "bg-[#0A1D38]"} border p-3 w-full ${light ? "border-[#EEF2F7]" : "border-[#143261]"}`}>
                <p className='text-[14px]'>somepdfname.png</p>
                <p className={`${light ? "text-[#305288]" : "text-[#99C0FF]"} text-[12px]`}>Dec 10, 2023, 7:20pm</p>
              </div>
            </div>

            <div className={`${light ? "border border-[#EEF2F7]" : "border border-[#143261]"} ml-4 w-[150px] flex items-center justify-start flex-col rounded-lg`}>
              <div className='p-2'>
                <Image src="/pdf.png" width={50} height={110} alt='' />
              </div>
              <div className={`${light ? "#fff" : "bg-[#0A1D38]"} border p-3 w-full ${light ? "border-[#EEF2F7]" : "border-[#143261]"}`}>
                <p className='text-[14px]'>somepdfname.png</p>
                <p className={`${light ? "text-[#305288]" : "text-[#99C0FF]"} text-[12px]`}>Dec 10, 2023, 7:20pm</p>
              </div>
            </div>

            <div className={`${light ? "border border-[#EEF2F7]" : "border border-[#143261]"} ml-4 w-[150px] flex items-center justify-start flex-col rounded-lg`}>
              <div className='p-2'>
                <Image src="/pdf.png" width={50} height={110} alt='' />
              </div>
              <div className={`${light ? "#fff" : "bg-[#0A1D38]"} border p-3 w-full ${light ? "border-[#EEF2F7]" : "border-[#143261]"}`}>
                <p className='text-[14px]'>somepdfname.png</p>
                <p className={`${light ? "text-[#305288]" : "text-[#99C0FF]"} text-[12px]`}>Dec 10, 2023, 7:20pm</p>
              </div>
            </div>

          </div>
        </div>
        <Status light={light} />
      </div>
    </div>
  )
}

export default Main