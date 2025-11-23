import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ServiceOverviewCard from "./ServiceOverviewCard";
import financialManagement from "../assets/financial-management.png";
import compliance from "../assets/assurance-compliance.png"
import riskAdvisory from "../assets/risk-advisory.png";
import standardization from "../assets/standardizaton-optimization.png"
import financialOperational from "../assets/financial-operational.png";
import resourcePlanning from "../assets/resource-planning.png";
import taxation from "../assets/taxation.png";
import informationTechnology from "../assets/information-technology.png";
import corporateGovernance from "../assets/corporate-governance.png"

const services = [
  { title: "Financial Management", icon: financialManagement },
  { title: "Assurance and Compliance", icon: compliance },
  { title: "Risk Advisory", icon: riskAdvisory },
  { title: "Standardization and Optimization", icon: standardization },
  { title: "Financial-Operational Management", icon: financialOperational },
  { title: "Enterprise Resource Planning", icon: resourcePlanning },
  { title: "Taxation", icon: taxation },
  { title: "Information Technology", icon: informationTechnology },
  { title: "Corporate Governance", icon: corporateGovernance },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive financial and operational solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center">
          {services.map((service, index) => (
            <ServiceOverviewCard
              key={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 bg-primary text-white py-3 px-8 rounded-full font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View All Services <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
