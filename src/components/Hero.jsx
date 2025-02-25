import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const banners = [
    {
      image: 'bg-hero1',
      title: 'Collaboratives Global:',
      description: 'Specializing in Financial Management, Risk Advisory, IT Governance, and more for over a decade.',
      buttonText: 'Get Consultancy',
    },
    {
      image: 'bg-hero2',
      title: 'Virtual CFO',
      description: 'Equivalent dedicated professional services – Substantial HR Cost Saving. Research studies have guaranteed cost reduction of PKR 6M annually with virtual and fractional CFO arrangements.',
      buttonText: 'Learn More',
    },
    {
      image: 'bg-hero3',
      title: 'ERP functional Consultancy',
      description: 'Professional and Practical – Financial Functional Consultancy. It’s ALL – Your customized ERP Project’s success',
      buttonText: 'Explore ERP',
    },
    {
      image: 'bg-hero4',
      title: 'Business Processes Management',
      description: 'BPM is the NEXT LEVEL BPR. Effectual Business Process Management with Cost, HR and Integration',
      buttonText: 'Discover BPM',
    },
    {
      image: 'bg-hero5',
      title: 'Assurance and Risk Advisory',
      description: 'Strengthen your business resilience with comprehensive assurance and risk advisory services, safeguarding your assets and ensuring regulatory compliance.',
      buttonText: 'View Risk Advisory',
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
    intervalRef.current = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleButtonClick = (index) => {
    clearInterval(intervalRef.current);
    setTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setTransitioning(false);
      intervalRef.current = setInterval(() => {
        nextImage();
      }, 5000);
    }, 500);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] mx-auto overflow-hidden">
      <div
        className={`absolute inset-0 ${
          banners[currentImageIndex].image
        } bg-no-repeat bg-cover bg-center transition-opacity duration-500 ${
          transitioning ? 'opacity-100' : 'opacity-100'
        }`}
        
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative z-10 p-6 flex flex-col gap-4 justify-end h-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          {banners[currentImageIndex].title}
        </h1>
        <p className="text-sm sm:text-lg lg:text-2xl text-white">
          {banners[currentImageIndex].description}
        </p>
        <button
          className="w-36 sm:w-48 bg-secondary text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-primary flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base"
        >
          {banners[currentImageIndex].buttonText} <FaArrowRight />
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-20">
        <button
          onClick={prevImage}
          className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-20">
        <button
          onClick={nextImage}
          className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Banner Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;