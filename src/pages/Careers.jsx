import CareersCard from "../components/CareersCard";
import PageTitle from "../components/PageTitle";

import employers from "../assets/employers.jpg";
import employees from "../assets/employees.jpg";
import internees from "../assets/internees.jpg";

const cards = [
  {
    title: "For Businesses and Employers",
    description:
      "Join us as a partner to leverage our expertise and expand your business horizons. Collaborate with us to set up your business with the best financial and IT governance practices. Utilize our consulting services to transform your business operations and achieve excellence.",
    img: employers,
    buttonText: "Join Us",
  },
  {
    title: "For Employees (Add Freelancers Too)",
    description:
      "Explore career opportunities with us and become a part of our dynamic team. We welcome both full-time employees and freelancers to contribute to our projects and grow with us.",
    img: employees,
    buttonText: "Apply Now",
  },
  {
    title: "For Internees (Students as Learning Opportunity)",
    description:
      "Gain valuable experience and learn from industry experts through our internship programs. We offer students the opportunity to work on real projects and develop their skills.",
    img: internees,
    buttonText: "Learn More",
  },
];

const Careers = () => {
  return (
    <div>
      <PageTitle
        title="Join Our Team"
        description="Explore career opportunities and become a part of our dynamic team."
        bgImg="bg-careers"
        bgPosition="60% 40%"
      />
      <div className="flex flex-col gap-4">
        {cards.map((card, index) => (
          <CareersCard
            key={index}
            index={index}
            img={card.img}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default Careers;
