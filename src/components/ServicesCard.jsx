import React from "react";
import { useInView } from "react-intersection-observer";

const ServicesCard = ({ index, title, description, icon, subServices }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 1;
  const isCompact = subServices.length <= 2;

  return (
    <div
      ref={ref}
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className={`py-20 ${
        isEven ? "bg-primary text-white" : "bg-white text-gray-800"
      } transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {/* Header Section (Title & Description) */}
          <div className={`flex flex-col justify-center gap-4 order-1 ${
            isEven ? "lg:col-start-1" : "lg:col-start-2"
          } lg:row-start-1`}>
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              {title}
            </h3>
            <p className={`text-lg leading-relaxed ${isEven ? "text-gray-200" : "text-gray-600"}`}>
              {description}
            </p>
          </div>

          {/* Image Section */}
          <div className={`relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 order-2 lg:order-none ${
            isEven ? "lg:col-start-2" : "lg:col-start-1"
          } ${isCompact ? "lg:row-start-1 lg:row-span-2" : "lg:row-start-2"}`}>
            <img 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              src={icon} 
              alt={title} 
            />
          </div>

          {/* Key Services Section */}
          {subServices.length > 0 && (
            <div className={`flex flex-col order-3 lg:order-none ${
              isEven ? "lg:col-start-1" : "lg:col-start-2"
            } lg:row-start-2`}>
              <h4 className={`text-xl font-bold mb-6 pb-2 inline-block border-b-2 ${isEven ? "border-secondary" : "border-primary"}`}>
                Key Services
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 h-full">
                {subServices.map((subService, idx) => (
                  <div 
                    key={idx}
                    className={`p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 group ${
                      isEven 
                        ? "bg-white/10 hover:bg-white/20 backdrop-blur-sm" 
                        : "bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg transition-colors ${
                        isEven 
                          ? "bg-secondary text-white group-hover:bg-white group-hover:text-secondary" 
                          : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
                      }`}>
                        <subService.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold mb-2 text-base">{subService.title}</h5>
                        <ul className={`space-y-1.5 text-sm ${isEven ? "text-gray-300" : "text-gray-500"}`}>
                          {subService.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isEven ? "bg-secondary" : "bg-primary"}`}></span>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
