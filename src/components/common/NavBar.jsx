import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import mainlogo from '../../assets/images/svg/main-logo.svg'
import { NAVIGATION_LINK_LIST } from '../../utlis/helper'
import Icons from './Icons'
import Hero from '../home/Hero'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const getLinkUrl = (url) => {
        if (url.startsWith('#')) {
            return '/' + url;
        }
        return url;
    }

    return (
        <div className={`bg-black-light overflow-clip bg_hero flex flex-col relative z-10 ${location.pathname === '/' ? "min-h-max" : "h-auto"}`}>
            <div>
                <div className='max-w-[1140px] mx-auto px-4 xl:px-0 py-[22px]'>
                    <div className="flex justify-between items-center relative z-10">
                        <Link to={"/"}>
                            <img src={mainlogo} alt="main logo" className='sm:w-[185px] w-[130px]' />
                        </Link>
                        <div className="md:flex hidden items-center gap-4 lg:gap-6">
                            {NAVIGATION_LINK_LIST.map((obj, i) => {
                                return (
                                    <Link
                                        className='text-gray-light text-base leading-100 font-normal duration-300 hover:text-orange'
                                        key={i}
                                        to={getLinkUrl(obj.url)}
                                    >
                                        {obj.title}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="flex items-center gap-2 sm:gap-6">
                            <a href='#download' className='text-gray-light font-semibold border border-white hover:bg-orange duration-300 hover:border-orange hover:text-white leading-100 py-2.5 md:py-3 px-2 sm:px-4 md:px-6 rounded-xl cursor-pointer'>
                                Download App
                            </a>
                            <div className='md:hidden' onClick={() => setIsOpen(true)}>
                                <Icons icon={"menuToggel"} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`min-h-screen md:hidden bg-black-light flex justify-center items-center flex-col gap-6 w-full fixed ${isOpen ? "top-0" : "-top-[110%]"} left-0 transition-all duration-300 ease-in-out z-20`}>
                    <div className='absolute top-4 right-4' onClick={() => setIsOpen(false)}>
                        <Icons icon={"corss"} />
                    </div>
                    {NAVIGATION_LINK_LIST.map((obj, i) => {
                        return (
                            <Link
                                className='text-gray-light text-base leading-100 font-normal duration-300 hover:text-yellow'
                                key={i}
                                to={getLinkUrl(obj.url)}
                                onClick={() => setIsOpen(false)}
                            >
                                {obj.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
            {location.pathname === '/' && (
                <div className='flex grow'>
                    <Hero />
                </div>
            )}
        </div>
    )
}

export default NavBar;
