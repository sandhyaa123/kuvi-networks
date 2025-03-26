import talentPool from "../../assets/images/talentPool.png";
import { Heading } from "../../components";
import ongoing from "../../assets/images/ongoing.jpeg";
import initialConsultation from "../../assets/images/initialConsultation.jpeg";
import onboarding from "../../assets/images/onboarding.jpeg";
import fixedPrice from "../../assets/images/fixedPrice.jpeg";
import { usePostHog } from 'posthog-js/react';

const steps = [
  {
    number: 1,
    title: "Step 1: Initial consultation",
    description:
      "We start by understanding your specific team requirements, including skills, experience, and team size",
    inclusions: [
      "Free consultation with an expert",
      "Detailed needs analysis",
      "Alignment of policies and team structure"
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        id="Windframe_fmGKYhJYW"
      >
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        ></path>{" "}
      </svg>
    ),
    imageUrl: initialConsultation
  },
  {
    number: 2,
    title: "Step 2: Talent sourcing",
    description:
      "Our recruitment specialists source, vet, and hire the best talent in India based on your requirements",
    inclusions: [
      "Tailored sourcing and recruiting",
      "Thorough background and skills verification",
      "Candidate approval by you before hiring"
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        id="Windframe_3DHOWm6wq"
      >
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>{" "}
      </svg>
    ),
    imageUrl: talentPool
  },
  {
    number: 3,
    title: "Step 3: Onboarding & setup",
    description:
      "We take care of the complete onboarding process, including legal documentation, payroll setup, and workspace infrastructure",
    inclusions: [
      "Legal documentation and contracts",
      "Payroll setup with direct payment channels",
      "Office space, equipment, and onboarding kits"
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        id="Windframe_PQJtn0LDT"
      >
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        ></path>{" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>{" "}
      </svg>
    ),
    imageUrl: onboarding
  },
  {
    number: 4,
    title: "Step 4: Fixed service fee",
    description:
      "We offer a transparent and predictable pricing model with a fixed monthly service fee",
    inclusions: [
      "Transparent pricing model",
      "Full cost visibility",
      "Predictable budgeting"
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        id="Windframe_32qZJtVzX"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
    imageUrl: fixedPrice
  },
  {
    number: 5,
    title: "Step 5: Ongoing management",
    description:
      "We handle day-to-day operations, including HR management, payroll processing, and legal compliance",
    inclusions: [
      "Regular performance reviews",
      "Payroll and benefits administration",
      "Compliance with legal and regulatory requirements",
      "Continuous employee engagement strategies"
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        id="Windframe_zS3xD5pFn"
      >
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>{" "}
      </svg>
    ),
    imageUrl: ongoing
  }
];

const Step = ({ title, description, inclusions, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <p className="text-2xl font-bold text-indigo-700 mb-3">{title}</p>
      {/* <div className="bg-indigo-100 rounded-lg p-2 block md:hidden mb-4">
              <Image imageUrl={imageUrl} />
            </div> */}
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <p className="font-semibold text-gray-700 mb-2">Key inclusions:</p>
        <ul className="space-y-2">
          {inclusions.map((inclusion, index) => (
            <li key={index} className="items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="Windframe_noLIwleHJ"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>{" "}
              </svg>
              {inclusion}
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};

const ProessSteps = () => {
      const posthog = usePostHog();
  
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <Heading>Your team-building journey in one glance</Heading>
          </div>
          <div className="mt-12 mx-auto max-w-5xl">
            <div className="relative">
              <div className="sm:block w-full h-1 bg-gray-200 hidden absolute top-1/2 left-0 transform -translate-y-1/2"></div>
              <div className="justify-between relative flex">
                <div className="text-center">
                  <div className="items-center flex flex-col">
                    <div className="items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white mb-3 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="Windframe_w65Nl7Ua1"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>{" "}
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Initial consultation
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="items-center flex flex-col">
                    <div className="items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white mb-3 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="Windframe_mlTWBydVf"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>{" "}
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Talent sourcing
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="items-center flex flex-col">
                    <div className="items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white mb-3 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="Windframe_Qu133RUGg"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        ></path>{" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>{" "}
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Onboarding & setup
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="items-center flex flex-col">
                    <div className="items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white mb-3 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="Windframe_32qZJtVzX"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Fixed service fee
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="items-center flex flex-col">
                    <div className="items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white mb-3 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="Windframe_NLv9ugqXl"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>{" "}
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Ongoing management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 py-16 container">
        {steps.map((step) => (
          <div
            className="md:flex-row items-center mb-16 flex flex-col gap-8"
            key={step.number}
          >
            <div
              className={`w-full md:w-1/3 justify-center flex ${
                step?.number % 2 === 0 ? "md:order-last" : ""
              }`}
            >
              <div className="flex justify-center">
                <img
                  src={step.imageUrl}
                  alt={`Step ${step.number}`}
                  className="h-60 w-96 object-cover rounded-md shadow-xl"
                  width={128} 
                  height={128} 
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <Step
                title={step.title}
                description={step.description}
                inclusions={step.inclusions}
                imageUrl={step.imageUrl}
              >
                {step?.number === 1 && (
                  <a
                    href="https://calendly.com/kuvi-networks/explore-kuvi-networks"
                    target="_blank"
                    className="inline-flex border border-indigo-500 focus:outline-none focus:ring-2
                focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-700 transition duration-300 justify-center
                rounded-md py-2 px-4 bg-indigo-600 text-sm font-medium text-white shadow-sm"
                onClick={() =>  posthog?.capture('how_it_works_page_schedule_call_clicked')}
          
                 >
                    Schedule your free consultation
                  </a>
                )}
              </Step>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProessSteps;
