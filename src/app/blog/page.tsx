"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

const SearchParamsComponent = ({ onPageChange }: { onPageChange: (page: number) => void }) => {
    const searchParams = useSearchParams();
    const currentPage = searchParams.get("page") || "1";
    const [pageIndex, setPageIndex] = useState(Number(currentPage));

    useEffect(() => {
        setPageIndex(Number(currentPage));
    }, [currentPage]);

    return <Hero pageIndex={pageIndex} onPageChange={onPageChange} />;
};

const Page = () => {
    const router = useRouter();

    const handlePageChange = (newPageIndex: number) => {
        router.push(`/blog?page=${newPageIndex}`, { scroll: false });
    };

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <SearchParamsComponent onPageChange={handlePageChange} />
            </Suspense>
            <Articles />
            <Footer />
        </div>
    );
};

export default Page;
