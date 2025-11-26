import { useState } from "react";
import { FaTimes, FaLinkedin, FaQuoteLeft, FaUser } from "react-icons/fa";
import asim from "../assets/asim-img.jpg";
import awais from "../assets/awais-img.jpg";
import tehseen from "../assets/tehseen-img.jpg";
import athar from "../assets/athar-img.jpg"

const teamMembers = [
  {
    name: "Asim Nazir Sheikh, FCA",
    title: "Founder & CEO – Collaboratives Global FZ-E",
    tagline: "Driving Financial Clarity Through Bespoke ERP, Integration & Operational Reinvention.",
    image: asim,
    bio: [
      "Asim Nazir Sheikh is a seasoned Chartered Accountant and business transformation leader with over two decades of multinational experience in financial management, operational excellence, and strategic consulting. As the Founder & CEO of Collaboratives Global, he leads a high-performance consulting platform serving clients across the UAE, Bahrain, USA, UK, and South Asia.",
      "Known for combining deep financial insight with practical, execution-driven consulting, Asim helps organizations streamline operations, strengthen governance, build scalable financial systems, and unlock cost-efficient growth. His expertise spans Financial Accounting & Reporting, Virtual CFO Services, FP&A, ERP functional consulting, Business process reengineering, and offshore BPO solutions.",
      "At Collaboratives Global, Asim has built a unique advisory model that blends global experience with local expertise—serving SMEs, startups, and mid-size enterprises looking for reliable, compliant, and transformation-focused financial and operational support. His cross-border experience in the USA taxation ecosystem, outsourcing, and enterprise financial governance enables clients to navigate complex environments with confidence.",
      "Asim is a Fellow Chartered Accountant (FCA) from the Institute of Chartered Accountants of Pakistan, with an extensive track record in manufacturing, trading, retailing, services, and consulting sectors. His work is driven by a simple belief: clarity, transparency, and intelligent financial systems create better businesses."
    ]
  },
  {
    name: "Ahsan Nazir Sheikh",
    title: "Co-Founder and Co-CEO, Collaboratives GLOBAL, Germany",
    tagline: "Expert in Strategic Leadership, IT Governance & High-Performance Digital Solutions.",
    bio: [
      "A dynamic strategist with a proven record of steering innovation, Ahsan Sheikh excels at bridging the gap between bold vision and operational impact. Skilled in aligning technology, market insights, and organisational design, he has led high-stakes initiatives across diverse sectors, driving growth, efficiency, and transformation.",
      "Ahsan’s approach combines strong analytical rigor with creative thinking—enabling leadership teams to navigate ambiguity, seize disruption, and articulate actionable roadmaps. Whether it’s digital transformation, new business model incubation, or change-management programs, he brings clarity, purpose, and momentum.",
      "With a passion for building talented teams and robust processes, Ahsan is a trusted advisor who partners with executives to move from ideas to execution and leverage innovation as a competitive advantage."
    ]
  },
  {
    name: "Awais Noori FCCA • ACA • ICAEW",
    title: "Director, Awais & Co and Collaboratives GLOBAL, London",
    tagline: "Expert in UK–UAE Taxation, Compliance & High-Integrity Financial Advisory.",
    image: awais,
    bio: [
      "A veteran professional chartered accountant with global credentials (Fellow of ACCA, Associate of ICAEW ACA), Awais Noori brings two decades of expertise in audit, advisory and financial services to the London-based firm Awais & Co. His leadership spans cross-border engagements across UK, Middle East and Pakistan markets, delivering value in regulatory assurance, risk-management frameworks and strategic business consulting.",
      "He spearheads the firm’s growth initiatives and talent development, firmly embedding a continuous-learning culture (as recognised by ACCA’s Gold Approved Employer status). His core strengths lie in guiding clients through evolving governance standards, regulatory compliance, and leveraging data-driven financial insights to accelerate business performance.",
      "With a practical lens on dynamic markets and sound professional grounding, Awais is adept at aligning audit and advisory services with business objectives—enabling clients to move confidently from compliance to opportunity."
    ]
  },
  {
    name: "Tehseen Iqbal ACA",
    title: "Director, Bahrain",
    tagline: "Driving Strategic Decisions Through FP&A, Taxation & Gulf-Market Expertise.",
    image: tehseen,
    bio: [
      "With a robust background in chartered accounting and over a decade of hands-on experience across audit, financial reporting, and corporate strategy, Tehseen Iqbal is an experienced finance professional who consistently delivers clarity, control, and value to organizations. Skilled in navigating complex regulatory environments, his expertise spans a range of industries including manufacturing, services, and consulting.",
      "At his current role as Director Collaborative GLOBAL, Bahrain, Tehseen leads key initiatives in financial systems optimisation, internal controls enhancement, and customised reporting frameworks—enabling leadership teams to make informed strategic decisions and drive sustainable growth. His strong technical foundation (ACA qualification) combined with a pragmatic approach to business finance brings reliability and forward-thinking insight to every engagement."
    ]
  },
  {
    name: "Athar Mahmood FCA",
    title: "Director & Strategic Advisor, Collaboratives GLOBAL, KSA",
    tagline: "Expert in Construction Finance, Strategic FP&A & Large-Scale Project Management.",
    image: athar,
    bio: [
      "Athar Mahmood, a Fellow of the Institute of Chartered Accountants of Pakistan (FCA), blends deep financial expertise with strategic vision. Throughout his career he has held senior leadership roles in multinational and regional organisations, navigating diverse industry sectors and cross‐border engagements. His expertise spans audit and assurance, internal controls and governance, financial reporting under IFRS, and business transformation.",
      "Athar’s strength lies in aligning finance with strategic growth: he drives teams to convert financial data into actionable insights, embeds robust compliance frameworks, and champions operational efficiency in complex, evolving environments. Known for his strong leadership and ability to build high‐performance finance functions, he is equally comfortable managing board-level reporting, overseeing global transactions, and mentoring future finance professionals.",
      "With his holistic view of business and finance, Athar is a trusted advisor to executive management and boards, empowering organisations to move confidently from compliance to competitive advantage."
    ]
  }
];

const TeamMemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
        >
          <FaTimes className="text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-surface p-8 flex flex-col items-center text-center border-r border-gray-100">
            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-50 flex items-center justify-center">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <FaUser className="text-gray-300 text-6xl" />
              )}
            </div>
            <h3 className="text-xl font-display font-bold text-primary mb-2">{member.name}</h3>
            <p className="text-sm text-secondary font-semibold mb-4">{member.title}</p>
            <div className="mt-auto pt-4 border-t border-gray-200 w-full">
               <div className="flex justify-center gap-4">
                  {/* Social icons could go here */}
               </div>
            </div>
          </div>
          
          <div className="md:w-3/5 p-8 md:p-10">
            <div className="mb-6">
                <FaQuoteLeft className="text-3xl text-secondary/20 mb-2" />
                <p className="text-lg text-primary font-medium italic">
                    "{member.tagline}"
                </p>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {member.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Team Collaboratives
          </h2>
          <p className="text-lg text-gray-600">
            Meet our team of experts dedicated to your success.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-surface group-hover:border-secondary/20 transition-colors bg-gray-50 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <FaUser className="text-gray-300 text-4xl group-hover:scale-110 transition-transform duration-500" />
                )}
              </div>
              
              <h3 className="text-lg font-display font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                {member.name}
              </h3>
              
              <p className="text-sm text-gray-500 mb-4 h-10 line-clamp-2">
                {member.title}
              </p>

              <div className="bg-surface/50 p-3 rounded-lg mb-6 w-full min-h-[80px] flex items-center justify-center">
                <p className="text-xs text-primary/80 italic font-medium">
                    "{member.tagline}"
                </p>
              </div>
              
              <button
                onClick={() => setSelectedMember(member)}
                className="mt-auto px-6 py-2 bg-white border border-secondary text-secondary rounded-full text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm hover:shadow-md"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <TeamMemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </section>
  );
};

export default Team;
