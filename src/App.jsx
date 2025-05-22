import React from "react";
import Nav from "./components/Nav.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HeroSection2 from "./components/HeroSection2.jsx";
import ClientMarquee from "./components/ClientMarquee.jsx";
import Industries from "./components/Industries.jsx";
import ProductGridSection from "./components/ProductGridSection.jsx";
import Testi from "./components/Testi.jsx";
import StatsSection from "./components/StatsSection.jsx";
import AssuranceBanner from "./components/AssuranceBanner.jsx";
import Footer from "./components/Footer.jsx";
import Calc from "./components/Calc.jsx";
import MarqueeTwo from "./components/MarqueeTwo.jsx";
import HeroSection4 from "./components/HeroSection4.jsx";
import StatsSection2 from "./components/StatsSection2.jsx";
import Graphs from "./components/Graphs.jsx";

import HeroSection3 from "./components/HeroSection3.jsx";
import PricingSection from "./components/PricingSection.jsx";
import MarqueeThree from "./components/MarqueeThree.jsx";
import ServicesLtoR from "./components/ServicesLtoR.jsx";
import TestimonialSlider from "./components/TestimonialSlider.jsx";
import Carousel3D from "./components/Carousel3D.jsx";
import BlogTripleCarousel from "./components/BlogTripleCarousel.jsx";
import NewsletterSection from "./components/NewsletterSection.jsx";

const App = () => {
  return (
    <div className="">
      <div className="fixed right-0 top-1/2 flex rounded text-center bg-[#16C47F] py-4 px-2 z-20 text-sm text-white">
        Write <br /> A <br /> Review
      </div>
      <Nav />
      {/* <HeroSection /> */}
      {/* <HeroSection2 /> */}

      {/* <HeroSection3 /> */}
      <HeroSection4 />
      {/* <MarqueeTwo /> */}
      {/* <MarqueeThree /> */}
      {/* <Calc /> */}
      <ServicesLtoR />
      <Graphs />
      <ClientMarquee />

      <ProductGridSection />

      <StatsSection2 />
      <TestimonialSlider />
      <Carousel3D />
      {/* <Industries /> */}
      <AssuranceBanner />
      <PricingSection />
      <BlogTripleCarousel />

      {/* <Testi /> */}
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default App;
