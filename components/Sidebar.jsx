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


const Sidebar = ({ height, light, maxHeight }) => {
    return (
        <>
            <div className={`${light ? "bg-[#fff] text-[#305288] " : "bg-[#061123] flex items-center justify-between flex-col text-[#99C0FF]"} w-[232px] h-[${height}vh] max-[1024px]:h-[${maxHeight}vh] max-[1024px]:w-[246px] `}>
                <div>
                    <div className=" px-3 py-4">
                        <div className='flex items-center justify-start'>
                            <Image src={"/twitter.png"} width={20} height={30} alt='twitter logo' className='mr-2' />
                            <p>Twitter's Workspace</p>
                        </div>
                        <p className='mt-2 text-[13px] mb-1 text-[#6B8CC2]'>PERSONAL</p>

                        <Links light={light} title={"Home"} icon={<GoHomeFill className='text-[18.8px]' />} />
                        <Links light={light} title={"My Tickets"} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17.8px] rotate-90">
                            <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                        </svg>
                        } />
                    </div>
                    <div className={`${light ? "border-t border-[#CCE4FF]" : "border-t border-[#07335F]"} px-3 py-4`}>
                        <p className='text-[13px] mb-2 text-[#6B8CC2]'>PROJECTSPACE</p>
                        <div className={`py-[10px] px-2 rounded-lg flex items-center justify-start bg-[0A1D38] mb-2 ml-[-7px] ${light ? "bg-[#fff]  border border-[#B4C6E4]" : "bg-[rgb(10,29,56)] border border-[#143261] "}`}>
                            <Image src={"/shape.png"} width={18} height={20} alt='twitter logo' className='mr-2' />
                            <p className='text-[14px]'>Enginere Department</p>
                        </div>

                        <Links light={light} title={"Project Home"} icon={<BsBoxFill className='text-[15px]' />} />
                        <Links light={light} title={"Rooadmap"} icon={<IoMap className='text-[15px]' />} />
                        <Links light={light} title={"Initiative"} icon={<FaRegCompass className='text-[15px]' />} />
                        <Links light={light} title={"Epics"} icon={<IoFlagSharp className='text-[15px]' />} />
                        <p className='text-[13px] mt-3 mb-2 text-[#6B8CC2] flex items-center justify-between'>TEAMS <span className='flex item-center'><BsThreeDots className='mr-2' /><FaPlus /></span></p>
                        <Links light={light} title={"All Work"} icon={<Image src={"/team.png"} width={20} height={30} alt='Teams' />} />
                        <Links light={light} className="mt-1" title={"Product Team"} icon={<Image src={"/paint.png"} width={20} height={30} alt='Teams' />} />
                        <div className={`ml-4 pl-3 ${light ? "border-l-2 border-[#CCE4FF]" : "border-l-2 border-[#07335F]"}`}>
                            <Links light={light} className="mt-1" title={"Backlog"} icon={
                                <PiStackSimpleFill className='text-[17px]' />} />
                            <Links hoverLight={light} className="mt-1" hover={!light} title={"Stories"} icon={
                                <MdMenuBook className=' text-[17px]' />} />
                            <Links light={light} className="mt-1" title={"Sprint"} icon={<PiArrowsClockwise className='text-[17px]' />} />
                            <Links light={light} className="mt-1" title={"Reports"} icon={<RiBarChartBoxFill className='text-[17px]' />} />
                        </div>
                        <Links light={light} className="mt-1" title={"Design Theme"} icon={<Image src={"/Teamicons.png"} width={20} height={30} alt='Teams' />} />
                    </div>
                </div>
                <div className={`${light ? 'border-t border-[#CCE4FF]' : "px-3 py-4 mt-20 border-t border-[#07335F]"}`}>
                    <Links light={light} title={"Invite Members"} icon={<FaUserPlus className='text-[18.8px]' />} />
                    <Links light={light} title={"Settings"} icon={<IoIosSettings className='text-[18.8px]' />} />
                    <Links light={light} title={"Help"} icon={<IoIosHelpCircle className='text-[18.8px]' />} />
                </div>
            </div >
        </>
    )
}

export default Sidebar