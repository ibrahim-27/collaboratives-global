import { Link } from "react-router-dom";

import ServiceOverviewCard from "./ServiceOverviewCard";
import financialManagement from "../assets/financial-management.png";
import riskAdvisory from "../assets/risk-advisory.png";
import financialOperational from "../assets/financial-operational.png";
import taxation from "../assets/taxation.png";
import informationTechnology from "../assets/information-technology.png";
import corporateGovernance from "../assets/corporate-governance.png"


const services = [
  {
    title: "Financial Management",
    icon: financialManagement,
  },
  {
    title: "Risk Advisory",
    icon: riskAdvisory,
  },
  {
    title: "Financial-Operational Management",
    icon: financialOperational,
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
    <div className="my-10 flex flex-col gap-6">
      <h1 className="text-2xl font-bold ">Services Overview</h1>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
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
      className="w-48 bg-primary text-white py-2 px-4 rounded-lg self-center text-center hover:bg-secondary ">
        View All Services
      </Link>
    </div>
  );
};

export default ServicesOverview;
