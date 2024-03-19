import React from 'react'
import { BiLoaderCircle } from 'react-icons/bi'
import { FaPlus, FaRegSquare } from 'react-icons/fa'
import { LuAtom } from 'react-icons/lu'
import Block from './Block'

const Stories = ({ user }) => {
    return (
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
    )
}

export default Stories