"use client";
import React from "react";
import Hero from "@/components/Hero";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const Page = () => {
   
    return (
        <div>
            <Suspense>
                <Hero/>
                <Articles />
                <Footer />
            </Suspense>
        </div>
    );
};

export default Page;