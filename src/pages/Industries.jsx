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
        title="Collaboratives' Domains"
        description="Collaboratives Global offers tailored services across various industries, helping businesses grow and thrive."
        bgImg="bg-primary"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col items-center text-center gap-6"
              >
                <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center group-hover:bg-secondary/10 transition-colors p-4">
                  <img className="w-full h-full object-contain" src={industry.icon} alt={industry.title} />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {industry.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
