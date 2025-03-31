import { useEffect, useState } from "react";
import diverseTeamColl from "../../assets/images/diverseTeamColl.jpeg";
import Heading from "../typography/Heading";
import Paragraph from "../typography/paragraph";
import { usePostHog } from 'posthog-js/react';


 function AnimatedText() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const phrases = [
      "Outsource tech team",
      "<del>Outsource</del> tech team",
      "Setup your own tech team",
      "Setup your own tech team - with full control & transparency",
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(prev => prev < phrases.length - 1 ? prev + 1 : prev);
      }, 2000); // Total animation duration per phrase
  
      return () => clearInterval(interval);
    }, []);

    
  
    return (
      <div className="relative h-32  md:h-12 min-h-max ">
        {phrases.map((phrase, index) => (
          <div
            key={index}
            className={`absolute w-full transition-transform duration-500 ease-in-out bottom-2 md:bottom-0 ${
              activeIndex === index
                ? 'animate-slideIn'
                : 'animate-hideText'
            }
            ${activeIndex == phrases?.length - 1 ? 'md:bottom-2' : ''}
                `}
            dangerouslySetInnerHTML={{ __html: phrase }}
          />
        ))}
      </div>
    );
  }
  
const Hero = () => {
    const posthog = usePostHog();
  
   

    return (
        <div className="bg-indigo-50  relative overflow-hidden">
            <div className="mx-auto px-6 py-20 lg:py-20 container">
                <div className="lg:flex-row items-center flex flex-col">
                    <div className="lg:w-1/2 lg:pr-12 lg:mb-0 mb-12">
                        {/* <Heading styleCss="text-indigo-900 relative leading-relaxed" >

                            <div className={`inline-block relative w-32 min-w-64 h-10 mb-4 align-middle mr-2`}>
                                <span
                                    style={{
                                        opacity: showFirst ? '1' : '0',
                                        transform: showFirst ? 'translateY(0)' : 'translateY(-110%)',
                                        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                                    }}
                                    className="absolute top-0 left-0 inline-block w-full text-center"
                                >
                                    Setup 🛠️
                                </span>
                                <span
                                    style={{
                                        opacity: showFirst ? '0' : '1',
                                        transform: showFirst ? 'translateY(110%)' : 'translateY(0)',
                                        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                                    }}
                                    className="absolute top-0 left-0 inline-block w-full text-center"
                                >
                                    Outsource
                                </span>
                            </div>

                            your own tech team - with full control & transparency
                        </Heading> */}
                        <Heading>
                          <AnimatedText />
                        </Heading>


                        <Paragraph>
                            Focus on building your product while we handle the rest – from
                            hiring to onboarding, payroll, compliance, procurement, etc.
                        </Paragraph>

                        <a
                            href="https://calendly.com/kuvi-networks/explore-kuvi-networks"
                            target="_blank"
                            className="inline-flex border border-indigo-500 focus:outline-none focus:ring-2
                          focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-700 transition-all duration-300 transform
                          hover:scale-105 justify-center rounded-md py-3 px-8 bg-indigo-600 text-base font-medium text-white
                          shadow-sm"
                            onClick={() => posthog?.capture('home_page_schedule_call_clicked')}
                        >
                            Schedule a free consultation
                        </a>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <img
                            alt="A diverse, professional team collaborating in a modern office"
                            src={diverseTeamColl}
                            className="rounded-xl shadow-2xl w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
