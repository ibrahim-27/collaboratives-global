import { FaArrowRight } from "react-icons/fa"

const CareersCard = ({index, img, title, description, buttonText}) => {
    return (
        <div className={`grid md:grid-cols-2 gap-4 py-4 ${index%2==1?"bg-gray-200":''}`}>
            <img className={`mx-auto h-[20rem] md:h-[24rem] lg:h-[32rem] ${index%2==1?"md:order-2":''}`} src={img} alt="" />
            <div className="flex flex-col items-center justify-center px-4 gap-6 text-lg">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-text-secondary">
                    {description}
                </p>
                <button className="w-fit bg-secondary text-white px-4 py-2 rounded-lg hover:bg-primary flex items-center justify-center gap-2 transition-all duration-300">
                    {buttonText} <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default CareersCard 