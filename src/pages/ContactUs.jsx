import ContactUsForm from "../components/ContactUsForm";
import Office from "../components/Office";
import PageTitle from "../components/PageTitle";
import WorldMap from "../components/WorldMap";

const offices = [
  {
    country: "Lahore, Pakistan",
    phone: "+92090078601",
    email: "pakistan@example.com",
    address: "1234 North Main Street, Karachi, Pakistan",
    position: [31.5204, 74.3587],
  },
  {
    country: "Dubai, UAE",
    phone: "+97190078601",
    email: "uae@example.com",
    address: "5678 Sheikh Zayed Road, Dubai, UAE",
    position: [25.2048, 55.2708],
  },
  {
    country: "Frankfurt, Germany",
    phone: "+49090078601",
    email: "germany@example.com",
    address: "91011 Hauptstraße, Berlin, Germany",
    position: [52.52, 13.405],
  },
  {
    country: "Manchester, UK",
    phone: "+44090078601",
    email: "uk@example.com",
    address: "1213 High Street, London, UK",
    position: [53.4808, -2.2426],
  },
  {
    country: "Colorado, USA",
    phone: "+12090078601",
    email: "usa@example.com",
    address: "1415 Elm Street, New York, NY, USA",
    position: [39.5501, -105.7821],
  },
  {
    country: "Toronto, Canada",
    phone: "+14090078601",
    email: "canada@example.com",
    address: "1617 George Street, Toronto, Canada",
    position: [43.6532, -79.3832],
  },
  {
    country: "Sydney, Australia",
    phone: "+61090078601",
    email: "australia@example.com",
    address: "1617 George Street, Sydney, Australia",
    position: [-33.8688, 151.2093],
  },
];

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-12">
      <PageTitle
        title="Get in Touch"
        description="We would love to hear from you. Please reach out to us through any of
          the following offices."
        bgImg="bg-contact"
        bgPosition="60% 40%"
      />
      
      <div className="p-4 md:px-8 flex flex-col gap-4">
      <ContactUsForm />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">Our Offices</h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {offices.map((office, index) => (
            <Office key={index} office={office} />
          ))}
        </div>
      </div>
      <WorldMap office={offices} />
    </div>
      </div>
  );
};

export default ContactUs;
