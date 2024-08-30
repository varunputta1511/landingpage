import React from 'react'
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


const App = () => {
  return (
   <>
  
        <Navbar />
        <div className="max-w-7xl mx-20 pt-20 px-6">
        <HeroSection/>
        </div>
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
        
   </>
  )
}

export default App