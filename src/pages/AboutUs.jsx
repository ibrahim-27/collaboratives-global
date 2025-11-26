import React from "react";
import PageTitle from "../components/PageTitle";
import aboutBanner from "../assets/about-banner.jpg";
import Team from "../components/Team";
import Projects from "../components/Projects";
import AboutUsCard from "../components/AboutUsCard";
import ApproachSection from "../components/ApproachSection";

const keypoints = [
  {
    title: "Our Vision",
    description:
      "For a decade or so, Collaboratives Global, is striving with its “client-integrated” professional services in the domains of Financial Management, Accounting & Reporting, Risk Advisory Assurance and Information Technology",
  },
  {
    title: "Our Mission",
    description:
      "At Collaboratives Global, Transformation is accomplished through Professional and Practical consulting solutions. Collaboratives Global – we’re not just subject specialist, we’re more than your consultants, we’re your Transformation Partners!",
  },
  {
    title: "Our Value",
    description:
      "At Collaboratives Global, Transformation is accomplished through Professional and Practical consulting solutions. Collaboratives Global – we’re not just subject specialist, we’re more than your consultants, we’re yourTransformation Partners!",
  },
];

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <PageTitle
        title="About Us"
        description="Collaboratives Global (formerly Collaborative Consultings – established 2014) a financial management consultancy firm that specializes in Financial – Operational and IT governance consultancy services."
        bgImg={aboutBanner}
        bgPosition="center"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 items-stretch justify-center">
            {keypoints.map((keypoint, index) => (
              <AboutUsCard
                key={index}
                title={keypoint.title}
                description={keypoint.description}
              />
            ))}
          </div>
        </div>
      </section>

      <ApproachSection />
      <Team />
      <Projects />
    </div>
  );
};

export default AboutUs;
