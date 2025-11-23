import { FaArrowRight } from "react-icons/fa"

const CareersCard = ({index, img, title, description, buttonText}) => {
    const isEven = index % 2 === 1;
    
    return (
        <div className={`py-16 ${isEven ? "bg-gray-50" : "bg-white"}`}>
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={`rounded-2xl overflow-hidden shadow-lg ${isEven ? "md:order-2" : ""}`}>
                        <img 
                            className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
                            src={img} 
                            alt={title} 
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                        <button className="w-fit bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                            {buttonText} <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareersCard