import React from 'react'
import featured_phone from '../../assets/images/webp/featured-phone.webp'
import TagBox from '../common/TagBox'
import Heading from '../common/Heading'
import Icons from '../common/Icons'

const Featured = () => {
    return (
        <div id='features' className='max-w-[1140px] mx-auto px-4 w-full xl:px-0 py-14 md:py-16 lg:py-20 xl:pt-[100px] xl:pb-[120px]'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
                <div className='order-2 md:order-1 pt-2 md:pt-0'>
                    <TagBox border >featured</TagBox>
                    <Heading className={"pt-5 pb-3"} left>Manage Invoices in One App</Heading>
                    <p className='text-[#676666] flex gap-4 max-w-[484px] w-full text-base leading-150'>
                        <span className='block h-1 w-1 p-[1px] ms-2 bg-[#676666] mt-2.5 rounded-full'></span>
                        Generate customized invoices in seconds
                    </p>
                    <p className='text-[#676666] pt-2 flex gap-4 max-w-[484px] w-full text-base leading-150'>
                        <span className='block h-1 w-1 p-[1px] ms-2 bg-[#676666] mt-2.5 rounded-full'></span>
                        Accept payments via UPI, cards, and wallets
                    </p>
                    <p className='text-[#676666] pt-2 flex gap-4 max-w-[484px] w-full text-base leading-150'>
                        <span className='block h-1 w-1 p-[1px] ms-2 bg-[#676666] mt-2.5 rounded-full'></span>
                        Track unpaid invoices and send reminders
                    </p>
                    <p className='text-[#676666] pt-2 flex gap-4 max-w-[484px] w-full text-base leading-150'>
                        <span className='block h-1 w-1 p-[1px] ms-2 bg-[#676666] mt-2.5 rounded-full'></span>
                        Download invoices as PDF or share via email/WhatsApp
                    </p>
                    <div className='mt-6 group md:mt-8 lg:mt-10 flex cursor-pointer max-w-max'>
                        <button className='bg-white border relative border-green group-hover:border-orange cursor-pointer text-black rounded-[44px] font-semibold text-base leading-150 py-3.5 px-6'>
                            Explore Features
                             <span className='h-[52px] group-hover:w-full group-hover:translate-x-0 duration-300 absolute top-0 right-0 translate-x-8 w-[52px] bg-orange rounded-full flex items-center justify-center'>
                                <span className='w-0 group-hover:-me-5 scale-0 group-hover:scale-100 text-orange group-hover:text-white duration-300 group-hover:w-full'>Explore Features</span>
                                <Icons icon='whitearrow' />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='order-1 md:order-2'>
                    <img src={featured_phone} alt="featured_phone" className='max-w-[560px] w-full' />
                </div>
            </div>

        </div>
    )
}

export default Featured