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
const Main = () => {
  return (
    <div className="bg-[#06152D] w-full h-[161.3vh] text-[#99C0FF]">
      <p className='flex items-center justify-start m-4'>Projectspace / Epics / &ensp; <IoFlag className='bg-[#1444E1] rounded-sm p-[1px]' /> &ensp; Maps-100 </p>
      <div className='flex items-center justify-start border-b  border-[#143261] m-4'>
        <p className='w-[150px] border-b border-[#99C0FF] text-center pb-2'>Overview</p>
        <p className='w-[150px]  text-center pb-2'>Story Board</p>
        <p className='w-[150px]  text-center pb-2'>Story List</p>
      </div>
      <div className='w-full flex items-start justify-between'>
        <div className='w-[800px]'>
          <h1 className='border border-[#143261] p-3 rounded-lg w-[600px] m-3 text-[#AECDFF] text-[18px] font-medium'>Epic Title</h1>
          <div className='flex items-center justify-start'>
            <button className='flex items-center justify-start border border-[#143261] ml-4 bg-[#12294E] py-2 px-4 rounded-md'><GrAttachment className='mr-2' /> Attach File</button>
            <button className='flex items-center justify-start border border-[#143261] ml-4 bg-[#12294E] py-2 px-4 rounded-md'><MdMenuBook className='mr-2' /> Add Story</button>
          </div>
          <div className='m-5'>
            <h3 className='font-semibold mb-3 text-[#AECDFF]'>Description</h3>
            <h3 className='font-semibold mb-3 text-[#AECDFF]'>Summary:</h3>
            <p className='mb-3 text-[#AECDFF]'>To improve usability during evening hours and provide eye comfort to users, introduce a "Dark Mode" theme for the project management app interface.</p>
            <h3 className='font-semibold mb-3 text-[#AECDFF]'>User Story:</h3>
            <p className='mb-3 text-[#AECDFF]'>As a user who often works late, I want to switch the app interface to "Dark Mode" so that I can reduce eye strain and have a comfortable viewing experience in low-light conditions,</p>
          </div>
          <div className='m-4 mt-10 text-[#AECDFF] flex items-center justify-between border-b border-[#143261] pb-3'>
            <h1 className='font-semibold flex items-center '><MdMenuBook className='mr-2 text-[20px]' /> Stories <span className='bg-[#12294E] px-1 rounded-md ml-2'>3</span></h1>
            <button className='flex items-center bg-[#12294E] border border-[#143261] py-1 px-3 rounded-md'><FaPlus className='text-[12px] mr-2' />Add Existing</button>
          </div>
          <div className='shadow mb-[1px] shadow-[#6B8CC266] bg-[#0A1D38] border border-[#143261] rounded-md p-2 flex items-center justify-between mx-4'>
            <div className='flex items-center'>
              <GiFallingStar className='rotate-180 bg-[#F46A2A] rounded-sm text-[16px] p-[1px] mr-2' />
              <p className='text-[#AECDFF]'>PRJ-1  Some Story Name Goes Here And gets cropped out</p>
            </div>
            <div className='flex items-center justify-center'>
              <MdOutlineKeyboardDoubleArrowDown className='text-[24px] text-[#1354D7]' />
              <Image src={"/paint.png"} width={20} height={30} className='mx-3' alt='Teams' />
              <button className='flex items-center justify-start bg-[#132C53] py-1 px-2 rounded-md'>
                <BiLoaderCircle className='mr-2' />
                Unrefined
              </button>
            </div>
          </div>
          <div className='shadow mb-[1px] shadow-[#6B8CC266] bg-[#0A1D38] border border-[#143261] rounded-md p-2 flex items-center justify-between mx-4'>
            <div className='flex items-center'>
              <GiFallingStar className='rotate-180 bg-[#F46A2A] rounded-sm text-[16px] p-[1px] mr-2' />
              <p className='text-[#AECDFF]'>PRJ-1  Some Story Name Goes Here And gets cropped out</p>
            </div>
            <div className='flex items-center justify-center'>
              <MdOutlineKeyboardDoubleArrowDown className='text-[24px] text-[#1354D7]' />
              <Image src={"/paint.png"} width={20} height={30} className='mx-3' alt='Teams' />
              <button className='flex items-center justify-start bg-[#132C53] py-1 px-2 rounded-md'>
                <BiLoaderCircle className='mr-2' />
                Unrefined
              </button>
            </div>
          </div>
          <div className='shadow mb-[1px] shadow-[#6B8CC266] bg-[#0A1D38] border border-[#143261] rounded-md p-2 flex items-center justify-between mx-4'>
            <div className='flex items-center'>
              <GiFallingStar className='rotate-180 bg-[#F46A2A] rounded-sm text-[16px] p-[1px] mr-2' />
              <p className='text-[#AECDFF]'>PRJ-1  Some Story Name Goes Here And gets cropped out</p>
            </div>
            <div className='flex items-center justify-center'>
              <MdOutlineKeyboardDoubleArrowDown className='text-[24px] text-[#1354D7]' />
              <Image src={"/paint.png"} width={20} height={30} className='mx-3' alt='Teams' />
              <button className='flex items-center justify-start bg-[#132C53] py-1 px-2 rounded-md'>
                <BiLoaderCircle className='mr-2' />
                Unrefined
              </button>
            </div>
          </div>
          <div className='flex items-center justify-start mt-4'>
            <button className='flex items-center justify-start border border-[#143261] ml-4 bg-[#12294E] py-2 px-4 rounded-md'><FaPlus className='mr-2' /> Create Story</button>
            <button className='flex items-center justify-start border border-[#143261] ml-4 bg-[#12294E] py-2 px-4 rounded-md'><LuAtom className='mr-2' /> Generate Story</button>
          </div>
          <div className='m-4 mt-6 text-[#AECDFF] flex items-center justify-between border-b border-[#143261] pb-3'>
            <h1 className='font-semibold flex items-center '><GrAttachment className='mr-2 text-[20px]' /> Attachment <span className='bg-[#12294E] px-1 rounded-md ml-2'>3</span></h1>
            <button className='flex items-center bg-[#12294E] border border-[#143261] py-1 px-3 rounded-md'><FaPlus className='text-[12px] mr-2' />Add Attachment</button>
          </div>
          <div className='flex items-center justify-start'>
            <div className='border border-[#143261] ml-4 w-[150px] flex items-center justify-start flex-col rounded-lg'>
              <div>
                <Image src="/attachment.png" width={110} height={110} alt='' />
              </div>
              <div className='bg-[#0A1D38] border p-3 w-full border-[#143261]'>
                <p className='text-[14px]'>somepdfname.png</p>
                <p className='text-[#99C0FF] text-[12px]'>Dec 10, 2023, 7:20pm</p>
              </div>
            </div>

            <div className='border border-[#143261] ml-4 w-[150px] flex items-center justify-start flex-col rounded-lg'>
            <div className='p-2'>
                <Image src="/pdf.png" width={50} height={110} alt='' />
              </div>
              <div className='bg-[#0A1D38] border p-3 w-full border-[#143261]'>
                <p className='text-[14px]'>somepdfname.png</p>
                <p className='text-[#99C0FF] text-[12px]'>Dec 10, 2023, 7:20pm</p>
              </div>
            </div>

            <div className='border border-[#143261] ml-4 w-[150px] flex items-center justify-start flex-col rounded-lg'>
              <div className='p-2'>
                <Image src="/pdf.png" width={50} height={110} alt='' />
              </div>
              <div className='bg-[#0A1D38] border p-3 w-full border-[#143261]'>
                <p className='text-[14px]'>somepdfname.png</p>
                <p className='text-[#99C0FF] text-[12px]'>Dec 10, 2023, 7:20pm</p>
              </div>
            </div>

          </div>
        </div>
        <Status />
      </div>
    </div>
  )
}

export default Main