import { useRef, useEffect, useState } from "react";
import dwpLogo from "../assets/dwp-logo.jpg";
import jotunLogo from "../assets/jotun-logo.png";
import yumLogo from "../assets/yum-logo.jpg";
import gngLogo from "../assets/gng-logo.png";
import techlogixLogo from "../assets/techlogix-logo.png";
import tallymarksLogo from "../assets/tallymarks-logo.png";
import pacLogo from "../assets/pac-logo.jpg";
import alraheemLogo from "../assets/alraheem-logo.png";
import servierLogo from "../assets/servier-logo.png";
import raviLogo from "../assets/ravi-logo.png";

const projects = [
  { title: "DWP Group", img: dwpLogo },
  { title: "Jotun", img: jotunLogo },
  { title: "Yum", img: yumLogo },
  { title: "Gloves & Gloves", img: gngLogo },
  { title: "Techlogix", img: techlogixLogo },
  { title: "TallyMarks Consulting", img: tallymarksLogo },
  { title: "Professional Academy of Commerce", img: pacLogo },
  { title: "AL-Raheem Garden", img: alraheemLogo },
  { title: "Servier Pharmaceuticals", img: servierLogo },
  { title: "Ravi Spinnings", img: raviLogo },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollContainer && !isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
        scrollContainer.scrollLeft += 1;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-400 uppercase tracking-widest">
          Trusted by Industry Leaders
        </h2>
      </div>
      
      <div 
        ref={scrollRef} 
        className="overflow-x-hidden whitespace-nowrap py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="inline-flex items-center gap-16 md:gap-24 px-4">
          {[...projects, ...projects].map((project, index) => (
            <div key={index} className="flex-shrink-0 group">
              <img 
                className="h-16 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-110" 
                src={project.img} 
                alt={project.title} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
