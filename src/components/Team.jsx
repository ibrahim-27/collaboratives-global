import persona from "../assets/persona-img.jpg";
import AboutUsCard from "./AboutUsCard";

const teamMembers = [
    {
      name: "Asim Nazir Sheikh",
      title: "Financial-Operational Management & Financial-Functional Expertise",
      image: persona
    },
    {
      name: "Ahsan Nazir Sheikh",
      title: "Information Technology, Apps, and IT Governance",
      image: persona,
    },
    {
      name: "Sheraz Ayyub",
      title: "Optimization and Standardization",
      image: persona,
    },
    {
      name: "Mohsin Saeed",
      title: "Financial Markets, Products, and NBFI",
      image: persona,
    },
    {
      name: "Khurram Azam",
      title: "Financial Markets, Products, and NBFI",
      image: persona,
    },
    {
      name: "Muhammad Afzal",
      title: "Financial Markets, Products, and NBFI",
      image: persona,
    },
    {
      name: "Anwar Shafiq",
      title: "Financial Markets, Products, and NBFI",
      image: persona,
    }
  ];
  
const Team = () => {

  return (
    <div className="my-12 px-6 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold text-center">Team Collaboratives</h1>
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
