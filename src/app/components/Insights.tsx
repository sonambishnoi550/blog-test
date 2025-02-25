import React from 'react'
import Image from 'next/image'
const Insights = () => {
  return (
    <div className='bg-black py-[90px]'>
      <div className="container">
        <div className="md:flex lg:justify-between gap-6 relative">
          <div className='flex-1'>
            <h2 className='text-white lg:text-5xl text-4xl lg:leading-custom-5xl font-normal max-w-[450px]'>What are AI-Driven
              <span className='text-sky font-semibold'> Market Insights?</span></h2>
            <p className='lg:text-base text-sm leading-6 font-normal text-white/70 max-w-[655px] pt-4 pb-[30px]'>AI-driven market insights harness the power of artificial intelligence to analyze vast amounts of market data in real time, providing actionable information that can help traders and investors make informed decisions.</p>
            <h5 className='text-xl font-semibold leading-custom-md text-white'>Real-Time Analytics</h5>
            <p className='lg:text-base text-sm leading-6 font-normal text-white/70 max-w-[655px] pt-4 pb-5'>AI can process and analyze data from various sources, such as financial statements, price movements, market sentiment, and even social media trends, providing instant feedback and analysis.</p>
            <h5 className='text-xl font-semibold leading-custom-md text-white'>News Updates</h5>
            <p className='lg:text-base text-sm leading-6 font-normal text-white/70 max-w-[655px] pt-4 pb-5'>AI tools can sift through the noise of constant news flows and pinpoint stories that are most relevant to your investments. Whether it’s economic reports, geopolitical events, or corporate announcements, AI can identify which developments are likely to move markets.</p>
            <h5 className='text-xl font-semibold leading-custom-md text-white'>Expert Market Research</h5>
            <p className='lg:text-base text-sm leading-6 font-normal text-white/70 max-w-[655px] pt-4 pb-[50px]'>Advanced algorithms can synthesize historical data with current market trends to forecast potential outcomes, offering the insights of seasoned market experts at your fingertips.</p>
            <Image src="/assets/images/webp/market-insight.webp"
              alt="market-insight"
              className="max-w-[635px] w-full object-cover pointer-events-none pb-[190px]" width={635} height={550} />
            <h2 className='text-white lg:text-5xl text-4xl lg:leading-custom-5xl font-normal max-w-[630px] pb-[30px]'>How AI-Driven Market Insights Are
              <span className='text-sky font-semibold'> Changing The Game</span></h2>
            <h5 className='text-xl font-semibold leading-custom-md text-white'>1. Faster Decision-Making</h5>
            <p className='lg:text-base text-sm leading-6 font-normal text-white/70 max-w-[655px] pt-4 pb-5'>In the world of trading and investing, speed is critical. AI systems can analyze millions of data points in seconds, giving you an edge in making quick decisions. For example, when news breaks about a company’s earnings report, AI systems can immediately assess the market’s reaction and provide insights on whether it's a buying or selling opportunity.</p>
            <h5 className='text-xl font-semibold leading-custom-md text-white'>2. Enhanced Accuracy and Predictive Power</h5>
            <p className='lg:text-base text-sm leading-6 font-normal text-white/70 max-w-[655px] pt-4 pb-5'>Human traders and investors are often prone to cognitive biases, such as overconfidence or emotional decision-making. AI removes these limitations by relying solely on data and algorithms. With machine learning, AI can improve over time, identifying patterns and trends that humans may overlook. This leads to more accurate predictions about market movements, asset prices, and investment risks.</p>
            <h5 className='text-xl font-semibold leading-custom-md text-white'>3. Customized Insights for Individual Strategies</h5>
            <p className='lg:text-base text-sm leading-6 font-normal text-white/70 max-w-[655px] pt-4 pb-[50px]'>AI-driven analytics can tailor insights to your specific trading or investment strategy. Whether you’re a day trader looking for short-term opportunities or a long-term investor analyzing market fundamentals, AI can filter out irrelevant information and deliver insights that align with your goals. This level of personalization was previously unavailable in traditional market research.</p>
            <Image src="/assets/images/webp/ai-driven.webp"
              alt="ai-driven"
              className="max-w-[635px] w-full object-cover pointer-events-none" width={635} height={550} />
          </div>
          <div className='border border-sky rounded-3xl py-[30px] max-w-[364px] h-[525px] sticky top-10 self-start bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(/assets/images/webp/footer-bg.webp)` }}>
            <div className='flex items-center gap-[10px] pl-5 pb-6'>
              <Image src="/assets/images/webp/darrell.webp"
                alt="darrell"
                className="size-[50px] object-cover pointer-events-none" width={50} height={50} />
              <p className='text-white font-semibold text-base leading-6'>Darrell Steward</p>
            </div>
            <h5 className='text-white text-base font-semibold leading-5 px-5'>What are AI-Driven Market Insights?</h5>
            <p className='font-normal lg:text-base text-sm leading-6 px-5 lg:py-4 py-2 text-white/70'>Real-Time Analytics</p>
            <p className='font-normal lg:text-base text-sm leading-6 px-5 lg:pb-4 pb-2 text-white/70'>News Updates</p>
            <p className='font-normal lg:text-base text-sm leading-6 px-5 lg:pb-4 pb-2 text-white/70'>Expert Market Research</p>
            <div className='border border-white/40'></div>
            <h5 className='text-white text-base font-semibold leading-5 px-5 pt-5 max-w-[324px]'>How AI-Driven Market insights are changing the Game</h5>
            <p className='font-normal lg:text-base text-sm lg:leading-6 px-5 py-4 text-white/70'>Faster Decision-Making</p>
            <p className='font-normal lg:text-base text-sm lg:leading-6 px-5 pb-4 text-white/70'>Enhanced Accuracy and Predictive Power</p>
            <p className='font-normal lg:text-base text-sm lg:leading-6 px-5 text-white/70 max-w-[324px]'>Customized Insights for Individual Strategies</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights
