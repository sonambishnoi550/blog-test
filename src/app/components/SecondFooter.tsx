import React from 'react'
import Image from 'next/image'
const SecondFooter = () => {
    const year = new Date().getFullYear()
    return (
        <div className='bg-cover bg-no-repeat bg-black pt-[60px]' style={{ backgroundImage: `url(/assets/images/webp/footer-bg.webp)` }}>
            <div className="container max-w-[1220px] mx-auto">
                <Image src="/assets/images/webp/logo.webp" alt="real-time"
                    className="max-w-[150px] w-full object-cover pointer-events-none mb-[30px]" width={150} height={44} />
                <div className="flex flex-wrap gap-6 pb-[30px]">
                    <p className='text-base text-white font-semibold leading-6'>Home</p>
                    <p className='text-base text-white font-semibold leading-6'>About Us</p>
                    <p className='text-base text-white font-semibold leading-6'>How It Works</p>
                    <p className='text-base text-white font-semibold leading-6'>Testimonials</p>
                    <p className='text-base text-white font-semibold leading-6'>FAQs</p>
                    <p className='text-base text-white font-semibold leading-6'>Contact Us</p>
                </div>
                <h4 className='text-base text-white font-semibold leading-6 pb-[10px]'>Trade Responsibility Disclaimer</h4>
                <p className='md:text-base text-sm text-white/70 font-semibold leading-6 pb-[30px] max-w-[1140px]'>Trading Forex and CFDs involves a high level of risk and may not be suitable for all investors. Leverage can work both for and against you, and it’s possible to lose more than your initial investment. Please ensure that you fully understand the risks involved, taking into account your financial objectives and risk appetite. Seek independent financial advice if necessary before starting trading. ArrowTrade does not offer financial advice.</p>
                <h4 className='text-base text-white font-semibold leading-6 pb-[10px]'>Disclaimer</h4>
                <p className='md:text-base text-sm text-white/70 font-semibold leading-6 pb-[30px] max-w-[1140px]'>Information on this site is not directed at residents of any country or jurisdiction where distribution or use would be contrary to local law or regulation. Please check with your local regulations before proceeding.</p>
                <h4 className='text-base text-white font-semibold leading-6 pb-[10px]'>Regulatory Information</h4>
                <p className='md:text-base text-sm text-white/70 font-semibold leading-6 pb-[10px] max-w-[1140px]'>Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).</p>
                <p className='md:text-base text-sm text-white/70 font-semibold leading-6 pb-[50px] max-w-[1140px]'>Arrow Trade S.A.R.L (Lebanon) is the sole entity authorized to operate the MetaTrader platform under our license. No other companies are involved in the operation or management of our MetaTrader license.</p>
                <div className='flex gap-6 mb-20'>
                    <a href="https://www.facebook.com/"><img src="/assets/images/svg/facebook.svg" alt="facebook" /></a>
                    <a href="https://www.instagram.com/"><img src="/assets/images/svg/instagram.svg" alt="instagram" /></a>
                    <a href="https://www.youtube.com/"><img src="/assets/images/svg/youtube.svg" alt="youtube" /></a>
                    <a href=""><img src="/assets/images/svg/music.svg" alt="music" /></a>
                    <a href="https://x.com/?lang=en"><img src="/assets/images/svg/twitter.svg" alt="twitter" /></a>
                    <a href="https://in.linkedin.com/"><img src="/assets/images/svg/linkedin.svg" alt="linkedin" /></a>
                </div>
            </div>
            <div className='w-full border border-light-black'></div>
            <p className=" mt-1 md:text-base text-sm font-normal leading-6 text-center text-white pb-4 px-4">
                Copyright © {year} Implenia. Alle Rechte vorbehalten.
            </p>
        </div>
    )
}

export default SecondFooter