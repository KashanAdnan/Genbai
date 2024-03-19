import React from 'react'

const Links = ({ icon, title, hover, light, hoverLight }) => {
    return (
        <>
            <div className={`px-2 py-1  hover:rounded-md flex items-center justify-start mb-2 cursor-pointer ${hover ? "bg-[#4199F1] text-[#06152D] px-2 py-1 rounded-md" : " "}  ${hoverLight ? "bg-[#F0F7FF] text-[#057BF1] px-2 py-1 rounded-md" : " "} hover:bg-[#4199F1] text-[#4199F1] hover:text-[#06152D] border-l-pink-50`}>
                <span className={`${hover ? "text-[#06152D]" : ""}`}> {icon}</span>
                <p className={`ml-2 mt-1 text-[14.8px] ${hover ? "text-[#06152D] font-medium" : ""} ${hoverLight ? "text-[#057BF1]" : ""} ${light ? "text-[#26467A]" : ""} `}>{title}</p>
            </div >
        </>
    )
}

export default Links