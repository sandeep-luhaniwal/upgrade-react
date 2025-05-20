import React from 'react'
import hero_img from '../../assets/images/webp/hero-img.webp'
import flower from '../../assets/images/svg/flower-tag.svg'
import Icons from '../common/Icons'
import TagBox from '../common/TagBox'

const Hero = () => {
    return (
        <div className='max-w-[1140px] mx-auto px-4 w-full xl:px-0 pb-11 pt-8 md:pt-13 lg:pt-[66px]'>
            <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                <div className='order-2 md:order-1 pt-10 md:pt-0'>
                    <TagBox  white >100% TRUSTED PLATFORM</TagBox>
                    <h1 className='intergral_cf font-normal text-white text-[40px] sm:text-[44px] py-3 lg:text-6xl xl:text-[64px] leading-120'>Finance with Security And <span className='text-yellow'>Flexibility</span></h1>
                    <p className='text-white font-medium text-base lg:text-lg lg:max-w-[500px] capitalize'>no-fee checking account with cash back rewards. Enjoy fee-free banking and earn cash back on your everyday purchases.</p>
                    <div className='mt-10 flex cursor-pointer max-w-max'>
                        <button className='bg-green cursor-pointer text-white rounded-[44px] font-semibold text-base leading-150 py-3.5 px-8'>
                            Open Account
                        </button>
                        <span className='h-[52px] -translate-x-5 w-[52px] bg-white rounded-full flex items-center justify-center'>
                            <Icons icon='arrow' />
                        </span>
                    </div>
                </div>
                <div className='flex justify-center md:justify-end md:order-2'>
                    <img src={hero_img} alt="hero_img" className='max-w-[446px] lg:max-w-[446px] md:max-w-[340px] w-full' />
                </div>
            </div>
        </div>
    )
}

export default Hero