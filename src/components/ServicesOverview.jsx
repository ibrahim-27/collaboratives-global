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
  {
    title: "Financial Management",
    icon: financialManagement,
  },
  {
    title: "Assurance and Compliance",
    icon: compliance,
  },
  {
    title: "Risk Advisory",
    icon: riskAdvisory,
  },
  {
    title: "Standardization and Optimization",
    icon: standardization,
  },
  {
    title: "Financial-Operational Management",
    icon: financialOperational,
  },
  {
    title: "Enterprise Resource Planning",
    icon: resourcePlanning,
  },
  {
    title: "Taxation",
    icon: taxation,
  },
  {
    title: "Information Technology",
    icon: informationTechnology,
  },
  {
    title: "Corporate Governance",
    icon: corporateGovernance,
  },
];

const ServicesOverview = () => {
  return (
    <div className="px-4 my-10 flex flex-col gap-6">
      <h1 className="text-2xl font-bold ">Services Overview</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
        {services.map((service, index) => (
          <ServiceOverviewCard
            key={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
      <Link 
      to="/services#financial-management"
      className="w-48 bg-primary text-white py-2 px-4 rounded-lg self-center text-center hover:bg-secondary flex items-center justify-center gap-2 transition-all duration-300">
        View All Services <FaArrowRight />
      </Link>
    </div>
  );
};

export default ServicesOverview;
