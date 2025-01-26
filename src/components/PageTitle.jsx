const PageTitle = ({title, description, bgImg, bgPosition = '75% 25%'}) => {
    return (
        <div className={`py-36 min-h-[300px] relative ${bgImg ? `${bgImg}` : 'bg-primary'} bg-cover flex flex-col justify-center gap-4 text-center text-white`}
            style={{ backgroundPosition: bgPosition }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-gray-200 mx-auto px-16">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default PageTitle