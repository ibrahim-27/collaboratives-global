import React from "react";
import { useInView } from "react-intersection-observer";

const ServicesCard = ({ index, title, description, icon, subServices }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 1;

  return (
    <div
      ref={ref}
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className={`py-20 ${
        isEven ? "bg-primary text-white" : "bg-white text-gray-800"
      } transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className={`h-[400px] rounded-2xl overflow-hidden shadow-xl ${isEven ? "lg:order-2" : ""}`}>
            <img 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              src={icon} 
              alt={title} 
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              {title}
            </h3>
            <p className={`text-lg leading-relaxed ${isEven ? "text-gray-200" : "text-gray-600"}`}>
              {description}
            </p>

            {subServices.length > 0 && (
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-6 border-b border-current pb-2 inline-block">
                  Key Services
                </h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  {subServices.map((subService, idx) => (
                    <div 
                      key={idx}
                      className={`p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                        isEven 
                          ? "bg-white/10 hover:bg-white/20" 
                          : "bg-gray-50 hover:bg-white hover:shadow-lg border border-gray-100"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${isEven ? "bg-secondary text-white" : "bg-secondary/10 text-secondary"}`}>
                          <subService.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-bold mb-2">{subService.title}</h5>
                          <ul className={`space-y-1 text-sm ${isEven ? "text-gray-300" : "text-gray-500"}`}>
                            {subService.description.map((item, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                                {item}
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
    </div>
  );
};

export default ServicesCard;
