import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceOverviewCard = ({ title, icon }) => {
    return (
        <div className="group h-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center hover:-translate-y-2">
            <div className="w-20 h-20 mb-6 p-4 bg-surface rounded-full group-hover:bg-secondary/10 transition-colors">
                <img src={icon} alt={title} className="w-full h-full object-contain" />
            </div>
            
            <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                {title}
            </h3>
            
            <div className="mt-auto pt-4">
                <Link 
                    to={`/services#${title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors group-hover:gap-3"
                >
                    Learn More <FaArrowRight size={14} />
                </Link>
            </div>
        </div>
    );
};

export default ServiceOverviewCard;