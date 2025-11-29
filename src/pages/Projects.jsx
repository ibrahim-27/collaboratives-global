import { useState } from "react";
import PageTitle from "../components/PageTitle";
import industriesBanner from "../assets/industries-banner.jpg";
import { FaCheckCircle, FaArrowRight, FaChartLine, FaUsers, FaLightbulb, FaRocket, FaBuilding, FaIndustry, FaShoppingCart, FaHospital, FaTimes, FaCalendarAlt, FaTag } from "react-icons/fa";

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Discovery & Analysis",
    description: "We begin by understanding your business challenges, goals, and current state through comprehensive analysis and stakeholder interviews.",
    icon: FaLightbulb,
    color: "from-blue-500 to-blue-600"
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "Our team develops a tailored strategy aligned with your business objectives, leveraging industry best practices and innovative solutions.",
    icon: FaChartLine,
    color: "from-purple-500 to-purple-600"
  },
  {
    step: 3,
    title: "Implementation",
    description: "We execute the strategy with precision, ensuring seamless integration with your existing systems and minimal disruption to operations.",
    icon: FaRocket,
    color: "from-green-500 to-green-600"
  },
  {
    step: 4,
    title: "Optimization & Support",
    description: "Continuous monitoring, optimization, and support to ensure sustainable results and long-term success for your business.",
    icon: FaUsers,
    color: "from-orange-500 to-orange-600"
  }
];

// Real case studies/projects
const caseStudies = [
  {
    id: 1,
    title: "Consolidated Reporting Automation System",
    client: "RISSA Investments LLC",
    industry: "FMCG (Borjomi Mineral Water)",
    category: "ERP Implementation",
    location: "Dubai, UAE",
    challenge: "Global FMCG group needed a scalable consolidated reporting system across 21 global entities to improve financial consolidation and governance efficiency.",
    solution: "Led functional & architectural consulting for development of CRAS in collaboration with Zeritek (Canadian IT firm). Managed scope of work design, functional documentation, development oversight, test case design, and UAT.",
    results: [
      "Delivered scalable, customized financial reporting system",
      "Consolidated reporting across 21 global entities",
      "Improved financial consolidation efficiency",
      "Enhanced governance and compliance",
      "Streamlined multi-entity financial reporting"
    ],
    duration: "Project-based",
    icon: FaIndustry,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Financial-Operational Transformation",
    client: "ZAINA Cafe",
    industry: "Hospitality (Coffee & Snacks Chain)",
    category: "Financial Management",
    location: "Dubai, UAE",
    challenge: "Emerging coffee chain needed comprehensive financial and operational controls to enable scalable expansion into UAE, KSA, and Egypt.",
    solution: "Appointed as Financial-Operational Advisor & Fractional CFO. Oversaw financial accounting & reporting, taxation & compliance, business process re-engineering (BPR), and ERP/financial systems upgrade.",
    results: [
      "Established end-to-end financial controls",
      "Implemented operational governance framework",
      "Enabled scalable expansion across 3 countries",
      "Upgraded ERP and financial systems",
      "Streamlined business processes for growth"
    ],
    duration: "Ongoing Advisory",
    icon: FaShoppingCart,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 3,
    title: "U.S. Audit & Assurance Collaboration",
    client: "TPS THYER CPAs",
    industry: "Professional Services",
    category: "Risk Advisory",
    location: "Texas, USA",
    challenge: "Needed to expand global audit reach and provide independent assurance for U.S.-based corporations including Techlogix Inc, Vicena Inc, AlmuNet Inc., Sonasoft, Cornerstone, and E-Connect.",
    solution: "Partnered with TPS Thyer CPAs to provide external audits, due diligence, and agreed-upon procedures for U.S.-based corporations.",
    results: [
      "Expanded global audit capabilities",
      "Ensured compliance for U.S. clients",
      "Delivered financial reliability assurance",
      "Provided independent audit services",
      "Strengthened client governance frameworks"
    ],
    duration: "Partnership-based",
    icon: FaBuilding,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "IT Services & Capacity Building",
    client: "E-BONDSMAN",
    industry: "IT Services",
    category: "Process Optimization",
    location: "USA",
    challenge: "Required long-term IT applications, design, capacity building, process improvement, and management support to strengthen core business operations.",
    solution: "Collaborated with E-Bondsman for over a decade as trusted IT and IT-enabled services advisor, providing comprehensive support for applications, design, and process management.",
    results: [
      "10+ years of trusted advisory partnership",
      "Strengthened core business operations",
      "Enhanced IT application capabilities",
      "Improved process efficiency",
      "Built organizational capacity"
    ],
    duration: "10+ Years",
    icon: FaRocket,
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 5,
    title: "Internal Audit & Governance Framework",
    client: "DWP Group",
    industry: "Diversified Conglomerate",
    category: "Risk Advisory",
    location: "Pakistan",
    challenge: "Leading business conglomerate needed strengthened governance frameworks and financial oversight across diversified sectors including consumer electronics (GREE), IT services, solar power, and cement.",
    solution: "Serving as Consultant Head of Internal Audit since 2015, managing special transactions & agreed-upon procedures, and providing financial-operational advisory.",
    results: [
      "Strengthened governance frameworks",
      "Enhanced financial oversight across sectors",
      "Managed special transactions effectively",
      "Supported growth in diversified operations",
      "Established robust internal controls"
    ],
    duration: "Since 2015 (9+ Years)",
    icon: FaChartLine,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 6,
    title: "Fixed Assets Verification & Supply Chain",
    client: "JOTUN",
    industry: "Manufacturing (Paints)",
    category: "Process Optimization",
    location: "Pakistan",
    challenge: "Required assurance on physical verification of fixed assets, tagging, valuation, and supply chain documentation.",
    solution: "Conducted special advisory and consulting assignments, including comprehensive verification and tagging of fixed assets and supply chain documentation projects.",
    results: [
      "Completed physical verification of fixed assets",
      "Implemented asset tagging system",
      "Provided valuation assurance",
      "Enhanced supply chain documentation",
      "Improved asset management controls"
    ],
    duration: "Project-based",
    icon: FaIndustry,
    color: "from-teal-500 to-cyan-500"
  }
];

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
        >
          <FaTimes className="text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Side - Project Header */}
          <div className={`md:w-2/5 bg-gradient-to-br ${project.color} p-8 flex flex-col items-center text-center border-r border-gray-100 text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg">
                <project.icon className="text-4xl" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider opacity-90 mb-2">
                {project.category}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 leading-tight">
                {project.title}
              </h3>
              <div className="w-16 h-0.5 bg-white/30 rounded-full mb-4"></div>
              <div className="space-y-3 text-sm w-full">
                <div className="flex items-center justify-center gap-2 opacity-90">
                  <FaBuilding className="text-sm" />
                  <span className="font-semibold">{project.client}</span>
                </div>
                <div className="flex items-center justify-center gap-2 opacity-80">
                  <FaTag className="text-sm" />
                  <span>{project.industry}</span>
                </div>
                {project.location && (
                  <div className="flex items-center justify-center gap-2 opacity-80">
                    <FaBuilding className="text-sm" />
                    <span>{project.location}</span>
                  </div>
                )}
                <div className="flex items-center justify-center gap-2 opacity-80">
                  <FaCalendarAlt className="text-sm" />
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Project Details */}
          <div className="md:w-3/5 p-8 md:p-10">
            {/* Challenge Section */}
            <div className="mb-8">
              <h4 className="text-lg font-display font-bold text-primary mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Challenge
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution Section */}
            <div className="mb-8">
              <h4 className="text-lg font-display font-bold text-primary mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Our Solution
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Results Section */}
            <div className="mb-6">
              <h4 className="text-lg font-display font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Key Results
              </h4>
              <ul className="space-y-3">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span className="leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ["All", "ERP Implementation", "Financial Management", "Risk Advisory", "Process Optimization"];

  const filteredProjects = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(project => project.category === selectedCategory);

  return (
    <div className="flex flex-col">
      <PageTitle
        title="Case Studies & Projects"
        description="Explore our successful transformations and see how we've helped businesses achieve excellence through innovative solutions."
        bgImg={industriesBanner}
      />
      
      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">
              A proven methodology that delivers results at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line (desktop only) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 z-0"></div>
            
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative group z-10"
              >
                <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2 h-full">
                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20`}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <step.icon className="text-white text-2xl" />
                </div>

                  <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real businesses we've transformed
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-secondary text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-br ${project.color} p-6 text-white relative overflow-hidden flex-shrink-0`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm shadow-lg">
                      <project.icon className="text-2xl" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider opacity-90 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <div className="text-sm opacity-90 flex items-center gap-2">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span>{project.industry}</span>
                    </div>
                  </div>
                </div>

                {/* Content - flex-grow to push footer down */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Challenge</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Solution</h4>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {project.solution}
                    </p>
                  </div>

                  {/* Results Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={14} />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer - Fixed at bottom */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-xs text-gray-500 font-medium">
                      {project.duration}
                    </span>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-secondary hover:text-secondary-light font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all hover:underline"
                    >
                      View Details <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;
