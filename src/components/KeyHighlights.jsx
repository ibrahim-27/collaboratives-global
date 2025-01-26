import HighlightCard from "./HighlightCard";
import img from "../assets/hero-bg.jpg";

const highlights = [
    {
      title: "Our Proficiencies",
      desc: "Our professional services domain spans from Financial Accounting & Reporting and Financial Management to Virtual CFO services – Financial-operational Management to Optimization and Standardization – Financial Functional services to IT Governance.",
      icon: img
    },
    {
      title: "Our Collaboration",
      desc: "Thoroughly integrated and integrally collaborated 'business-centric' approach for customized solutions through 'industry best practices'.",
      icon: img
    },
    {
      title: "Our Accomplishments",
      desc: "Provenly 'advised, devised and implemented' accomplishments in Pakistan, UAE, and USA.",
      icon: img
    }
  ];

const KeyHighLights = () => {

    return (
        <div className="px-4 w-full mx-auto my-10 flex flex-col gap-4">
        <h1 className="text-2xl font-bold ">Why Collaboratives Global?</h1>
        <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight, index) => (
                <HighlightCard key={index} title={highlight.title} desc={highlight.desc} icon={highlight.icon} />
            ))}
        </div>
        </div>
    );
}

export default KeyHighLights;