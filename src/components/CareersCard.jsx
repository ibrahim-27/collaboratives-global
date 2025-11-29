import { FaArrowRight } from "react-icons/fa"

const CareersCard = ({index, img, title, description, buttonText}) => {
    const isEven = index % 2 === 1;
    
    // Gradient colors for different cards
    const gradients = [
        "from-blue-500 to-cyan-500",
        "from-purple-500 to-pink-500",
        "from-green-500 to-emerald-500"
    ];
    const gradient = gradients[index % gradients.length];
    
    return (
        <div className={`py-16 ${isEven ? "bg-gray-50" : "bg-white"}`}>
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className={`rounded-2xl overflow-hidden shadow-lg border border-gray-100 ${isEven ? "md:order-2" : ""} group`}>
                        <div className="relative overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                        <img 
                                className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" 
                            src={img} 
                            alt={title} 
                        />
                            {/* Decorative circles */}
                            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-gradient-to-r ${gradient} text-white`}>
                                Career Opportunity
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                            {title}
                        </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary-light rounded-full mb-6"></div>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                        <button className="w-fit bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary-light flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                            {buttonText} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareersCard
