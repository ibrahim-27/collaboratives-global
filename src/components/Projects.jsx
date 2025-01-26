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
  {
    title: "DWP Group",
    description:
      "DWP Group is a leading provider of products, service and solutions in the field of Consumer Electronics & Technology.",
    img: dwpLogo,
  },
  {
    title: "Jotun",
    description:
      "Jotun is one of the world's leading manufacturers of decorative paints, marine, protective and powder coatings.",
    img: jotunLogo,
  },
  {
    title: "Yum",
    description:
      "Yum! Brands is focused on building KFC, Pizza Hut, Taco Bell and The Habit Burger Grill to be the world's most loved, trusted and fastest growing restaurant brands.",
    img: yumLogo,
  },
  {
    title: "Gloves & Gloves",
    description:
      "Gloves & Gloves is a leading manufacturer of high-quality gloves for a variety of industries.",
    img: gngLogo,
  },
  {
    title: "Techlogix",
    description:
      "Techlogix is a global leader in software development, mobile applications, and IT consulting.",
    img: techlogixLogo,
  },
  {
    title: "TallyMarks Consulting",
    description:
      "TallyMarks Consulting is a leading provider of business intelligence and data analytics solutions.",
    img: tallymarksLogo,
  },
  {
    title: "Professional Academy of Commerce",
    description:
      "Professional Academy of Commerce is a leading provider of professional accounting and finance education.",
    img: pacLogo,
  },
  {
    title: "AL-Raheem Garden",
    description:
      "AL-Raheem Garden is a leading provider of residential and commercial real estate solutions.",
    img: alraheemLogo,
  },
  {
    title: "Servier Pharmaceuticals",
    description:
      "Servier Pharmaceuticals is a leading provider of pharmaceutical products.",
    img: servierLogo,
  },
  {
    title: "Ravi Spinnings",
    description:
      "Ravi Spinnings is a leading provider of textiles and fabrics.",
    img: raviLogo,
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer && !isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset to start for seamless loop
        }
        scrollContainer.scrollLeft += 1; // Increment scrollLeft to move right
      }
    };

    const interval = setInterval(scroll, 20); // Adjust speed

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center">Our Clients</h1>
      <div 
        ref={scrollRef} 
        className="overflow-x-hidden whitespace-nowrap py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="inline-flex gap-12">
          {[...projects, ...projects].map((project, index) => (
            <div key={index} className="flex-shrink-0">
              <img className="w-fit h-32" src={project.img} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
