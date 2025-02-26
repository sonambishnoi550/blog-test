"use client"
import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Articles from "@/components/Articles";
import { Suspense } from "react";
const Page = () => {
  return (
    <div>
      <Suspense>
        <Hero pageIndex={0} onPageChange={() => { }} />
        <Articles />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Page;