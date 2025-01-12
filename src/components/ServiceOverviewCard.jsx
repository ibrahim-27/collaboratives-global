import { Link } from "react-router-dom";

const ServiceOverviewCard  = ({ title, icon }) => {
    return (
        <div className={`w-64 h-72 border rounded-lg shadow-md flex flex-col gap-4 justify-center items-center p-4 hover:border-secondary-light`}>
            <div className="w-24 h-24">
                <img src={icon} alt={title} />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-center">{title}</h3>
            </div>
            <Link 
            to={`/services#${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="w-32 bg-secondary text-white text-center py-2 px-4 rounded-lg hover:bg-primary">
                Learn More
            </Link>
        </div>
    );
}

export default ServiceOverviewCard;