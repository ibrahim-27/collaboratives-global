import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceOverviewCard = ({ title, icon }) => {
    return (
        <div className="w-80 h-80 mx-auto border rounded-lg shadow-md flex flex-col gap-4 justify-center items-center p-6 
            hover:shadow-primary transition-all duration-300 
            hover:-translate-y-2 hover:scale-[1.02]">
            <div className="w-24 h-24">
                <img src={icon} alt={title} className="object-contain" />
            </div>
            <div className="flex flex-col gap-2 items-center">
                <h3 className="text-xl font-bold text-center">{title}</h3>
            </div>
            <Link 
                to={`/services#${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="w-36 bg-secondary text-white text-center py-2 px-4 rounded-lg hover:bg-primary flex items-center justify-center gap-2 transition-all duration-300"
            >
                Learn More <FaArrowRight />
            </Link>
        </div>
    );
}

export default ServiceOverviewCard;