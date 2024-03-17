import React from 'react'

const Links = ({ icon, title, hover }) => {
    return (
        <>
            <div className={` px-2 py-1  hover:rounded-md flex items-center justify-start mb-2 cursor-pointer ${hover ? "bg-[#4199F1] text-[#06152D] px-2 py-1 rounded-md " : "link hover:bg-[#4199F1] text-[#4199F1] hover:text-[#06152D]"}`}>
                {icon}
                <p className={` ml-2 mt-1 text-[14.8px]   ${hover ? "text-[#06152D] font-medium " : "text-[#99C0FF] "}`}>{title}</p>
            </div>
        </>
    )
}

export default Links