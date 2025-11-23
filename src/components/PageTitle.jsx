const PageTitle = ({title, description, bgImg, bgPosition = 'center'}) => {
    return (
        <div className={`relative py-32 md:py-48 min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden ${bgImg ? bgImg : 'bg-primary'}`}
            style={{ 
                backgroundSize: 'cover',
                backgroundPosition: bgPosition,
                backgroundImage: bgImg && !bgImg.startsWith('bg-') ? `url(${bgImg})` : undefined
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl animate-fade-scale-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                    {title}
                </h1>
                <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-light">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default PageTitle