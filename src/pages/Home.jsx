import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedCarousel from '../components/FeaturedCarouse';
import BlogGrid from '../components/BlogGrid';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import BackToTopButton from '../components/BackToTopButton';
import DailyThought from '../components/DailyThought';


const Home = () => {
  return (
    <>
<Navbar />
<DailyThought />
<HeroSection />
<FeaturedCarousel />
<BlogGrid />
<Contact />
<Footer />
<ScrollProgressBar />
<BackToTopButton />

    </>
  );
};

export default Home;