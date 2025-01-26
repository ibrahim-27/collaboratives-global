import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";

import complianceBanner from "../assets/compliance-banner.webp";
import riskBanner from "../assets/risk-banner.webp";
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
    description:
      "Offering comprehensive financial solutions to optimize business performance.",
    icon: complianceBanner,
    subServices: [
      {
        title: "Virtual CFO Services",
        description:
          "Professional CFO services for financial planning, strategy, and decision-making. This includes budgeting, forecasting, financial analysis, and strategic financial planning to help businesses make informed decisions.",
        icon: FaChartLine,
      },
      {
        title: "Financial Accounting and Reporting",
        description:
          "Accurate and compliant financial accounting and reporting for your business. This involves preparing financial statements, maintaining accurate financial records, and ensuring compliance with accounting standards and regulations.",
        icon: FaBook,
      },
    ],
  },
  {
    title: "Assurance and Compliance",
    description:
      "Ensuring compliance and accountability through reliable audits and due diligence.",
    icon: complianceBanner,
    subServices: [
      {
        title: "External Audit",
        description:
          "Independent assessment of financial statements for credibility and compliance. External audits provide an objective evaluation of a company's financial health and ensure that financial statements are free from material misstatement.",
        icon: FaClipboardCheck,
      },
      {
        title: "Financial Due Diligence",
        description:
          "Thorough analysis to support informed financial decisions and investments. This process involves evaluating the financial aspects of a business to identify potential risks and opportunities before making investment decisions.",
        icon: FaSearchDollar,
      },
      {
        title: "Feasibilities",
        description:
          "Detailed feasibility studies for evaluating the viability of projects and initiatives. These studies assess the practicality and potential success of proposed projects, considering factors such as cost, benefits, risks, and market conditions.",
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
        description:
          "Ensuring effective internal controls and operational efficiency. Internal audits evaluate the effectiveness of a company's internal controls, risk management, and governance processes to ensure they are functioning as intended.",
        icon: FaUserShield,
      },
      {
        title: "Management Audit",
        description:
          "Evaluation of management practices to align with strategic goals. This involves assessing the efficiency and effectiveness of management practices and ensuring they are aligned with the organization's strategic objectives.",
        icon: FaUsersCog,
      },
      {
        title: "Internal Controls Systems",
        description:
          "Designing and implementing robust internal control systems. These systems help safeguard assets, ensure the accuracy of financial records, and promote operational efficiency by preventing and detecting errors and fraud.",
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
        description:
          "Developing SOPs to enhance consistency and efficiency. Standard Operating Procedures (SOPs) provide detailed, written instructions to achieve uniformity in the performance of specific functions.",
        icon: FaClipboardCheck,
      },
      {
        title: "Operational Manuals",
        description:
          "Comprehensive guides for standardized operational practices. These manuals serve as reference documents that outline the procedures and standards for various operational activities within an organization.",
        icon: FaBook,
      },
      {
        title: "Business Process Reengineering",
        description:
          "Revolutionizing processes for improved performance and results. This involves analyzing and redesigning workflows and processes within an organization to optimize performance and achieve significant improvements in critical measures such as cost, quality, and speed.",
        icon: FaTools,
      },
      {
        title: "Business Process Outsourcing",
        description:
          "Cost-effective outsourcing solutions for key business processes. BPO involves contracting specific business tasks, such as payroll, human resources, or customer service, to a third-party service provider to reduce costs and improve efficiency.",
        icon: FaExchangeAlt,
      },
    ],
  },
  {
    title: "Financial-Operational Management",
    description:
      "Improving financial and operational performance for business success.",
    icon: complianceBanner,
    subServices: [
      {
        title: "Supply Chain Management",
        description:
          "Optimizing supply chains for enhanced efficiency and cost savings. This involves managing the flow of goods and services, including all processes that transform raw materials into final products, to maximize efficiency and minimize costs.",
        icon: FaBoxes,
      },
      {
        title: "Fixed Assets Management",
        description:
          "Effective tracking and management of fixed assets. This includes maintaining accurate records of a company's fixed assets, such as property, plant, and equipment, to ensure proper accounting, maintenance, and utilization.",
        icon: FaWarehouse,
      },
      {
        title: "Working Capital Management",
        description:
          "Strategies to maintain adequate liquidity and operational funding. This involves managing the company's short-term assets and liabilities to ensure it has sufficient cash flow to meet its short-term obligations and operating expenses.",
        icon: FaMoneyBillWave,
      },
      {
        title: "Channel and Retail Sales Management",
        description:
            "Enhancing retail and channel sales performance. This includes developing strategies to improve sales performance through various distribution channels and retail outlets, ensuring products reach the end customers effectively.",
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
        description:
          "Expert financial advice for ERP implementations. This involves providing specialized financial expertise to ensure the successful implementation and optimization of ERP systems, aligning them with the company's financial processes and goals.",
        icon: FaDatabase,
      },
      {
        title: "Solution Architectural Consultancy",
        description:
          "Customized ERP solutions to align with organizational goals. This includes designing and implementing ERP solutions that are tailored to the specific needs and objectives of the organization, ensuring seamless integration and functionality.",
        icon: FaCubes,
      },
      {
        title: "Functional Consultancy",
        description:
          "Specialized guidance for proprietary ERPs like SAP, Oracle, and MS Dynamics 365. This involves providing expert advice and support for the implementation, customization, and optimization of specific ERP systems to enhance their effectiveness and efficiency.",
        icon: FaLaptopCode,
      },
    ],
  },
  {
    title: "Taxation",
    description:
      "Expert taxation services to ensure compliance and optimize your tax strategy.",
    icon: complianceBanner,
    subServices: [
      {
        title: "VAT",
        description:
          "Comprehensive VAT compliance and advisory services. This includes helping businesses comply with VAT regulations, preparing and filing VAT returns, and providing advice on VAT planning and optimization.",
        icon: FaPercent,
      },
      {
        title: "Corporate Taxation",
        description:
          "Tailored solutions for corporate tax management. This involves providing expert advice on corporate tax matters, including tax planning, compliance, and optimization strategies to minimize tax liabilities and ensure compliance with tax laws.",
        icon: FaBuilding,
      },
    ],
  },
  {
    title: "Information Technology",
    description:
      "Driving innovation through expert IT services and governance.",
    icon: complianceBanner,
    subServices: [
      {
        title: "IT Audits",
        description:
          "Ensuring IT systems and processes meet industry standards. IT audits involve evaluating the effectiveness and security of an organization's information systems, ensuring they comply with industry standards and best practices.",
        icon: FaDesktop,
      },
      {
        title: "Others",
        description:
          "Custom IT solutions for unique business challenges. This includes providing tailored IT services and solutions to address specific business needs and challenges, ensuring the effective use of technology to achieve business objectives.",
        icon: FaCog,
      },
    ],
  },
  {
    title: "Corporate Governance",
    description:
      "Implementing governance frameworks for ethical and effective management.",
    icon: riskBanner,
    subServices: [
      {
        title: "Corporate Governance",
        description:
          "Implementing governance frameworks for ethical and effective management.",
        icon: FaHandshake,
      },
      {
        title: "Compliance and Ethics",
        description:
          "Ensuring compliance with laws and regulations and promoting ethical behavior.",
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
