import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroBanner1 from "../assets/hero-banner-1.jpg";
import heroBanner2 from "../assets/hero-banner-2.jpg";
import heroBanner3 from "../assets/hero-banner-3.jpg";
import heroBanner4 from "../assets/hero-banner-4.jpg";
import heroBanner5 from "../assets/hero-banner-5.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  
  const banners = [
    {
      image: heroBanner1,
      title: 'Collaboratives Global',
      subtitle: 'Excellence in Financial Management',
      description: 'Specializing in Financial Management, Risk Advisory, IT Governance, and more for over a decade.',
      buttonText: 'Get Consultancy',
      link: '/contact-us'
    },
    {
      image: heroBanner2,
      title: 'Virtual CFO Services',
      subtitle: 'Strategic Financial Leadership',
      description: 'Equivalent dedicated professional services with substantial HR cost saving. Guaranteed cost reduction of PKR 6M annually.',
      buttonText: 'Learn More',
      link: '/services'
    },
    {
      image: heroBanner3,
      title: 'ERP Consultancy',
      subtitle: 'Digital Transformation',
      description: 'Professional and Practical Financial Functional Consultancy. Ensuring your customized ERP Project\'s success.',
      buttonText: 'Explore ERP',
      link: '/services'
    },
    {
      image: heroBanner4,
      title: 'Business Process Management',
      subtitle: 'Optimization & Efficiency',
      description: 'BPM is the NEXT LEVEL BPR. Effectual Business Process Management with Cost, HR and Integration.',
      buttonText: 'Discover BPM',
      link: '/services'
    },
    {
      image: heroBanner5,
      title: 'Assurance & Risk Advisory',
      subtitle: 'Secure Your Future',
      description: 'Strengthen your business resilience with comprehensive assurance and risk advisory services.',
      buttonText: 'View Risk Advisory',
      link: '/services'
    },
  ];
  
  const intervalRef = useRef(null);

  const nextImage = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banners.length);
      setTransitioning(false);
    }, 500);
  };

  const prevImage = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? banners.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    startSlideShow();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startSlideShow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextImage();
    }, 6000);
  };

  const handleButtonClick = (index) => {
    clearInterval(intervalRef.current);
    setTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setTransitioning(false);
      startSlideShow();
    }, 500);
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out transform ${
          transitioning ? 'scale-105 opacity-80' : 'scale-100 opacity-100'
        }`}
        style={{ backgroundImage: `url(${banners[currentImageIndex].image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 h-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-6 animate-fade-scale-in">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold tracking-wide uppercase mb-2">
            {banners[currentImageIndex].subtitle}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight">
            {banners[currentImageIndex].title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            {banners[currentImageIndex].description}
          </p>
          
          <div className="pt-4">
            <Link
              to={banners[currentImageIndex].link}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-secondary/50 hover:-translate-y-1"
            >
              {banners[currentImageIndex].buttonText} <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => { prevImage(); startSlideShow(); }}
        className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all group"
      >
        <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
      </button>
      
      <button
        onClick={() => { nextImage(); startSlideShow(); }}
        className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all group"
      >
        <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? 'w-8 bg-secondary' : 'w-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;