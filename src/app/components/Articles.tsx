import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BLOGS_CARD } from "../utils/helper";
import Image from "next/image";

const LatestArticle = () => {
    const featuredBlogs = BLOGS_CARD.filter((blog) => blog.isFeatured);

    return (
        <div className="relative container max-xl:px-4 max-w-[1180px] mx-auto lg:py-[180px] md:py-24 py-16">
            <h1 className="md:mt-[15px] lg:text-5xl md:text-4xl text-3xl font-normal text-white text-center leading-customMd md:pb-[70px] pb-10">
                Latest <span className="text-sky font-bold">Article</span>
            </h1>

            {featuredBlogs.length > 0 ? (
                <Swiper
                    id="slider"
                    spaceBetween={20}
                    slidesPerView={1.2}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    breakpoints={{
                        300: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Navigation, Autoplay]}
                >
                    {featuredBlogs.map((blog) => (
                        <SwiperSlide key={blog.id} className="!max-w-[366px] !w-full">
                            <div className="bg-gradient-to-b from-sky/0 to-sky/100 p-[1px] rounded-[10px] max-w-[364px] w-full sm:w-[80%] md:w-auto mx-auto">
                                <div className="bg-black/90 text-white relative rounded-[10px]">
                                    <p className="text-white text-base font-semibold leading-customXmd absolute top-4 right-4">{blog.date}</p>
                                    <Image src={blog.image} alt={blog.title} width={364} height={237} className="w-full h-[237px] object-cover rounded-md mb-4" />
                                    <div className="px-3 pb-[39px]">
                                        <div className="flex gap-2 mb-2">
                                            <span className="border-sky border rounded-full leading-customXmd hover:border-white text-xs px-[42px] h-[37px] py-[3px] flex items-center">{blog.category}</span>
                                            <span className="text-white/70 bg-light-black font-normal leading-customXmd text-sm border-white border h-[37px] flex items-center rounded-full px-[41px] py-[9.5px] whitespace-nowrap">{blog.readTime} min read</span>
                                        </div>
                                        <h3 className="text-xl font-semibold">{blog.title}</h3>
                                        <p className="text-white/70 mb-3 font-normal leading-customXmd text-base">{blog.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2 mt-6">
                                                <Image src={blog.authorImage} alt={blog.author} width={50} height={50} className="size-[50px] rounded-full" />
                                                <p className="text-white text-base leading-customXmd font-semibold">{blog.author}</p>
                                            </div>
                                            <Image src="/assets/images/svg/sky-arrow.svg" alt="sky-arrow" width={20} height={18} className="mt-5 hover:translate-x-1 transition-all duration-500 ease-linear" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p className="text-center text-white/70 text-xl mt-6">No data found</p>
            )}

            {featuredBlogs.length > 0 && (
                <div className="hidden md:flex justify-between absolute top-1/2 left-[-50px] right-[-50px] transform -translate-y-1/2">
                    <button className="swiper-button-prev size-[60px] bg-sky text-sky py-[17px] px-[15px] rounded-full transition-all duration-300 ease-in-out border border-sky group">
                        <Image src="/assets/images/svg/slider-left-arrow.svg" alt="slider-arrow" width={30} height={27} className="w-[30px] filter group-hover:invert invert-0 brightness-0" />
                    </button>
                    <button className="swiper-button-next size-[60px] bg-sky text-sky p-3 rounded-full transition-all duration-300 ease-in-out border border-sky group">
                        <Image src="/assets/images/svg/slider-right-arrow.svg" alt="slider-right-arrow" height={27} width={30} className="w-[30px] filter group-hover:invert invert-0 brightness-0" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default LatestArticle;