import React from 'react';
import { FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa';

const ApproachSection = () => {
  const approaches = [
    {
      icon: FaHandshake,
      title: "Partnership",
      description: "We position ourselves not merely as consultants, but as integral partners in your transformation journey."
    },
    {
      icon: FaUsers,
      title: "Client-Centric",
      description: "We deeply connect with our clients by understanding their challenges and adopting their perspective."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We immerse ourselves in our clients' experiences to develop innovative and effective solutions."
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Approach and Methodology
          </h2>
          <p className="text-lg text-gray-600 mx-auto">
            Collaboration signifies a deep connection with our clients, positioning us not merely as consultants, but as integral partners in transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-secondary/10 p-4 rounded-full mb-4">
                  <approach.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {approach.title}
                </h3>
                <p className="text-gray-600">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;