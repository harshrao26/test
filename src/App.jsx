import React from 'react'
import Nav from './components/Nav.jsx'
import HeroSection from './components/HeroSection.jsx'
import HeroSection2 from './components/HeroSection2.jsx'
import ClientMarquee from './components/ClientMarquee.jsx'
import Industries from './components/Industries.jsx'
import ProductGridSection from './components/ProductGridSection.jsx'
import Testi from './components/Testi.jsx'
import StatsSection from './components/StatsSection.jsx'
import AssuranceBanner from './components/AssuranceBanner.jsx'
import Footer from './components/Footer.jsx'
import Calc from './components/Calc.jsx'
import MarqueeTwo from './components/MarqueeTwo.jsx'
import HeroSection4 from './components/HeroSection4.jsx'
import StatsSection2 from './components/StatsSection2.jsx'

import HeroSection3 from './components/HeroSection3.jsx'
import PricingSection from './components/PricingSection.jsx'
import MarqueeThree from './components/MarqueeThree.jsx'












const App = () => {
  return (
    <div className=''>
      <Nav />
      {/* <HeroSection /> */}
      {/* <HeroSection2 /> */}


      {/* <HeroSection3 /> */}
      <HeroSection4 />
      <MarqueeTwo />
      <MarqueeThree />
      {/* <Calc /> */}
      <ProductGridSection />

      <StatsSection />
      <StatsSection2 />
      {/* <Industries /> */}
      <AssuranceBanner />
      <ClientMarquee />
      <PricingSection />

      <Testi />
      <Footer />
    </div>
  )
}

export default App
