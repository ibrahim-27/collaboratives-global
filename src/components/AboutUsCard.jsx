const AboutUsCard = ({title, description, img=null}) => {
    return (
        <div className="group h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center hover:-translate-y-2 border border-gray-100">
            {img && (
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-surface group-hover:border-secondary/20 transition-colors">
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            )}
            <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default AboutUsCard