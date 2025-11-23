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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Approach and Methodology
          </h2>
          <p className="text-lg text-gray-600">
            Collaboration signifies a deep connection with our clients, positioning us not merely as consultants, but as integral partners in transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300 rotate-3 group-hover:rotate-0">
                  <approach.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;