import { Heading, LabelHeading, Paragraph } from "../../components";

const CheckIcon = () => (
  <svg
    className="h-6 w-6 text-indigo-500 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const servicesData = [
  {
    id: 1,
    title: "Team sourcing & onboarding",
    description: "We identify, recruit, and onboard top-tier tech and non-tech professionals who align with your company culture and requirements.",
    features: [
      "Custom talent acquisition tailored to your needs",
      "Fast-track hiring process",
      "Seamless onboarding experience",
      "Timely salary disbursement",
      "Automated payslip generation"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "HR & admin management",
    description: "From payroll processing to leave policies, we handle all HR functions to keep your team productive and compliant.",
    features: [
      "Employee policies & contracts",
      "Payroll & benefits administration",
      "Performance tracking & engagement",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Finance management",
    description: "We take care of salary processing, reimbursements, and financial compliance – ensuring accuracy and transparency.",
    features: [
      "Timely salary disbursement",
      "Automated payslip generation",
      "Expense & reimbursement tracking",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Infrastructure support",
    description: "We set up everything your team needs - office spaces, IT equipment, and seamless remote work solutions.",
    features: [
      "Office setup & co-working spaces",
      "Laptops, workstations & IT support",
      "Secure communication tools",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Ongoing team management",
    description: "We ensure ongoing team engagement, monitor performance, and implement retention strategies to sustain productivity.",
    features: [
      "Regular check-ins & feedback loops",
      "Performance evaluations & improvements",
      "Employee retention strategies",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Legal & compliance support",
    description: "Stay fully compliant with Indian labor laws – we manage employment contracts, tax regulations, and corporate governance.",
    features: [
      "Employee contracts & legal documentation",
      "Tax compliance & regulatory adherence",
      "Expert legal advisory support",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

const ServiceCard = ({ title, description, features, icon }) => (
  <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8">
    <div className="h-16 w-16 rounded-md bg-indigo-500 text-white mb-5 flex items-center justify-center">
      {icon}
    </div>
    <LabelHeading styleCss="text-gray-900">{title}</LabelHeading>
    <Paragraph>{description}</Paragraph>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const OurServices = () => {
  return (
    <div className="py-12 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <Heading>Our services</Heading>
          <Paragraph>
            End-to-end services for seamless team management
          </Paragraph>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;