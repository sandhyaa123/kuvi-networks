import { Heading, Paragraph } from "../../components";

const processData = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
    title: "Your own team",
    description: "You decide on policies, salary structures, and team operations",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    ),
    title: "Transparency",
    description: "Direct communication with your team – no hidden costs",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
    title: "End-to-end management",
    description: "From hiring to HR and finance – we handle it all",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        ></path>
      </svg>
    ),
    title: "Scalable & flexible",
    description: "Easily scale your team up or down as needed",
  },
];

const ProcessCard = ({ icon, title, description }) => (
  <div className="pt-6">
    <div className="bg-white rounded-lg shadow-lg px-6 pb-8 flow-root">
      <div className="-mt-6">
        <span className="items-center justify-center bg-indigo-500 rounded-md shadow-lg inline-flex p-3">
          {icon}
        </span>
        <p className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{title}</p>
        <p className="mt-5 text-base text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

const ProcessStandOut = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <Heading>Why our process stands out?</Heading>
          <Paragraph styleCss={'mt-4 text-gray-500 mx-auto max-w-2xl'}>
            We offer more than just team-building – we provide full control, transparency, and long-term reliability
          </Paragraph>
        </div>
        <div className="mt-12">
          <div className="sm:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-8">
            {processData.map(({ id, icon, title, description }) => (
              <ProcessCard key={id} icon={icon} title={title} description={description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStandOut;