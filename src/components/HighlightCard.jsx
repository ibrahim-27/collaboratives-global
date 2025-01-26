const HighlightCard = ({ title, desc, icon }) => {
    return (
        <div className="flex flex-col gap-4 border p-6 rounded-lg shadow-md
            hover:shadow-primary transition-all duration-300 
            hover:-translate-y-2 hover:scale-[1.01]">
            <div className="overflow-hidden rounded-lg">
                <img 
                    className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300" 
                    src={icon} 
                    alt={title}
                />
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-text-secondary leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

export default HighlightCard;