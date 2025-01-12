import retail from "../assets/retail.png";
import health from "../assets/health.png";
import it from "../assets/information-technology.png";
import realEstate from "../assets/real-estate.png";
import manufacturing from "../assets/manufacturing.png";
import education from "../assets/education.png";
import ngo from "../assets/ngo.png";
import restuarant from "../assets/restuarant.png";
import financial from "../assets/financial.png";
import PageTitle from "../components/PageTitle";

const industries = [
  {
    title: "Retail and FMCG",
    description:
      "Serving industry leaders like DWP (PAK) and Borjomi (UAE), providing comprehensive solutions for retail and FMCG sectors.",
    icon: retail,
  },
  {
    title: "Health and Pharmaceuticals",
    description:
      "Supporting companies like Servier and Himmel (PAK) with innovative solutions for the health and pharmaceuticals sector.",
    icon: health,
  },
  {
    title: "IT and IT-enabled Services",
    description:
      "Providing IT services to leaders like DWP (PAK), TMC (PAK / UAE), and Techlogix (International).",
    icon: it,
  },
  {
    title: "Real Estate",
    description:
      "Offering specialized services for the dynamic real estate sector.",
    icon: realEstate,
  },
  {
    title: "Manufacturing",
    description:
      "Partnering with manufacturing giants in textiles and paints, including Jotun (PAK).",
    icon: manufacturing,
  },
  {
    title: "Education",
    description:
      "Enhancing educational institutions like BSS and initiatives led by Rana Afzal.",
    icon: education,
  },
  {
    title: "NGOs and NPOs",
    description:
      "Providing strategic support to NGOs and NPOs for maximum impact.",
    icon: ngo,
  },
  {
    title: "Hospitality & Restaurants",
    description:
      "Working with prominent names in hospitality like YUM, ETH, and SB.",
    icon: restuarant,
  },
  {
    title: "Financial Sectors and Fintech",
    description:
      "Offering cutting-edge solutions for NBFIs (Modarabas), Microfinance (Bilal Ahmed), and other financial sectors.",
    icon: financial,
  },
];

const Industries = () => {
  return (
    <div className="flex flex-col">
      <PageTitle
        title="Industries & Professions We Serve"
        description="Collaboratives Global offers tailored services across various industries, helping businesses grow and thrive."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center gap-2 border hover:border-secondary-light"
          >
            <img className="w-12 h-12" src={industry.icon} alt="" />
            <h2 className="text-2xl font-bold text-gray-800">
              {industry.title}
            </h2>
            <p className="text-text-secondary text-center">
              {industry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
