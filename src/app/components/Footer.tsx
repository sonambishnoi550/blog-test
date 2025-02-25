import React from 'react';
import Image from 'next/image';
import { menuItems,socialLinks } from '../utils/helper';
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='bg-cover bg-no-repeat bg-black pt-[60px]' style={{ backgroundImage: `url(/assets/images/webp/footer-bg.webp)` }}>
            <div className="container max-w-[1220px] mx-auto">
                <Image src="/assets/images/webp/logo.webp" alt="real-time" width={150} height={44} className="max-w-[150px] w-full object-cover pointer-events-none mb-[30px]" />
                <div className="flex flex-wrap gap-6 pb-[30px]">
                    {menuItems.map((item, index) => (
                        <p key={index} className='text-base text-white font-semibold leading-6'>{item}</p>
                    ))}
                </div>

                {[{
                    title: "Trade Responsibility Disclaimer",
                    content: "Trading Forex and CFDs involves a high level of risk and may not be suitable for all investors. Leverage can work both for and against you, and it’s possible to lose more than your initial investment. Please ensure that you fully understand the risks involved, taking into account your financial objectives and risk appetite. Seek independent financial advice if necessary before starting trading. ArrowTrade does not offer financial advice."
                }, {
                    title: "Disclaimer",
                    content: "Information on this site is not directed at residents of any country or jurisdiction where distribution or use would be contrary to local law or regulation. Please check with your local regulations before proceeding."
                }, {
                    title: "Regulatory Information",
                    content: "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon)."
                }, {
                    title: "",
                    content: "Arrow Trade S.A.R.L (Lebanon) is the sole entity authorized to operate the MetaTrader platform under our license. No other companies are involved in the operation or management of our MetaTrader license."
                }].map((section, index) => (
                    <div key={index} className='pb-[30px] max-w-[1140px]'>
                        {section.title && <h4 className='text-base text-white font-semibold leading-6 pb-[10px]'>{section.title}</h4>}
                        <p className='md:text-base text-sm text-white/70 font-semibold leading-6'>{section.content}</p>
                    </div>
                ))}

                <div className='flex gap-6 mb-20'>
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href}>
                            <img className='hover:scale-125 transition-all duration-700' src={link.src} alt={link.alt} />
                        </a>
                    ))}
                </div>
            </div>
            <div className='w-full border border-light-black'></div>
            <p className="mt-1 md:text-base text-sm font-normal leading-6 text-center text-white pb-4 px-4">
                Copyright © {year} Implenia. Alle Rechte vorbehalten.
            </p>
        </div>
    );
};

export default Footer;
