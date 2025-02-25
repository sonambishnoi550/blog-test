"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = searchParams.get("page") || "1";
    const [pageIndex, setPageIndex] = useState(Number(currentPage));

    useEffect(() => {
        setPageIndex(Number(currentPage));
    }, [currentPage]);

    const handlePageChange = (newPageIndex: number) => {
        router.push(`/blog?page=${newPageIndex}`, { scroll: false });
        setPageIndex(newPageIndex);
    };

    return (
        <div>
            <Suspense>
                <Hero pageIndex={pageIndex} onPageChange={handlePageChange} />
            </Suspense>
            <Articles />
            <Footer />
        </div>
    );
};

export default Page;