const Hero = () => {
    return (
        <div className="mt-10 relative w-full h-96 rounded-lg mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-hero bg-cover bg-center opacity-50"></div>
            <div className="relative z-10 p-6 flex flex-col gap-4 justify-end h-full">
                <h1 className="text-4xl font-bold">Collaboratives Global: Your Transformation Partners in Financial and IT Governance</h1>
                <p className="text-2xl text-gray-700">Specializing in Financial Management, Risk Advisory, IT Governance, and more for over a decade.</p>
                <button className="w-40 bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary">Get Consultancy</button>
            </div>
        </div>
    );
}

export default Hero;