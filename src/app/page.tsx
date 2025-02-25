"use client"
import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Articles from "@/components/Articles";
const Page = () => {
  return (
    <div>
      <Hero pageIndex={0} onPageChange={() => { }} />
      <Articles />
      <Footer />
    </div>
  );
};

export default Page;