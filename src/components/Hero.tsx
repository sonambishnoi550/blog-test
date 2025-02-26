"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Header from "./common/Header";
import Image from "next/image";
import { BLOGS_CARD } from "../utils/helper";
import CustomButton from "./common/CustomButton";


interface HeroProps {
    pageIndex: number;
    onPageChange: (newPageIndex: number) => void;
}

const Hero: React.FC<HeroProps> = ({ pageIndex, onPageChange }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pageQuery = Number(searchParams.get("page")) || 1;

    const [blogs, setBlogs] = useState(BLOGS_CARD);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const storedBlogs = localStorage.getItem("blogsData");
        if (storedBlogs) {
            setBlogs(JSON.parse(storedBlogs));
        } else {
            localStorage.setItem("blogsData", JSON.stringify(BLOGS_CARD));
        }
    }, []);

    const handlePageChange = (newIndex: number) => {
        router.push(`/blog?page=${newIndex}`, { scroll: false });

        const newBlogs = [
            {
                id: blogs.length + 1,
                title: `Real-Time Market Insights`,
                category: "Productivity",
                readTime: 5,
                description: "Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions.",
                author: "Jerome Bell",
                authorImage: "/assets/images/webp/jerome.webp",
                date: "31 Jan 2025",
                image: "/assets/images/webp/real-time.webp",
                isFeatured: true,
            },
            {
                id: blogs.length + 2,
                title: `Advanced Trading Platform ${blogs.length + 2}`,
                category: "Productivity",
                readTime: 5,
                description: "Experience lightning-fast execution, customizable charts, and an intuitive interface designed for traders of all levels.",
                author: "Eleanor Pena",
                authorImage: "/assets/images/webp/eleanor.webp",
                image: "/assets/images/webp/trading.webp",
                isFeatured: true,
                date: "31 Jan 2025",
            },
            {
                id: blogs.length + 3,
                title: `Mastering The Markets ${blogs.length + 3}`,
                category: "Productivity",
                readTime: 5,
                description: "Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.",
                author: "Wade Warren",
                authorImage: "/assets/images/webp/wade.webp",
                image: "/assets/images/webp/mastering.webp",
                isFeatured: true,
                date: "20 Dec 2024",
            },
        ];

        const updatedBlogs = [...blogs, ...newBlogs];
        setBlogs(updatedBlogs);

        localStorage.setItem("blogsData", JSON.stringify(updatedBlogs));
        localStorage.setItem("pageIndex", newIndex.toString());
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCardClick = (blogTitle: string) => {
        const formattedSlug = blogTitle
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-");

        router.push(`/blog/${formattedSlug}`);
    };
    return (
        <div id="home" className="bg-center bg-cover bg-no-repeat relative overflow-hidden">
            <Image className="absolute top-[0%] left-0 max-w-[237px]" src="/assets/images/webp/hero-top-image.webp" alt="top-image" width={237} height={237} />
            <Image className="absolute right-0 bottom-[10%] max-w-[237px]" src="/assets/images/webp/hero-bottom-image.webp" alt="bottom-image" width={237} height={237} />
            <Header />
            <div className="container max-w-[1220px] mx-auto px-4 relative z-20">
                <div className="flex flex-col xl:pt-[164px] pt-[140px]">
                    <h1 className="md:mt-[15px] lg:text-custom-6xl md:text-6xl text-4xl font-normal text-white lg:max-w-[700px] max-w-[718px] mx-auto text-center max-lg:leading-customMd">
                        Unlock Knowledge with Our <span className="text-sky font-bold">Featured Articles</span>
                    </h1>
                    <p className="font-normal md:text-base text-xs text-white/70 pt-4 leading-custom-lg max-w-[674px] mx-auto text-center">
                        Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead.
                    </p>
                    <form className="pt-[30px]">
                        <div className="flex gap-[10px] border border-white/20 py-[17px] pl-[30px] items-center max-w-[558px] mx-auto rounded-full">
                            <Image src="/assets/images/svg/search-icon.svg" height={18} width={18} alt="search-icon" className="stroke-white/70 inset-0" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search"
                                className="bg-transparent text-white/70 text-base font-normal leading-custom-lg placeholder:text-white/70 outline-none"
                            />
                        </div>
                    </form>
                </div>

                <div className="pt-[70px]">
                    {filteredBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto justify-center">
                            {filteredBlogs.map((blog) => (
                                <div onClick={() => handleCardClick(blog.title)} key={blog.id} className="bg-gradient-to-b cursor-pointer from-sky/0 to-sky/100 p-[1px] rounded-[10px] max-w-[364px] w-full sm:w-[80%] md:w-auto mx-auto">
                                    <div className="bg-black/90 text-white relative rounded-[10px] overflow-hidden">
                                        <p className="text-white text-base font-semibold leading-custom-lg absolute top-4 right-4">{blog.date}</p>
                                        <Image src={blog.image} alt={blog.title} width={364} height={237} className="w-full h-[237px] object-cover rounded-md mb-4" />
                                        <div className="px-3 pb-[39px]">
                                            <div className="flex gap-2 absolute top-[45%]">
                                                <span className="border-sky border rounded-full bg-black leading-custom-lg hover:border-white text-xs px-[42px] h-[37px] py-[3px] flex items-center">{blog.category}</span>
                                                <span className="text-white/70 bg-light-black font-normal leading-custom-lg text-sm border-white border h-[37px] flex items-center rounded-full px-[41px] py-[9.5px]">{blog.readTime} min read</span>
                                            </div>
                                            <h3 className="text-xl font-semibold mt-12 mb-[10px]">{blog.title}</h3>
                                            <p className="text-white/70 font-normal leading-custom-lg text-base">{blog.description}</p>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-[10px] mt-6">
                                                    <Image src={blog.authorImage} alt={blog.author} width={50} height={50} className="size-[50px] rounded-full" />
                                                    <p className="text-white text-base leading-custom-lg font-semibold">{blog.author}</p>
                                                </div>
                                                <Image src="/assets/images/svg/sky-arrow.svg" alt="right-arrow" width={20} height={18} className="mt-5 hover:translate-x-1 transition-all duration-500 ease-linear" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-white/70 text-xl mt-6">No blogs data found</p>
                    )}
                    <CustomButton custonOnClick={() => handlePageChange(pageIndex + 1)} text="See All Blogs" myClass="mt-10 bg-sky text-black text-base !text-black font-semibold hover:!text-sky px-[26.7px] py-[14.6px] flex mx-auto rounded-full hover:bg-transparent border border-sky transition-all duration-500"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;