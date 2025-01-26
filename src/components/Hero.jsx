import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mt-10 relative w-full h-96 rounded-lg mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-hero bg-no-repeat bg-cover bg-center opacity-100"></div>
      <div className="relative z-10 p-6 flex flex-col gap-4 justify-end h-full">
        <h1 className="text-4xl font-bold">
          Collaboratives Global: 
        </h1>
        <p className="text-2xl text-primary">
          Specializing in Financial Management, Risk Advisory, IT Governance,
          and more for over a decade.
        </p>
        <button className="w-48 bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary flex items-center justify-center gap-2 transition-all duration-300">
          Get Consultancy <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
