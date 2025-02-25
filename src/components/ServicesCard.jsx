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
      className={`h-fit w-full grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 py-8 px-4 md:px-8 ${
        isEven ? "bg-primary" : "bg-white"
      } 
      ${inView ? "animate-fade-scale-in" : "opacity-0"}`}
    >
      <div
        className={`h-full w-full flex justify-center items-center m-auto ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <img className="h-full w-full object-cover" src={icon} alt={title} />
      </div>
      <div
        className={`col-span-2 flex flex-col justify-center ${
          isEven ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <h3
          className={`text-3xl font-bold mb-4 ${
            isEven ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h3>
        <p className="text-lg mb-6">{description}</p>
        {subServices.length ? (
          <div>
            <h4 className="text-2xl font-semibold mb-4">
              Our Services:
            </h4>
            <ul className="list-none list-inside  grid grid-cols-1 md:grid-cols-2  gap-3">
              {subServices.map((subService, index) => (
                <li
                  key={index}
                  className={`py-3 px-4 rounded-lg flex flex-col items-center md:flex-row gap-4 ${
                    isEven ? "text-white bg-gray-400 bg-opacity-50" : "text-gray-700 bg-gray-100 bg-opacity-50"
                  }`}
                >
                  <div
                    className={`${
                      isEven ? "bg-secondary" : "bg-secondary/10"
                    } rounded-full p-3 w-fit h-fit hidden md:block`}
                  >
                    <subService.icon
                      className={`w-6 h-6 ${
                        isEven ? "text-white" : "text-secondary"
                      }`}
                    />
                  </div>
                  <div className="px-4 w-full">
                    <h5 className="text-xl font-medium italic">
                      {subService.title}
                    </h5>
                    <ul className={`list-disc list-inside mt-2 ${isEven ? "text-gray-300" : "text-gray-400"}`}>
                      {subService.description.map((item, idx) => (
                        <li key={idx} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ServicesCard;
