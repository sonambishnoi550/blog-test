"use client"
import React from 'react'
import Hero from './components/Hero'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Insights from './components/Insights'
import Related from './components/Related'
import SecondFooter from './components/SecondFooter'
const page = () => {
  return (
    <>
      <Hero />
      <Articles />
      <Footer />
      <Insights />
      <Related />
     <SecondFooter/>
    </>
  )
}

export default page