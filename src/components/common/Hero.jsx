import diverseTeamColl from "../../assets/images/diverseTeamColl.jpeg";
import Heading from "../typography/Heading";
import Paragraph from "../typography/paragraph";


const Hero = () => {
  return (
    <div className="bg-indigo-50 relative overflow-hidden">
      <div className="mx-auto px-6 py-20 lg:py-20 container">
        <div className="lg:flex-row items-center flex flex-col">
          <div className="lg:w-1/2 lg:pr-12 lg:mb-0 mb-12">
            <Heading color="text-indigo-900">
            Setup your tech team in India - with full control &
            transparency
            </Heading>
            <Paragraph>Focus on building your product while we handle the rest – from
            hiring to onboarding, payroll, compliances, procurement et al</Paragraph>

             <a
           href="https://calendly.com/kuvi-networks/explore-kuvi-networks"  
           target="_blank"
           className="inline-flex border border-indigo-500 focus:outline-none focus:ring-2
                  focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-700 transition-all duration-300 transform
                  hover:scale-105 justify-center rounded-md py-3 px-8 bg-indigo-600 text-base font-medium text-white
                  shadow-sm"
           >
             Schedule a free consultation
           </a>
          </div>
          <div className="lg:w-1/2 relative">
            <img
              alt="A diverse, professional team collaborating in a modern office"
            src={diverseTeamColl}
              className="rounded-xl shadow-2xl
                  w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
