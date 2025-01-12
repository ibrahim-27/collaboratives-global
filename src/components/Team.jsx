import persona from "../assets/persona-img.jpg";
import AboutUsCard from "./AboutUsCard";

const teamMembers = [
    {
      name: "Asim Nazir",
      title: "Financial-Operational Management & Financial-Functional Expertise",
      image: persona
    },
    {
      name: "Ahsan Nazir",
      title: "Information Technology, Apps, and IT Governance",
      image: persona,
    },
    {
      name: "Mr. Musa Sheikh",
      title: "Optimization and Standardization",
      image: persona,
    },
    {
      name: "Mr. Hannan Asim",
      title: "Financial Markets, Products, and NBFI",
      image: persona,
    },
  ];
  
const Team = () => {

  return (
    <div className="my-12 px-6 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold text-center">Team & Leadership</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <AboutUsCard
            key={index}
            title={member.name}
            description={member.title}
            img={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
