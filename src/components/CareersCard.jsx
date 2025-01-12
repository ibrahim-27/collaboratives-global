

const CareersCard = ({index, img, title, description, buttonText}) => {
    return (
        <div className={`grid md:grid-cols-2 gap-4 py-4 ${index%2==0?"bg-gray-200":''}`}>
            <img className={`mx-auto h-[24rem] lg:h-[32rem] ${index%2==1?"md:order-2":''}`} src={img} alt="" />
            <div className="flex flex-col items-center justify-center px-4 gap-6 text-lg">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-text-secondary">
                    {description}
                </p>
                <button className="w-32 bg-black text-white px-4 py-2 rounded-lg">{buttonText}</button>
            </div>
        </div>
    )
}

export default CareersCard 