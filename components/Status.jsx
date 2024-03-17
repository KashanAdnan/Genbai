import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import Image from 'next/image';
import { CiCompass1 } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";

const Status = () => {
    return (
        <div className='flex items-start justify-start flex-col'>
            <div className='w-[350px]'>
                <p className='text-[#6B8CC2] mb-3'>Health Status</p>
                <button className='flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-lg p-2'><FaCircle className='border border-[#6B8CC2] text-[#99C0FF] rounded-full p-[1px]' /> <span className='text-[#99C0FF]'>&ensp;Update Epic Status&ensp;</span> <IoIosArrowDown /></button>
            </div>
            <div className='p-4 mt-4 bg-[#0A1D38] border border-[#143261] rounded-lg'>
                <div className=' my-3 flex items-start justify-start'>
                    <p className='w-[110px] text-[#6B8CC2]'>Projetspace</p>
                    <div className='flex items-center justify-center text-[#99C0FF]'>
                        <Image src={"/shape.png"} className='mr-3' width={20} height={30} alt='space' /> MobileApps
                    </div>
                </div>
                <div className=' my-3 flex items-start justify-start'>
                    <p className='w-[110px] text-[#6B8CC2]'>Team</p>
                    <div className='flex items-center justify-center text-[#99C0FF]'>
                        <Image src={"/paint.png"} className='mr-3' width={20} height={30} alt='space' /> Product Development
                    </div>
                </div>
                <div className='my-3 flex items-start justify-start'>
                    <p className='w-[110px] text-[#6B8CC2]'>Phase</p>
                    <div className='flex items-center justify-center text-[#99C0FF]'>
                        <Image src={"/circle2.png"} className='mr-3' width={20} height={30} alt='space' /> Planned
                    </div>
                </div>
                <div className='my-3 flex items-start justify-start'>
                    <p className='w-[110px] text-[#6B8CC2]'>Owner</p>
                    <div className='flex items-center justify-center text-[#99C0FF]'>
                        <Image src={"/circle.png"} className='mr-3' width={20} height={30} alt='space' /> Unassigned
                    </div>
                </div>
            </div>
            <div className='p-4 mt-4 w-[330px] bg-[#0A1D38] border border-[#143261] rounded-lg'>
                <div className=' my-3 flex items-start justify-start'>
                    <p className='w-[110px] text-[#6B8CC2]'>Start Date</p>
                    <div className='flex items-center justify-center text-[#99C0FF]'>
                        <FaCalendar className='mr-2' /> None
                    </div>
                </div>
                <div className=' my-3 flex items-start justify-start'>
                    <p className='w-[110px] text-[#6B8CC2]'>End Date</p>
                    <div className='flex items-center justify-center text-[#99C0FF]'>
                        <FaCalendar className='mr-2' /> None
                    </div>
                </div>
            </div>
            <div className='p-4 mt-4 w-[330px] bg-[#0A1D38] border border-[#143261] rounded-lg'>
                <div className=' my-1 flex items-start justify-start'>
                    <p className='w-[110px] text-[#6B8CC2]'>initiative</p>
                    <div className='flex items-center justify-center text-[#99C0FF]'>
                        <CiCompass1 className='mr-2 text-[18px]' />  Initiative Name
                    </div>
                </div>
            </div>
            <div className='p-4 mt-4 w-[330px] bg-[#0A1D38] border border-[#143261] rounded-lg'>
                <div className=' my-1 flex items-start justify-start'>
                    <p className='w-[110px] text-[#6B8CC2]'>Labels</p>
                    <div className='flex items-center justify-center text-[#99C0FF]'>
                        None
                    </div>
                </div>
            </div>
            <div className='mt-4 border-b border-[#143261] pb-4 w-full'>
                <p className='text-[#AECDFF]'>25% Done, 15% In Progress</p>
                <div className='mt-2 w-[300px] rounded-lg h-[10px] relative bg-[#143261]'>
                    <div className='w-[150px] h-full bg-[#0C5A4D] absolute rounded-lg'></div>
                    <div className='w-[100px] h-full bg-[#0EB498] absolute rounded-lg'></div>
                </div>
            </div>
            <p className='mt-4 mb-2 text-[15px] text-[#305288]'>Created</p>
            <p className='mb-2 text-[16px] text-[#99C0FF]'>Apr 7 2023, 5:10pm</p>
            <p className='mb-2 text-[15px] text-[#305288]'>Last Updated</p>
            <p className='text-[16px] text-[#99C0FF]'>July 7 2023, 5:10pm</p>
        </div>
    )
}

export default Status