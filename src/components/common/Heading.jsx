import React from 'react'

const Heading = ({ maxWidth, children, left, right, className, white, black }) => {
    return (
        <h2
            style={{ maxWidth: `${maxWidth && maxWidth}px` }}
            className={`${className && className} 
            ${left ? ' ml-0 mr-auto text-left' : right ? 'ml-auto mr-0 text-right' : 'mx-auto text-center'}
         ${white ? "text-white" : black ? "text-black" : "text-light-black "}
          intergral_cf font-normal leading-120 text-4xl md:text-[40px] lg:text-5xl
`}
        >
            {children}
        </h2>
    )
}

export default Heading