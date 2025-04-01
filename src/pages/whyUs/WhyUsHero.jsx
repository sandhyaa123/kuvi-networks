

// const WhyUsHero = () => {
//     return (
//         <div className="text-center mb-20">
//         <Heading>Why us</Heading>
//         <Paragraph styleCss={"mx-auto max-w-3xl"}>
//           We deliver exceptional value through a unique approach that puts you
//           in control while we handle the complexities.
//         </Paragraph>
//       </div>
//     )
// }

// export default WhyUsHero;

import { Heading, Paragraph } from '../../components';
import { usePostHog } from "posthog-js/react";
import whyUs from '../../assets/images/why-us.jpeg';

const WhyUsHero = () => {
    const posthog = usePostHog();
  
    return (
        <div className="bg-indigo-700 relative overflow-hidden flex flex-col-reverse lg:block">
        <div className="mx-auto max-w-7xl">
          <div className="pb-8 bg-indigo-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-24 xl:pt-16 relative z-10">
            <div className="pt-10 sm:pt-16 lg:pt-12 lg:pb-12 lg:max-w-lg">
              <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center lg:text-left">
                  <Heading color='text-white'>Why us ?</Heading>
                      <Paragraph styleCss={'text-indigo-100 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'}> We deliver exceptional value through a unique approach that puts you
                      in control while we handle the complexities.</Paragraph>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://calendly.com/kuvi-networks/explore-kuvi-networks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex border border-indigo-500 focus:outline-none focus:ring-2
                   focus:ring-indigo-500 focus:ring-offset-2 hover:text-indigo-700 justify-center rounded-md py-3 px-6
                   text-indigo-600 bg-white text-base font-medium shadow-sm w-full"
                    onClick={() =>
                      posthog?.capture(
                        "why_us_page_schedule_call_clicked"
                      )
                    }
                  >
                    Schedule a free consultation
                  </a>
                </div>
              </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img alt="A timeline graphic showing connected team members in a seamless team-building process"
          src={whyUs}
           className="object-cover h-56
              w-full sm:h-72 md:h-96 lg:w-full lg:h-full" />
        </div>
      </div>
    )
}

export default WhyUsHero;