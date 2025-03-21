import Heading from "./typography/Heading";
import LabelHeading from "./typography/labelHeading";
import Paragraph from "./typography/paragraph";
import { Link } from "react-router-dom";
const HowItWorks = () => {
  return (
    <div className="bg-white min-h-max">
      <section className="py-16 px-4 md:px-8 lg:px-16 mx-auto max-w-7xl">
        <div>
          {/* <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            How It Works
          </p> */}
          <div className="mb-8">
          <Heading styleCss="text-center">How it works</Heading>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          {/* <p className="text-lg text-gray-600 mx-auto text-center mb-12 max-w-3xl">
            Our streamlined process ensures efficiency and clarity at every step
            of your journey with us.
          </p> */}
          <Paragraph styleCss="text-center">Our streamlined process ensures efficiency and clarity at every step
          of your journey with us.</Paragraph>
          <div className="relative">
            <div className="md:block h-full w-1 bg-indigo-200 hidden absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="md:space-y-0 space-y-12">
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:text-right md:pr-12">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-2.5 top-5 z-10 md:block hidden"></div>
                  <div className="bg-white shadow-lg rounded-lg md:ml-auto p-6 hover:shadow-xl transition duration-300 max-w-lg">
                   {/* should be come in one line with title with same style */}
                    <div className="text-2xl mb-3 text-indigo-600 md:hidden">
                      1.
                    </div>
                    {/* <p className="text-xl font-bold text-gray-800 mb-3">
                      Initial Consultation
                    </p> */}
                    <LabelHeading color="text-gray-800"> Initial Consultation</LabelHeading>
                    {/* <p className="text-gray-600">
                      We understand your requirements, goals, and team needs.
                    </p> */}
                    <Paragraph>We understand your requirements, goals, and team needs.</Paragraph>
                  </div>
                </div>
                <div className="md:hidden"></div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:block hidden"></div>
                <div className="md:pl-12">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-2.5 top-5 z-10  md:block hidden"></div>
                  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 max-w-lg">
                    <div className="text-2xl mb-3 text-indigo-600 md:hidden">
                      2.
                    </div>
                    {/* <p className="text-xl font-bold text-gray-800 mb-3">
                      Team Assembly
                    </p> */}
                    <LabelHeading color="text-gray-800">Team assembly</LabelHeading>
                    {/* <p className="text-gray-600">
                      We source, recruit, and onboard the right talent for you.
                    </p> */}
                    <Paragraph> We source, recruit, and onboard the right talent for you.</Paragraph>
                  </div>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:text-right md:pr-12">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-2.5 top-5 z-10  md:block hidden"></div>
                  <div className="bg-white shadow-lg rounded-lg md:ml-auto p-6 hover:shadow-xl transition duration-300 max-w-lg">
                    <div className="text-2xl mb-3 text-indigo-600 md:hidden">
                      3.
                    </div>
                    {/* <p className="text-xl font-bold text-gray-800 mb-3">
                      Onboarding & Integration
                    </p> */}
                    <LabelHeading color="text-gray-800">Onboarding</LabelHeading>
                    {/* <p className="text-gray-600">
                      Seamless integration with your company policies, payroll,
                      and infrastructure.
                    </p> */}
                    <Paragraph>We help you setup your company policies, find office space and procure laptops etc.</Paragraph>
                  </div>
                </div>
                <div className="md:hidden"></div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:block hidden"></div>
                <div className="md:pl-12">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-2.5 top-5 z-10  md:block hidden"></div>
                  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 max-w-lg">
                    <div className="text-2xl mb-3 text-indigo-600 md:hidden">
                      4.
                    </div>
                    {/* <p className="text-xl font-bold text-gray-800 mb-3">
                      Ongoing Management
                    </p> */}
                    <LabelHeading color="text-gray-800">Fixed service fee</LabelHeading>
                    {/* <p className="text-gray-600">
                      Continuous support, compliance, and team retention
                      strategies.
                    </p> */}
                    <Paragraph>We charge a fixed monthly service fee, while all other costs, including team salaries, are transparently passed on to you without any markup.</Paragraph>
                  </div>
                </div>
              </div>
              
              
            
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:text-right md:pr-12">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-2.5 top-5 z-10  md:block hidden"></div>
                  <div className="bg-white shadow-lg rounded-lg md:ml-auto p-6 hover:shadow-xl transition duration-300 max-w-lg">
                    <div className="text-2xl mb-3 text-indigo-600 md:hidden">
                      5.
                    </div>
                    {/* <p className="text-xl font-bold text-gray-800 mb-3">
                      Onboarding & Integration
                    </p> */}
                    <LabelHeading color="text-gray-800">Ongoing management</LabelHeading>
                    {/* <p className="text-gray-600">
                      Seamless integration with your company policies, payroll,
                      and infrastructure.
                    </p> */}
                    <Paragraph>Continuous support, payroll, compliance, and team management.</Paragraph>
                    </div>
                </div>
                <div className="md:hidden"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-8">
          <Link 
            to="/how-it-works" 
            className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-50 hover:bg-indigo-700 hover:text-indigo-50 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8  text-base font-medium text-indigo-900 shadow-md"
          >
            Know more
          </Link>
          
          {/* <Link 
            to="/how-it-works" 
            className="m-2 inline-flex focus:outline-none focus:ring-2 focus:ring-indigo-50 hover:bg-indigo-700 hover:text-indigo-50 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8  text-base font-medium text-indigo-900 shadow-xl"
          >
            Know more
          </Link> */}

          {/* <Link 
            to="/how-it-works" 
            className="m-2 inline-flex focus:outline-none focus:ring-2 focus:ring-indigo-50 hover:underline transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8  text-base font-medium text-indigo-900"
          >
            Know more
          </Link> */}
        </div>
      </section>
      {/* // no more button - redirect to how it works in all section which having their own page */}
    </div>
  );
};

export default HowItWorks;
