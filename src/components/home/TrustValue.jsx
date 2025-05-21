import React from 'react'
import trust_value from '../../assets/images/webp/trust-value.webp'
import TagBox from '../common/TagBox'
import Heading from '../common/Heading'
import Icons from '../common/Icons'

const TrustValue = () => {
    return (
        <div className='bg_trust'>
            <div className='max-w-[1140px] mx-auto px-4 w-full xl:px-0 py-14 md:py-16 lg:py-20 xl:py-[120px]'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[48%_52%] gap-8 md:gap-2 items-center">
                    <div className=''>
                        <img src={trust_value} alt="featured_phone" className='max-w-[442px] w-full' />
                    </div>
                    <div className=''>
                        <TagBox white >Trust & Security</TagBox>
                        <Heading className={"py-4"} white left>Trusted by Thousands of Small Businesses</Heading>
                        <p className='text-[#DBDBDB] flex gap-4 capitalize w-full text-base leading-150'>
                            Your data and payments are protected with enterprise-grade encryption. We prioritize your privacy and ensure secure invoice generation, payment tracking, and client communication.
                        </p>

                        <div className='mt-10 flex cursor-pointer max-w-max'>
                            <button className='bg-green cursor-pointer text-white rounded-[44px] font-semibold text-base leading-150 py-3.5 px-6'>
                               See How It Works
                            </button>
                            <span className='h-[52px] -translate-x-5 w-[52px] bg-white rounded-full flex items-center justify-center'>
                                <Icons icon='arrow' />
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default TrustValue