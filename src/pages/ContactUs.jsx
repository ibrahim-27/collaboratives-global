import ContactUsForm from "../components/ContactUsForm";
import Office from "../components/Office";
import PageTitle from "../components/PageTitle";
import WorldMap from "../components/WorldMap";

const offices = [
  {
    country: "Lahore, Pakistan",
    phone: "+923008477546",
    email: "asim.nazir@collaborativesglobal.com",
    address: "27 NICHS Lahore, Pakistan",
    position: [31.5204, 74.3587],
  },
  {
    country: "Ajman, UAE",
    phone: "+971585470045",
    email: "info@collaborativesglobal.com",
    address: "Ajman Free Zone Ajman, UAE",
    position: [25.2048, 55.2708],
  },
  {
    country: "Frankfurt, Germany",
    phone: "+4917643304907",
    email: "ahsan.nazir@collaborativesglobal.com",
    address: "Bad homburg, Germany",
    position: [52.52, 13.405],
  },
  {
    country: "London, UK",
    phone: "+447828315225",
    email: "info@collaborativesglobal.com",
    address: "London, UK",
    position: [53.4808, -2.2426],
  },
  {
    country: "California, USA",
    phone: "+249115457754",
    email: "info@collaborativesglobal.com",
    address: "California, USA",
    position: [37.7749, -122.4194],
  },
  {
    country: "Manama, Bahrain",
    phone: "+973f36060632",
    email: "info@collaborativesglobal.com",
    address: "Manama, Bahrain",
    position: [26.2285, 50.5860],
  },
];

const ContactUs = () => {
  return (
    <div className="flex flex-col">
      <PageTitle
        title="Get in Touch"
        description="We would love to hear from you. Please reach out to us through any of the following offices."
        bgImg="bg-contact"
        bgPosition="center"
      />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 flex flex-col gap-20">
        <ContactUsForm />
        
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Our Global Presence
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at one of our offices around the world.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office, index) => (
              <Office key={index} office={office} />
            ))}
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <WorldMap office={offices} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
