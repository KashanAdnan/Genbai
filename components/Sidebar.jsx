import Image from 'next/image'
import Links from './Links'
import { GoHomeFill } from "react-icons/go";
import { IoMap, IoFlagSharp } from "react-icons/io5";
import { BsBoxFill, BsThreeDots } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { RiBarChartBoxFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";
import { IoIosSettings, IoIosHelpCircle } from "react-icons/io";
import { PiArrowsClockwise, PiStackSimpleFill } from "react-icons/pi";


const Sidebar = () => {
    return (
        <>
            <div className="bg-[#061123] w-[232px] h-[161.3vh] text-[#99C0FF]">

                <div className="border-y border-[#07335F] px-3 py-4">
                    <div className='flex items-center justify-start'>
                        <Image src={"/twitter.png"} width={20} height={30} alt='twitter logo' className='mr-2' />
                        <p>Twitter's Workspace</p>
                    </div>
                    <p className='mt-2 text-[13px] mb-1 text-[#6B8CC2]'>PERSONAL</p>

                    <Links title={"Home"} icon={<GoHomeFill className='text-[18.8px]' />} />
                    <Links title={"My Tickets"} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17.8px] rotate-90">
                        <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                    </svg>
                    } />
                </div>
                <div className="border-t border-[#07335F] px-3 py-4">
                    <p className='text-[13px] mb-2 text-[#6B8CC2]'>PROJECTSPACE</p>
                    <div className='bg-[#0A1D38] py-[10px] px-2 rounded-lg flex items-center justify-start bg-[0A1D38] border border-[#143261] mb-2 ml-[-7px]'>
                        <Image src={"/shape.png"} width={18} height={20} alt='twitter logo' className='mr-2' />
                        <p className='text-[14px]'>Enginere Department</p>
                    </div>

                    <Links title={"Project Home"} icon={<BsBoxFill className='text-[15px]' />} />
                    <Links title={"Rooadmap"} icon={<IoMap className='text-[15px]' />} />
                    <Links title={"Initiative"} icon={<FaRegCompass className='text-[15px]' />} />
                    <Links title={"Epics"} icon={<IoFlagSharp className='text-[15px]' />} />
                    <p className='text-[13px] mt-3 mb-2 text-[#6B8CC2] flex items-center justify-between'>TEAMS <span className='flex item-center'><BsThreeDots className='mr-2' /><FaPlus /></span></p>
                    <Links title={"All Work"} icon={<Image src={"/team.png"} width={20} height={30} alt='Teams' />} />
                    <Links className="mt-1" title={"Product Team"} icon={<Image src={"/paint.png"} width={20} height={30} alt='Teams' />} />
                    <div className='ml-4 border-l-2 pl-3 border-[#07335F]'>
                        <Links className="mt-1" title={"Backlog"} icon={
                            <PiStackSimpleFill className='text-[17px]' />} />
                        <Links className="mt-1" hover={true} title={"Stories"} icon={
                            <MdMenuBook className=' text-[17px]' />} />
                        <Links className="mt-1" title={"Sprint"} icon={<PiArrowsClockwise className='text-[17px]' />} />
                        <Links className="mt-1" title={"Reports"} icon={<RiBarChartBoxFill className='text-[17px]' />} />
                    </div>
                    <Links className="mt-1" title={"Design Theme"} icon={<Image src={"/Teamicons.png"} width={20} height={30} alt='Teams' />} />
                </div>
                <div className="px-3 py-4 mt-20 border-t border-[#07335F]">
                    <Links title={"Invite Members"} icon={<FaUserPlus className='text-[18.8px]' />} />
                    <Links title={"Settings"} icon={<IoIosSettings className='text-[18.8px]' />} />
                    <Links title={"Help"} icon={<IoIosHelpCircle className='text-[18.8px]' />} />
                </div>
            </div>
        </>
    )
}

export default Sidebar