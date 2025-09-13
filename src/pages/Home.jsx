import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import Services from "../components/sections/Services";
import Features from "../components/sections/Features";
import CTA from "../components/sections/CTA";
import { smoothScrollTo } from "../utils/smoothScroll";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation from other pages
    if (location.hash) {
      const targetId = location.hash.substring(1);
      // Small delay to ensure components are rendered
      setTimeout(() => {
        smoothScrollTo(targetId);
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <main className="u-min-height-screen">
        <Hero />
        <AboutUs />
        <Services />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
