import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";

import complianceBanner from "../assets/compliance-banner.png";
import riskBanner from "../assets/risk-banner.jpg";
import itBanner from "../assets/it-banner.png";
import PageTitle from "../components/PageTitle";

import {
  FaChartLine,
  FaFileAlt,
  FaClipboardCheck,
  FaShieldAlt,
  FaCogs,
  FaUsersCog,
  FaChartBar,
  FaSearchDollar,
  FaProjectDiagram,
  FaTools,
  FaHandshake,
  FaBook,
  FaExchangeAlt,
  FaBoxes,
  FaWarehouse,
  FaMoneyBillWave,
  FaStore,
  FaDatabase,
  FaCubes,
  FaLaptopCode,
  FaPercent,
  FaBuilding,
  FaDesktop,
  FaCog,
  FaUserShield,
} from "react-icons/fa";

const services = [
  {
    title: "Financial Management",
    description: "Offering comprehensive financial solutions to optimize business performance.",
    icon: complianceBanner,
    subServices: [
      {
        title: "Virtual CFO Services",
        description: [
          "Strategic financial planning and analysis",
          "Budgeting and forecasting",
          "Financial decision-making support",
          "Performance monitoring"
        ],
        icon: FaChartLine,
      },
      {
        title: "Financial Accounting and Reporting",
        description: [
          "Financial statement preparation",
          "Regulatory compliance",
          "Accounting records maintenance",
          "Financial reporting"
        ],
        icon: FaBook,
      },
    ],
  },
  {
    title: "Assurance and Compliance",
    description: "Ensuring compliance and accountability through reliable audits and due diligence.",
    icon: complianceBanner,
    subServices: [
      {
        title: "External Audit",
        description: [
          "Independent financial assessment",
          "Compliance verification",
          "Risk evaluation",
          "Audit reporting"
        ],
        icon: FaClipboardCheck,
      },
      {
        title: "Financial Due Diligence",
        description: [
          "Financial health assessment",
          "Risk identification",
          "Investment opportunity analysis",
          "Strategic recommendations"
        ],
        icon: FaSearchDollar,
      },
      {
        title: "Feasibilities",
        description: [
          "Project viability assessment",
          "Cost-benefit analysis",
          "Market condition evaluation",
          "Risk assessment"
        ],
        icon: FaProjectDiagram,
      },
    ],
  },
  {
    title: "Risk Advisory",
    description: "Helping businesses identify and mitigate risks effectively.",
    icon: riskBanner,
    subServices: [
      {
        title: "Internal Audit",
        description: [
          "Internal controls evaluation",
          "Operational efficiency review",
          "Risk management assessment",
          "Governance process review"
        ],
        icon: FaUserShield,
      },
      {
        title: "Management Audit",
        description: [
          "Management practices evaluation",
          "Strategic alignment assessment",
          "Efficiency analysis",
          "Performance review"
        ],
        icon: FaUsersCog,
      },
      {
        title: "Internal Controls Systems",
        description: [
          "Control system design",
          "Asset protection measures",
          "Financial accuracy assurance",
          "Fraud prevention protocols"
        ],
        icon: FaShieldAlt,
      },
    ],
  },
  {
    title: "Standardization and Optimization",
    description: "Streamlining processes and optimizing business operations.",
    icon: complianceBanner,
    subServices: [
      {
        title: "Standard Operating Procedures",
        description: [
          "SOP development",
          "Process standardization",
          "Efficiency enhancement",
          "Quality control measures"
        ],
        icon: FaClipboardCheck,
      },
      {
        title: "Operational Manuals",
        description: [
          "Procedure documentation",
          "Standard guidelines creation",
          "Best practices compilation",
          "Training material development"
        ],
        icon: FaBook,
      },
      {
        title: "Business Process Reengineering",
        description: [
          "Process analysis and redesign",
          "Workflow optimization",
          "Performance improvement",
          "Cost reduction strategies"
        ],
        icon: FaTools,
      },
      {
        title: "Business Process Outsourcing",
        description: [
          "Process outsourcing solutions",
          "Cost optimization",
          "Efficiency improvement",
          "Resource optimization"
        ],
        icon: FaExchangeAlt,
      },
    ],
  },
  {
    title: "Financial-Operational Management",
    description: "Improving financial and operational performance for business success.",
    icon: complianceBanner,
    subServices: [
      {
        title: "Supply Chain Management",
        description: [
          "Supply chain optimization",
          "Inventory management",
          "Cost reduction strategies",
          "Process efficiency"
        ],
        icon: FaBoxes,
      },
      {
        title: "Fixed Assets Management",
        description: [
          "Asset tracking",
          "Maintenance planning",
          "Depreciation management",
          "Asset utilization optimization"
        ],
        icon: FaWarehouse,
      },
      {
        title: "Working Capital Management",
        description: [
          "Cash flow optimization",
          "Liquidity management",
          "Working capital efficiency",
          "Financial planning"
        ],
        icon: FaMoneyBillWave,
      },
      {
        title: "Channel and Retail Sales Management",
        description: [
          "Sales strategy development",
          "Channel optimization",
          "Performance monitoring",
          "Distribution management"
        ],
        icon: FaStore,
      },
    ],
  },
  {
    title: "Enterprise Resource Planning",
    description: "Comprehensive ERP solutions tailored to business needs.",
    icon: riskBanner,
    subServices: [
      {
        title: "Financial Functional Consultancy",
        description: [
          "ERP financial implementation",
          "Process optimization",
          "System integration",
          "Financial module setup"
        ],
        icon: FaDatabase,
      },
      {
        title: "Solution Architectural Consultancy",
        description: [
          "ERP architecture design",
          "System customization",
          "Integration planning",
          "Technical optimization"
        ],
        icon: FaCubes,
      },
      {
        title: "Functional Consultancy",
        description: [
          "SAP implementation",
          "Oracle optimization",
          "MS Dynamics setup",
          "System customization"
        ],
        icon: FaLaptopCode,
      },
    ],
  },
  {
    title: "Taxation",
    description: "Expert taxation services to ensure compliance and optimize your tax strategy.",
    icon: complianceBanner,
    subServices: [
      {
        title: "VAT",
        description: [
          "VAT compliance management",
          "Return preparation",
          "Advisory services",
          "Planning strategies"
        ],
        icon: FaPercent,
      },
      {
        title: "Corporate Taxation",
        description: [
          "Tax planning and strategy",
          "Compliance management",
          "Risk assessment",
          "Advisory services"
        ],
        icon: FaBuilding,
      },
    ],
  },
  {
    title: "Information Technology",
    description: "Driving innovation through expert IT services and governance.",
    icon: itBanner,
    subServices: [
      {
        title: "IT Audits",
        description: [
          "System evaluation",
          "Security assessment",
          "Compliance verification",
          "Process improvement"
        ],
        icon: FaDesktop,
      },
      {
        title: "Others",
        description: [
          "Custom IT solutions",
          "Technology consulting",
          "System optimization",
          "Digital transformation"
        ],
        icon: FaCog,
      },
    ],
  },
  {
    title: "Corporate Governance",
    description: "Implementing governance frameworks for ethical and effective management.",
    icon: riskBanner,
    subServices: [
      {
        title: "Corporate Governance",
        description: [
          "Governance framework design",
          "Policy development",
          "Board advisory",
          "Best practices implementation"
        ],
        icon: FaHandshake,
      },
      {
        title: "Compliance and Ethics",
        description: [
          "Regulatory compliance",
          "Ethics program development",
          "Risk management",
          "Training and awareness"
        ],
        icon: FaShieldAlt,
      },
    ],
  },
];

const Services = () => {
  const location = useLocation();

  const scrollToHash = () => {
    const hash = location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView();
      }
    }
  };

  useEffect(() => {
    scrollToHash();
  }, [location.hash]);

  return (
    <div className="flex flex-col gap-6">
      <PageTitle
        title="Our Services"
        description="We provide a wide range of services to help you with your business needs. Our services include financial accounting & reporting, financial management, virtual CFO services, optimization and standardization, financial functional services, and IT governance."
        bgImg="bg-services"
      />
      <div className="h-full flex flex-wrap justify-center gap-4">
        {services.map((service, index) => (
          <ServicesCard key={index} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
