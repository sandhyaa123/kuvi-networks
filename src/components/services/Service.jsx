import Heading from "../typography/Heading";
import LabelHeading from "../typography/labelHeading";
import Paragraph from "../typography/paragraph";
import { Link } from "react-router-dom";

const servicesData = [
  {
    icon: "🌟",
    title: "Team sourcing & Onboarding",
    description: "We source, hire, and onboard the best tech and non-tech talent, tailored to your needs.",
  },
  {
    icon: "📊",
    title: "HR & Admin management",
    description: "From payroll and policies to legal compliance – we handle it all.",
  },
  {
    icon: "💸",
    title: "Finance management",
    description: "Seamless processing of salaries, reimbursements, tax deductions, provident fund, and payslips.",
  },
  {
    icon: "💻",
    title: "Infrastructure support",
    description: "Office space, equipment, and onboarding kits to empower your team.",
  },
  {
    icon: "🔥",
    title: "Ongoing team management",
    description: "Continuous performance monitoring and retention strategies to keep your team motivated.",
  },
  {
    icon: "⚖️",
    title: "Legal & Compliance support",
    description: "We ensure you are compliant with all local laws and regulations.",
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
    <div className="text-4xl mb-4">{icon}</div>
    <LabelHeading color="text-gray-800">{title}</LabelHeading>
    <Paragraph>{description}</Paragraph>
  </div>
);

const Services = () => (
  <section className="py-20 bg-indigo-50">
    <div className="mx-auto px-6 container">
      <div className="mx-auto text-center mb-16 max-w-3xl">
        <Heading>Our services - Your end-to-end team management partner</Heading>
        <Paragraph>We handle everything so you can focus on building the product you've always envisioned.</Paragraph>
        <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
      </div>
      <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-10">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
    <div className="w-full flex items-center justify-center mt-8">
      <Link 
        to="/services" 
        className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-50 hover:bg-indigo-700 hover:text-indigo-50 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8 text-base font-medium text-indigo-900 shadow-md"
      >
        Know more
      </Link>
    </div>
  </section>
);

export default Services;