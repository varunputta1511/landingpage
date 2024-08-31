import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Cart from './components/Cart'; // Import the CoursesPage component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div className="max-w-7xl mx-20 pt-20 px-6">
              <HeroSection/>
            </div>
            <FeatureSection />
            <Workflow />
            <Pricing />
            <Testimonials />
          </>
        } />
        <Route path="/courses" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes here if needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;