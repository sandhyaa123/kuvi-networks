import { useEffect, useRef, useState } from "react";
import diverseTeamColl from "../../assets/images/diverseTeamColl.jpeg";
import Heading from "../typography/Heading";
import Paragraph from "../typography/paragraph";
import { usePostHog } from 'posthog-js/react';

const AnimatedText = ({ showAdditionalText, setShowAdditionalText }) => {
    const [firstWord, setFirstWord] = useState('Outsource');
    const [additionalText, setAdditionalText] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const [isShifting, setIsShifting] = useState(false);
    const firstWordRef = useRef(null);
    
    useEffect(() => {
        const originalWidth = firstWordRef.current?.offsetWidth;
        
        const timer1 = setTimeout(() => {
            setFirstWord('<s>Outsource</s>');

            const timer2 = setTimeout(() => {
                if (firstWordRef.current) {
                    firstWordRef.current.style.minWidth = `${originalWidth}px`;
                }
                setIsAnimating(true);
                setFirstWord('Let us setup');
                setIsShifting(true);

                const timer3 = setTimeout(() => {
                    setIsAnimating(false);
                    setAdditionalText(' - with full control and transparency');
                    setShowAdditionalText(true);
                }, 1000);

                return () => clearTimeout(timer3);
            }, 1000);

            return () => clearTimeout(timer2);
        }, 1000);

        return () => clearTimeout(timer1);
    }, [setShowAdditionalText]);

    return (
        <span className="flex justify-center flex-col flex-wrap items-start transition-all duration-300">
            <span className="text-start relative">
                <span className="block text-start min-h-max">
                    <span
                        ref={firstWordRef}
                        className={`inline-flex transition-all ease-in duration-500 ${isAnimating ? 'animate-slideDown' : ''}`}
                        dangerouslySetInnerHTML={{ __html: firstWord }}
                    />{' '}
                    <span 
                        className={`transition-all ease-in duration-200 inline-block ${isShifting ? 'transform translate-x-1 opacity-100' : ''}`}>
                        your tech team in India
                    </span>
                </span>
                <span
                    className={`absolute text-start left-0 right-0 transition-all duration-500 ${
                        showAdditionalText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                    }`}
                >
                    {additionalText}
                </span>
            </span>
        </span>
    );
};

const Hero = () => {
    const posthog = usePostHog();
    const [showAdditionalText, setShowAdditionalText] = useState(false);
  
    return (
        <div className="bg-indigo-50 relative overflow-hidden">
            <div className="mx-auto px-6 pb-20 pt-10 lg:py-20 container">
                <div className="flex flex-col lg:flex-row items-center">
                
                    {/* Text Content */}
                    <div className="lg:w-1/2 lg:pr-12 lg:mb-0 mb-12 ">
                        <Heading styleCss={`text-indigo-900 `}>
                            <AnimatedText 
                              showAdditionalText={showAdditionalText} 
                              setShowAdditionalText={setShowAdditionalText} 
                            />
                        </Heading>

                        <Paragraph styleCss={`text-start transition-all duration-500 max-w-[90%] ${
                            showAdditionalText ? 'translate-y-14 md:translate-y-10 opacity-100' : 'translate-y-0 opacity-100'
                        }`} >
                            Focus on building your product while we handle the rest – from
                            hiring to onboarding, payroll, compliance, procurement, etc.
                        </Paragraph>

                        {/* Call to Action Button */}
                        <a
                            href="https://calendly.com/kuvi-networks/explore-kuvi-networks"
                            target="_blank"
                            className={`inline-flex border border-indigo-500 focus:outline-none focus:ring-2
                            focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-700 transform
                            hover:scale-105 justify-center rounded-md py-3 px-6 bg-indigo-600 text-base font-medium text-white
                            shadow-sm mt-4 w-full md:w-1/2 lg:w-auto
                            transition-all duration-500 max-w-[90%] ${
                                showAdditionalText ? 'translate-y-14 md:translate-y-10 opacity-100' : 'translate-y-0 opacity-100'
                            }
                        `}
                            onClick={() => posthog?.capture('home_page_schedule_call_clicked')}
                        >
                            Schedule a free consultation
                        </a>
                    </div>
                    <div className={`lg:w-1/3 transition-all duration-500 max-w-[90%] mx-auto ${
                            showAdditionalText ? 'translate-y-14 lg:translate-y-0 opacity-100' : 'translate-y-0 opacity-100' }
                        `}>
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
