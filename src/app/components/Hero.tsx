import React from 'react'
import Header from './common/Header'
import Image from 'next/image'
import CustomButton from './common/CustomButton'
import { HERO_CARDS_DATA } from '../utils/helper'
const Hero = () => {
    return (
        <div className='bg-black pb-[90px] -mt-1'>
            <Header />
            <div className="container max-w-[1220px]">
                <h1 className='text-white max-w-[718px] font-normal md:text-custom-6xl text-4xl md:leading-custom-6xl pt-12 mx-auto text-center'>
                    Unlock Knowledge with Our <span className='text-sky font-semibold'>Featured Articles</span>
                </h1>
                <p className='font-normal text-base leading-6 text-white/70 max-w-[764px] mx-auto text-center pt-4'>Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead.</p>
                <a className='flex text-white border border-white/70 rounded-[39px] py-[18px] max-w-[558px] mx-auto pl-[30px] mt-[30px] mb-[70px] gap-[10px]' href="#"><img src="/assets/images/svg/search-icon.svg" alt="icon"/>Search</a>
                <div className='flex flex-wrap gap-6 justify-center'>
                    {HERO_CARDS_DATA.map((article, index) => (
                        <div key={index} className='flex flex-col lg:max-w-[364px] sm:max-w-[310px] w-full border border-sky rounded-[10px] pb-[39px]'>
                            <Image src={article.image} alt={article.title} className='w-full xl:h-[237px] object-cover' width={362} height={237}/>
                            <div className='flex px-5 gap-4 -mt-4'>
                                <CustomButton text='Productivity' myClass='text-white bg-black py-[6px] md:!px-[30px] !px-4 font-normal text-base'/>
                                <CustomButton text={article.readTime} myClass='text-white bg-dark-gray py-[6px] border-white md:!px-[30px] !px-4 font-normal text-base'/>
                            </div>
                            <h4 className='font-semibold text-xl leading-6 text-white pl-5 pt-6 pb-[10px]'>{article.title}</h4>
                            <p className='max-w-[323px] text-base leading-6 font-normal text-white pl-5 pb-6'>{article.description}</p>
                            <div className='flex justify-between items-center px-5'>
                                <div className='flex items-center gap-2'>
                                    <Image src={article.authorImage} alt={article.authorName} className='size-[50px] object-cover' width={50} height={50} />
                                    <p className='text-white font-semibold text-base'>{article.authorName}</p>
                                </div>
                                <img src='/assets/images/svg/sky-arrow.svg' alt='arrow' className='size-6'/>
                            </div>
                        </div>
                    ))}
                </div>
                <CustomButton text='See All Blogs' myClass='py-[13px] px-6 flex mx-auto !text-black bg-sky mt-10'/>


            </div>
        </div>
    )
}

export default Hero