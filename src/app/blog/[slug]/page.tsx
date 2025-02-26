"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Header from "@/components/common/Header"
import Footer from "@/components/Footer";
import Articles from "@/components/Articles";
import { BLOGS_CARD } from "../../../utils/helper";
import Image from "next/image";
import Insights from "@/components/Insights"

const formatTitle = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

export default function BlogDetail() {
    const { slug } = useParams();
    const blog = BLOGS_CARD.find((b) => formatTitle(b.title) === slug);
    if (!blog) return notFound();

    return (
        <div>
            <Header />
            <section className="bg-black text-white md:pl-4 max-md:px-4 max-w-[1920] mx-auto">
                <div className="2xl:max-w-[1400px] mx-auto flex max-md:flex-wrap  items-center relative lg:justify-between justify-center gap-8">
                    <div className="max-w-[510px] lg:ml-auto mx-auto  pt-[100px] max-md:pr-4">
                        <h2 className="lg:text-customMd md:text-5xl text-4xl font-bold pb-4 lg:max-w-[480px] leading-customMd">
                            {(() => {
                                const words = blog.title.split(" ");
                                const lastTwoWords = words.slice(-2).join(" ");
                                const remainingWords = words.slice(0, -2).join(" ");

                                return (
                                    <>
                                        {remainingWords}{" "}
                                        <span className="text-sky">{lastTwoWords}</span>
                                    </>
                                );
                            })()}
                        </h2>
                        <p className="mt-3 text-white/70 text-lg">{blog.description}</p>

                        <div className="flex flex-wrap items-center mt-6 space-x-4">
                            <span className="border border-sky bg-simple-black text-white rounded-full text-sm px-6 py-2 flex items-center hover:border-white transition">
                                {blog.category}
                            </span>
                            <span className="border border-white bg-light-black text-white/70 text-sm whitespace-nowrap rounded-full px-6 py-2 flex items-center">
                                {blog.readTime} min read
                            </span>
                            <span className="text-white text-sm max-sm:pt-5">{blog.date}</span>
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={720}
                            height={570}
                            className=" shadow-lg xl:max-w-[720px] max-md:max-w-[720px] w-full max-lg:mx-auto md:h-[570px] max-md:h-[250px] object-cover xl:right-0 2xl:right-auto"
                        />
                    </div>
                </div>
            </section>
            <Insights />
            <Articles />
            <Footer />
        </div>
    );
}