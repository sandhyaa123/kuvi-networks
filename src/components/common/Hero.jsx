import { useEffect, useState } from "react";
import diverseTeamColl from "../../assets/images/diverseTeamColl.jpeg";
import Heading from "../typography/Heading";
import Paragraph from "../typography/paragraph";
import { usePostHog } from 'posthog-js/react';

const Hero = () => {
    const posthog = usePostHog();
    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst((prevState) => !prevState);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-indigo-50 relative overflow-hidden">
            <div className="mx-auto px-6 py-20 lg:py-20 container">
                <div className="lg:flex-row items-center flex flex-col">
                    <div className="lg:w-1/2 lg:pr-12 lg:mb-0 mb-12">
                        <Heading styleCss="text-indigo-900 relative leading-relaxed" >

                            <div className={`inline-block relative w-32 min-w-64 h-10 mb-4 align-middle mr-2`}>
                                <span
                                    style={{
                                        opacity: showFirst ? '1' : '0',
                                        transform: showFirst ? 'translateY(0)' : 'translateY(-110%)',
                                        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                                    }}
                                    className="absolute top-0 left-0 inline-block w-full text-center"
                                >
                                    Setup
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
                        </Heading>

                        {/* <Heading styleCss="text-indigo-900" >
    <span className="relative ml-3 h-[1em] w-36 overflow-hidden">
    <span
      className="absolute h-full w-full -translate-y-full animate-slide leading-none"
    >
        Setup
       </span>

     <span
       className="absolute h-full w-full -translate-y-full animate-slide leading-none [animation-delay:0.83s]"
       >
        Outsource
       </span>
       </span>
      your own tech team - with full control & transparency
     </Heading> */}


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


// import React, { useState, useEffect } from 'react';

// const HeadingSwitcher = () => {
//   const [showFirst, setShowFirst] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowFirst(prevState => !prevState);
//     }, 3000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
//       <div className="w-full max-w-4xl">
//         <div className="text-center">
//           <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight"></p>
//           <div className="h-14 sm:h-16 md:h-20 mb-4 relative">
//             {/* Heading 1 */}
//             <div
//               style={{
//                 opacity: showFirst ? '1' : '0',
//                 transform: showFirst ? 'translateY(0px)' : 'translateY(-20px)',
//                 transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
//               }}
//               className="w-full absolute"
//             >
//               <span
//                 className="text-indigo-600"
//                 style={{
//                   opacity: showFirst ? '1' : '0',
//                   transform: showFirst ? 'translateY(0px)' : 'translateY(-10px)',
//                   transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
//                 }}
//               >
//                 Setup
//               </span>
//               your own tech team – with full control & transparency
//             </div>
//             {/* Heading 2 */}
//             <div
//               style={{
//                 opacity: showFirst ? '0' : '1',
//                 transform: showFirst ? 'translateY(20px)' : 'translateY(0px)',
//                 transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
//               }}
//               className="w-full absolute"
//             >
//               <span
//                 className="text-indigo-600"
//                 style={{
//                   opacity: showFirst ? '0' : '1',
//                   transform: showFirst ? 'translateY(10px)' : 'translateY(0px)',
//                   transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
//                 }}
//               >
//                 Outsource
//               </span>
//               your own tech team – with full control & transparency
//             </div>
//           </div>
//           <p></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeadingSwitcher;
