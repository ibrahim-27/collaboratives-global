const HighlightCard = ({ title, desc, icon }) => {
    return (
        <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
                <img 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    src={icon} 
                    alt={title}
                />
            </div>
            <div className="p-8 flex flex-col gap-4">
                <h3 className="text-2xl font-display font-bold text-primary group-hover:text-secondary transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default HighlightCard;