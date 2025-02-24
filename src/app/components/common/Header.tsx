import React from 'react';
import { NAV_DATA } from '../../utils/helper';
import { useEffect, useState } from 'react';
import CustomButton from '../common/CustomButton';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const toggleMenu = () => {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = !isMenuOpen ? "" : "hidden";
            }
            else {
                document.body.style.overflow = "";
            }
        }
        toggleMenu();
        window.removeEventListener("resize", toggleMenu);
        return () => {
            window.removeEventListener("resize", toggleMenu);
            document.body.style.overflow = "";
        }
    }, [isMenuOpen])
    return (
        <div className="sm:py-7 py-4 flex items-center bg-black">
            <div className="container max-w-[1220px] mx-auto px-4">
                <div className="flex justify-between items-center lg:h-[100px] sm:h-20 rounded-[60px] border border-light-black lg:px-10 px-5 max-sm:py-2">
                    <Link href="/">
                        <Image src="/assets/images/webp/logo.webp"
                            alt="logo"
                            className="md:max-w-[150.2px] max-w-[109px] pointer-events-none" width={150.2} height={44.6} />
                    </Link>
                    <div className='lg:block hidden'>
                        <div className="flex gap-6 items-center">
                            {NAV_DATA.map((obj, index) => (
                                <a onClick={toggleMenu} key={index}
                                    className="font-normal hover:text-sky transition-all duration-700 text-base text-white/70"
                                    href={obj.id}> {obj.title} </a>))}
                        </div>
                    </div>
                    <div onClick={toggleMenu}
                        className='menuIcon relative max-sm:w-[30px] max-sm:h-5 max-lg:w-[38px] max-lg:h-7 z-20 max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-700 lg:hidden'
                    >
                        {isMenuOpen ? (
                            <>
                                <span className="h-[3px] absolute top-3 w-full bg-white transform rotate-45 transition duration-300"></span>
                                <span className="h-[3px] absolute top-3 w-full bg-white transform -rotate-45 transition duration-300"></span>
                            </>
                        ) : (
                            <>
                                <span className="h-[2px] w-full bg-white"></span>
                                <span className="h-[2px] w-full bg-white"></span>
                                <span className="h-[2px] w-full bg-white"></span>
                            </>
                        )}
                    </div>
                    <div className={`menuList ${isMenuOpen ? 'max-lg:right-0' : 'max-lg:right-[-100%]'} z-10 gap-8 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-black max-lg:flex-col max-lg:transition-all duration-700 flex items-center max-lg:min-h-screen`}>
                        <div className='lg:hidden block'>
                            <div className='flex-col flex gap-6 items-center'>
                                {NAV_DATA.map((obj, index) => (
                                    <a onClick={toggleMenu} key={index}
                                        className="font-normal hover:text-blue-500 transition-all duration-500 text-base leading-custom-lg text-white"
                                        href={obj.id} > {obj.title}
                                    </a>))}
                            </div>
                        </div>
                        <div className='flex max-md:flex-col gap-6'>
                            <CustomButton myClass={'py-[13px] md:px-[15px]'} text={'Sign Up'} />
                            <CustomButton myClass={'py-[13px] md:px-6 px-10'} text={'Login'} />
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;