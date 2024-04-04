import React from 'react';
import { Footer, Features, VideoSection, Header, HeroSection, Testimonials } from './components'

const DemoComponent = () => {
  return (
    <div className=" flex flex-col justify-start items-center">
      <Header />
      <HeroSection />
      <VideoSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default DemoComponent;
