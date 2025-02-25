"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Hero from "./components/Hero";
import Insights from "./components/Insights"
import Footer from "./components/Footer";
import Articles from "./components/Related";

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
      <Hero pageIndex={pageIndex} onPageChange={handlePageChange} />
      <Articles/>
      <Insights />
      <Footer/>
    </div>
  );
};

export default Page;