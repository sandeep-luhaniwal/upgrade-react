import { Link } from 'react-router-dom';
import footer_logo from '../../assets/images/svg/footer-logo.svg';
import app_store from '../../assets/images/webp/app-store.webp';
import google_play from '../../assets/images/webp/google-play.webp';
import { FOOTER_POLICY_LINKS, SOCIAL_MEDIA_LINK_LIST } from '../../utlis/helper';

import Icons from './Icons';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-[#F6F9F8]'>
            <div className='max-w-[1140px] mx-auto px-4 xl:px-0 py-10 md:py-16 lg:py-20 flex flex-col justify-center items-center'>
                <Link to="/">
                    <img src={footer_logo} alt="footer logo" className='w-[270px]' />
                </Link>

                <div className="flex gap-5 pt-4 ">
                    <Link to="/">
                        <img src={app_store} alt="app store" className='w-[150px] h-[50px]' />
                    </Link>
                    <Link to="/">
                        <img src={google_play} alt="google play" className='w-[150px] h-[50px]' />
                    </Link>
                </div>

                {/* <div className="flex justify-center flex-wrap gap-4 md:gap-8 lg:gap-12 py-8 lg:py-10">
                    {NAVIGATION_LINK_LIST.map((obj, i) => (
                        <Link
                            className='text-dark-green text-base leading-100 font-normal text-center duration-300 hover:text-black'
                            key={i}
                            to={obj.url}
                        >
                            {obj.title}
                        </Link>
                    ))}
                </div> */}

                <div className="flex justify-center gap-3 pt-8 lg:pt-10">
                    {SOCIAL_MEDIA_LINK_LIST.map((obj, i) => (
                        <Link
                            to={obj.url}
                            key={i}
                            className='bg-light-green duration-300 hover:bg-black rounded-full w-8 h-8 flex justify-center items-center'
                        >
                            <Icons icon={obj.icon} />
                        </Link>
                    ))}
                </div>
                <p className='text-black py-4 font-semibold text-sm leading-100'>Send Your Feedback :
                    <a
                        className="font-normal text-black duration-300 hover:text-green"
                        href="mailto:Support@Interactiveinvoice.com"
                    >
                        Support@Interactiveinvoice.com
                    </a>
                </p>

                <div className="flex justify-between w-full mt-5 pt-5 border-t-[0.2px] gap-4 items-center">
                    <p className='text-due-green text-base leading-150'>© {year} Design Monks. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {FOOTER_POLICY_LINKS.map((link, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <Link to={link.url} className="text-due-green leading-150 text-base hover:text-black duration-300">
                                    {link.title}
                                </Link>
                                {i !== FOOTER_POLICY_LINKS.length - 1 && (
                                    <span className="text-due-green">|</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
