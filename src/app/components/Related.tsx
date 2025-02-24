import React from 'react';
import Image from 'next/image';
import CustomButton from './common/CustomButton';
import { ARTICLES_DATA } from '../utils/helper'

const Articles = () => {
    return (
        <div className='bg-black -mt-1 pt-[90px] pb-[180px]'>
            <div className="container max-w-[1220px] mx-auto">
                <h2 className='text-white font-normal md:text-5xl text-4xl leading-custom-5xl text-center'>Related <span className='text-sky font-semibold'> Articles</span></h2>
                <div className="flex flex-wrap pt-[70px] gap-6">
                    {ARTICLES_DATA.map((article, index) => (
                        <div key={index} className='border border-sky rounded-[10px] pb-[39px] w-full max-w-[340px] lg:max-w-[364px]'>
                            <Image src={article.image} alt={article.title} className="max-w-[362px] w-full object-cover pointer-events-none" width={362} height={237} />
                            <div className="flex px-5 gap-4 -mt-4">
                                <CustomButton text={article.category} myClass='text-white bg-black py-[6px] md:!px-[30px] !px-4 font-normal text-base leading-custom-sm' />
                                <CustomButton text={article.readTime} myClass='text-white bg-dark-gray py-[6px] border-white md:!px-[30px] !px-4 font-normal text-base leading-custom-sm' />
                            </div>
                            <h4 className='font-semibold text-xl leading-6 text-white pl-5 pt-6 pb-[10px]'>{article.title}</h4>
                            <p className='max-w-[323px] text-base leading-6 font-normal text-white/75 pl-5 pb-6'>{article.description}</p>
                            <div className='flex justify-between px-5'>
                                <div className='flex items-center gap-[10px]'>
                                    <Image src={article.authorImage} alt={article.authorName} className="size-[50px] object-cover pointer-events-none" width={50} height={50} />
                                    <p className='text-white font-semibold text-base leading-6'>{article.authorName}</p>
                                </div>
                                <img src="/assets/images/svg/sky-arrow.svg" alt="arrow" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Articles;