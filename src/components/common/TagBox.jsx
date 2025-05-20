import React from 'react'
import flower from '../../assets/images/svg/flower-tag.svg'

const TagBox = ({ children, white, border, className }) => {
    return (
        <div className={`flex items-center rounded-[100px] gap-1 bg-white/[18%] max-w-max py-1.5 pe-4 ps-3 ${className} ${border ? "border border-natural" : "border border-transparent"}`}>
            <img src={flower} alt="flower" className='w-3.5 h-3.5' />
            <span className={`text-sm uppercase font-medium leading-150 ${white ? "text-white" : "text-natural-black"}`}>{children}</span>
        </div>
    )
}

export default TagBox