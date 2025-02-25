"use client";
import React, { useEffect, useState } from "react";
import { HEADER_LIST, MARQUEE_DATA } from "../../utils/helper";
import Link from "next/link"
import Image from "next/image";
import Marquee from "react-fast-marquee";
import CustomButton from "./CustomButton";
interface HeaderItem {
    title: string;
    link: string;
}
interface MarqueeItem {
    countryCode: string,
    countryPin: string,
    id: string,
}

const NavBar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [Active, setActive] = useState<number | null>(4);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    function clickHandler(i: number) {
        setActive(i);
    }
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <>
            <div className="bg-sky flex md:py-[18px] py-2">
                <Marquee>
                    {MARQUEE_DATA.map((obj: MarqueeItem, i: number) => (
                        <div key={i} className="flex items-center gap-[6px] mr-[60px]">
                            <p className="font-normal text-base">{obj.countryCode}</p>
                            <div className="flex items-center gap-2 bg-gray rounded-full py-1 pl-[11px] pr-4">
                                <p className="font-normal text-base text-white">{obj.countryPin}</p>
                                <div className={` rounded-full size-[10px] ${Number(obj.id) === 3 || Number(obj.id) === 6 ? "bg-green" : "bg-red"
                                    }`}></div>
                            </div>
                        </div>
                    ))}
                </Marquee>

            </div>
            <div id="navbar" className=" z-40 fixed mt-4  left-0 w-full shadow-lg">
                <div className="px-4 container max-w-[1220px] mx-auto">
                    <div className={` pl-20 pr-10 bg-white/10 ${open ? "" : "backdrop-blur-lg"
                        } rounded-full border border-white/20 xl:max-w-[1220px] mx-auto  max-xl:px-[16px] flex items-center justify-between md:py-[19.5px] py-2`}>
                        <Link href="/">
                            <Image
                                width={150}
                                height={44}
                                src="/assets/images/webp/logo.webp"
                                alt="logo"
                                className=" max-xl:w-[150px] max-xl:h-[44px] max-lg:w-[120px]  max-sm:w-[100px] pointer-events-none"
                            />
                        </Link>
                        <ul className="flex items-center  gap-[38px] max-lg:hidden">
                            {HEADER_LIST.map((item: HeaderItem, i: number) => (
                                <li key={i}>
                                    <Link onClick={() => clickHandler(i)}
                                        href={item.link}
                                        className={`font-normal  text-base hover:text-sky transition-all duration-300 ${Active === i ? "text-sky" : "text-white/70"
                                            } `}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className='flex max-md:flex-col gap-6 max-lg:hidden'>
                            <CustomButton myClass={'py-[13px] md:px-[15px]'} text={'Sign Up'} />
                            <CustomButton myClass={'py-[13px] md:px-6 px-10'} text={'Login'} />
                        </div>  
                        <div
                            className="lg:hidden z-50 cursor-pointer"
                            onClick={() => setOpen(!open)}
                        >
                            <button className="overflow-hidden relative z-50 lg:hidden size-[30px] h-5  flex flex-col justify-between items-center">
                                <span
                                    className={`bg-white/70 rounded-full w-[39px] h-1 block transition-all duration-300 ${open ? "translate-x-10" : ""}`}
                                ></span>
                                <span
                                    className={`bg-white/70 rounded-full after:rounded-lg  w-[39px] h-1 block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90 after:!bg-white/70" : ""
                                        }`}
                                ></span>
                                <span
                                    className={`bg-white/70 rounded-full  w-[39px] h-1 block transition-all duration-300 ${open ? "-translate-x-10" : ""}`}
                                ></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`w-full h-full bg-black transition-all duration-500 left-0 lg:-top-full z-40 fixed flex gap-5 flex-col justify-center items-center ${open ? "top-0 left-0" : "-top-full"
                        }`}
                >
                    {HEADER_LIST.map((item: HeaderItem, i: number) => (
                        <a
                            key={i}
                            onClick={() => setOpen(false)}
                            href={item.link}
                            className="font-bold font-source text-base text-white/70"
                        >
                            {item.title}
                        </a>
                    ))}
                    <button onClick={() => setOpen(false)} className="text-base font-semibold text-sky py-[10px] px-4 h-[53px] border border-sky rounded-full hover:text-black hover:bg-sky transition-all duration-500 ease-linear">
                        Sign Up
                    </button>
                    <button onClick={() => setOpen(false)} className="text-base font-semibold hover:text-sky text-black bg-sky hover:bg-transparent py-[10px] h-[53px] px-6 border border-sky rounded-full transition-all duration-500 ease-linear">
                        Login
                    </button>
      
                    <CustomButton custonOnClick={() => setOpen(false)} myClass={'py-[13px] md:px-[15px]'} text={'Sign Up'} />
                    <CustomButton custonOnClick={() => setOpen(false)} myClass={'py-[13px] md:px-6 px-10'} text={'Login'} />  
                </div>

            </div>
        </>
    );
};

export default NavBar;