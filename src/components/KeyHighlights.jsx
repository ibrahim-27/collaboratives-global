import HighlightCard from "./HighlightCard";
import proficienciesImg from "../assets/proficiencies.jpg";

import collaborationImg from "../assets/collaboration.jpg";
import accomplishmentsImg from "../assets/accomplishments.jpg";

const highlights = [
    {
      title: "Our Proficiencies",
      desc: "Our professional services domain spans from Financial Accounting & Reporting and Financial Management to Virtual CFO services – Financial-operational Management to Optimization and Standardization – Financial Functional services to IT Governance.",
      icon: proficienciesImg
    },
    {
      title: "Our Collaboration",
      desc: "Thoroughly integrated and integrally collaborated 'business-centric' approach for customized solutions through 'industry best practices'.",
      icon: collaborationImg
    },
    {
      title: "Our Accomplishments",
      desc: "Provenly 'advised, devised and implemented' accomplishments in Pakistan, UAE, and USA.",
      icon: accomplishmentsImg
    }
  ];

const KeyHighLights = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                        Why Collaboratives Global?
                    </h2>
                    <p className="text-lg text-gray-600">
                        We deliver excellence through our proven expertise, collaborative approach, and track record of success.
                    </p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-3">
                    {highlights.map((highlight, index) => (
                        <HighlightCard key={index} title={highlight.title} desc={highlight.desc} icon={highlight.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default KeyHighLights;