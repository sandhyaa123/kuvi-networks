
import Heading from "../typography/Heading";
import Paragraph from "../typography/paragraph";
import { Link } from "react-router-dom";
import StepCard from "./StepCard";

const stepsData = [
  {
    step: 1,
    title: "Initial consultation",
    content: "We understand your requirements, goals, and team needs.",
  },
  {
    step: 2,
    title: "Team assembly",
    content: "We source, recruit, and onboard the right talent for you.",
  },
  {
    step: 3,
    title: "Onboarding",
    content: "We help you set up your company policies, find office space, and procure laptops etc.",
  },
  {
    step: 4,
    title: "Fixed service fee",
    content: "We charge a fixed monthly service fee, while all other costs, including team salaries, are transparently passed on to you without any markup.",
  },
  {
    step: 5,
    title: "Ongoing management",
    content: "Continuous support, payroll, compliance, and team management.",
  },
];


const HowItWorks = () => {
  return (
    <div className="bg-white min-h-max">
      <section className="py-16 px-4 md:px-8 lg:px-16 mx-auto max-w-7xl">
        <div className="mb-8">
          <Heading styleCss="text-center">How it works</Heading>
          <Paragraph styleCss="text-center">
            Our streamlined process ensures efficiency and clarity at every step of your journey with us.
          </Paragraph>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="md:block h-full w-1 bg-indigo-200 hidden absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="md:space-y-0 space-y-12">
            {stepsData.map((stepData, index) => (
              <StepCard
                key={stepData.step}
                step={stepData.step}
                title={stepData.title}
                content={stepData.content}
                isRight={(index+1) % 2 === 0} 
              />
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-8">
          <Link
            to="/how-it-works"
            className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-50 hover:bg-indigo-700 hover:text-indigo-50 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8 text-base font-medium text-indigo-900 shadow-md"
          >
            Know more
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;