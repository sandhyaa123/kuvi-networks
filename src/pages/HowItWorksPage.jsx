import { useEffect } from 'react';
import howWorks from '../assets/images/howWorks.jpeg';
import talentPool from '../assets/images/talentPool.jpg';
import teamSupport from '../assets/images/teamSupport.jpg';
import { Heading, Paragraph } from '../components';

const HowItWorksPage = () => {
    
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
   },[]);
    return (
        <div>
    <div className="bg-indigo-600 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="pb-8 bg-indigo-600 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-24 xl:pt-16 relative z-10">
          <div className="pt-10 sm:pt-16 lg:pt-12 lg:pb-12 lg:max-w-lg">
            <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="text-center lg:text-left">
                {/* <p className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">Build Your Dream Team
                    in 4 Simple Steps</p> */}
                <Heading color='text-white'>Build your dream team
                in 4 simple steps</Heading>
                {/* <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl
                    lg:mx-0">From initial consultation to ongoing management - we handle everything, so you can focus on
                    your product.</p> */}
                    <Paragraph styleCss={'text-indigo-100 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'}>From initial consultation to ongoing management - we handle everything, so you can focus on
                    your product.</Paragraph>
                {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button type="submit" className="flex border border-transparent hover:bg-gray-50 w-full items-center
                        justify-center px-8 py-3 text-base font-medium rounded-md text-indigo-700 bg-white md:py-4
                        md:text-lg md:px-10">Get Started</button>
                  </div>
                </div> */}
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden">
        <img alt="A timeline graphic showing connected team members in a seamless team-building process"
        //  src="https://placehold.co/800x600?text=Timeline+Graphic+with+Connected+Team+Members"
        src={howWorks}
         className="object-cover h-56
            w-full sm:h-72 md:h-96 lg:w-full lg:h-full" />
      </div>
    </div>
    <div className="py-28 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          {/* <p className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Why Our Process Stands Out</p> */}
          <Heading>Why our process stands out</Heading>
          {/* <p className="mt-4 text-xl text-gray-500 mx-auto max-w-2xl">We offer more than just team-building – we provide full
              control, transparency, and long-term reliability.</p> */}
            <Paragraph styleCss={'mt-4 text-gray-500 mx-auto max-w-2xl'}>We offer more than just team-building – we provide full
            control, transparency, and long-term reliability.</Paragraph>
        </div>
        <div className="mt-12">
          <div className="sm:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-8">
            <div className="pt-6">
              <div className="bg-white rounded-lg shadow-lg px-6 pb-8 flow-root">
                <div className="-mt-6">
                  <div>
                    <span className="items-center justify-center bg-indigo-500 rounded-md shadow-lg inline-flex p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_Bx8sQiD88">                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>                                        </svg>
                    </span>
                  </div>
                  <p className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Full Control</p>
                  <p className="mt-5 text-base text-gray-500">You decide on policies, salary structures, and team
                      operations.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="bg-white shadow-lg rounded-lg px-6 pb-8 flow-root">
                <div className="-mt-6">
                  <div>
                    <span className="items-center justify-center bg-indigo-500 rounded-md shadow-lg inline-flex p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_En6OAkfO3">                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>                                        </svg>
                    </span>
                  </div>
                  <p className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Transparency</p>
                  <p className="mt-5 text-base text-gray-500">Direct communication with your team – no hidden costs.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="bg-white shadow-lg rounded-lg px-6 pb-8 flow-root">
                <div className="-mt-6">
                  <div>
                    <span className="items-center justify-center bg-indigo-500 rounded-md shadow-lg inline-flex p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_1rbwsxUHG">                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>                                        </svg>
                    </span>
                  </div>
                  <p className="mt-8 text-lg font-medium text-gray-900 tracking-tight">End-to-End Management</p>
                  <p className="mt-5 text-base text-gray-500">From hiring to HR and finance – we handle it all.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="bg-white shadow-lg rounded-lg px-6 pb-8 flow-root">
                <div className="-mt-6">
                  <div>
                    <span className="items-center justify-center bg-indigo-500 rounded-md shadow-lg inline-flex p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_MAlCcQYW5">                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>                                        </svg>
                    </span>
                  </div>
                  <p className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Scalable & Flexible</p>
                  <p className="mt-5 text-base text-gray-500">Easily scale your team up or down as needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto px-4 py-16 container">
      <div className="text-center mx-auto mb-16 max-w-3xl">
        {/* <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Seamless, End-to-End Team-Building Process</p> */}
        <Heading>Our seamless, end-to-end team-building process</Heading>
        <p className="text-lg text-gray-600">We take care of the heavy lifting – from hiring and onboarding to team management –
            so you can focus entirely on growing your business.</p>
      </div>
      <div className="md:flex-row items-center mb-16 flex flex-col gap-8">
        <div className="w-full md:w-1/3 justify-center flex">
          <div className="bg-indigo-100 rounded-full p-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_fmGKYhJYW">                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>                    </svg>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-2xl font-bold text-indigo-700 mb-3">Step 1: Initial Consultation & Requirement Analysis</p>
            <p className="text-gray-600 mb-4">We start by understanding your specific team requirements, including skills,
                experience, and team size. Our experts collaborate with you to outline the scope, objectives, and policies
                for your dedicated team.</p>
            <div className="mb-6">
              <p className="font-semibold text-gray-700 mb-2">Key Inclusions:</p>
              <ul className="space-y-2">
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_noLIwleHJ">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Free consultation with an expert.
                </li>
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_hYWXOx7Ic">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Detailed needs analysis.
                </li>
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_l0oyCzgw2">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Alignment of policies and team structure.
                </li>
              </ul>
            </div>
                <a
               href="https://calendly.com/kuvi-networks/explore-kuvi-networks"  
               target="_blank"
               className="inline-flex border border-indigo-500 focus:outline-none focus:ring-2
                focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-700 transition duration-300 justify-center
                rounded-md py-2 px-4 bg-indigo-600 text-sm font-medium text-white shadow-sm"
               >
                 Schedule Your Free Consultation
              </a>
          </div>
        </div>
      </div>
      <div className="md:flex-row items-center mb-16 flex flex-col gap-8">
        <div className="w-full md:w-1/3 md:order-last justify-center flex">
          <div className="bg-indigo-100 rounded-full p-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_3DHOWm6wq">                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>                    </svg>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-2xl font-bold text-indigo-700 mb-3">Step 2: Talent Sourcing & Team Assembly</p>
            <p className="text-gray-600 mb-4">Our recruitment specialists source, vet, and hire the best talent in India based
                on your requirements. You have complete control over the selection process, ensuring the team meets your
                standards.</p>
            <div className="mb-6">
              <p className="font-semibold text-gray-700 mb-2">Key Inclusions:</p>
              <ul className="space-y-2">
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_nzCA8znjW">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Tailored sourcing and recruiting.
                </li>
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_rdtSR5DIk">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Thorough background and skills verification.
                </li>
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_BTkNZEdW6">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Candidate approval by you before hiring.
                </li>
              </ul>
            </div>
            <img alt="A visual representation of the hiring stages and talent pool" 
            // src="https://placehold.co/600x200/indigo/white?text=Talent+Pool+Graphic" 
            src={talentPool}
            className="rounded-lg w-full" />
          </div>
        </div>
      </div>
      <div className="md:flex-row items-center mb-16 flex flex-col gap-8">
        <div className="w-full md:w-1/3 justify-center flex">
          <div className="bg-indigo-100 rounded-full p-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_PQJtn0LDT">                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>                    </svg>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-2xl font-bold text-indigo-700 mb-3">Step 3: Onboarding & Infrastructure Setup</p>
            <p className="text-gray-600 mb-4">We take care of the entire onboarding process, including legal documentation,
                payroll setup, and workspace infrastructure. Your team will be equipped with everything they need to be
                productive from day one.</p>
            <div className="mb-6">
              <p className="font-semibold text-gray-700 mb-2">Key Inclusions:</p>
              <ul className="space-y-2">
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_tcVYVA6wH">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Legal documentation and contracts.
                </li>
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_dFGA3et2E">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Payroll setup with direct payment channels.
                </li>
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_n4bht2w44">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Office space, equipment, and onboarding kits.
                </li>
              </ul>
            </div>
            <button type="submit" className="inline-flex border border-indigo-500 focus:outline-none focus:ring-2
                focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-700 transition duration-300 justify-center
                rounded-md py-2 px-4 bg-indigo-600 text-sm font-medium text-white shadow-sm">Get Your Team Ready in No
                Time</button>
          </div>
        </div>
      </div>
      <div className="md:flex-row items-center flex flex-col gap-8">
        <div className="w-full md:w-1/3 md:order-last justify-center flex">
          <div className="bg-indigo-100 rounded-full p-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_zS3xD5pFn">                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>                    </svg>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-2xl font-bold text-indigo-700 mb-3">Step 4: Ongoing Team Management & Support</p>
            <p className="text-gray-600 mb-4">We handle day-to-day operations, including HR management, payroll processing, and
                legal compliance. Our continuous performance monitoring and retention strategies ensure a motivated,
                productive, and stable team.</p>
            <div className="mb-6">
              <p className="font-semibold text-gray-700 mb-2">Key Inclusions:</p>
              <ul className="space-y-2">
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_TPiRBekcn">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Regular performance reviews.
                </li>
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_3HRmuNtZK">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Payroll and benefits administration.
                </li>
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_7I10Wl43x">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Compliance with legal and regulatory requirements.
                </li>
                <li className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_3Y9HDwnwi">                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>                                </svg>
                  Continuous employee engagement strategies.
                </li>
              </ul>
            </div>
            <img alt="An icon-based flowchart showing the management lifecycle" 
            // src="https://placehold.co/600x200/indigo/white?text=Management+Lifecycle+Flowchart" 
            src={teamSupport}
            className="rounded-lg w-full" />
          </div>
        </div>
      </div>
    </div>
    <div className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          {/* <p className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Your Team-Building Journey in One
              Glance</p> */}
         <Heading>Your team-building journey in one
         glance</Heading>
        </div>
        <div className="mt-12 mx-auto max-w-5xl">
          <div className="relative">
            <div className="sm:block w-full h-1 bg-gray-200 hidden absolute top-1/2 left-0 transform -translate-y-1/2"></div>
            <div className="justify-between relative flex">
              <div className="text-center">
                <div className="items-center flex flex-col">
                  <div className="items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_w65Nl7Ua1">                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>                                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Initial Consultation</p>
                </div>
              </div>
              <div className="text-center">
                <div className="items-center flex flex-col">
                  <div className="items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_mlTWBydVf">                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>                                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Talent Sourcing</p>
                </div>
              </div>
              <div className="text-center">
                <div className="items-center flex flex-col">
                  <div className="items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_Qu133RUGg">                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>                                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Onboarding & Setup</p>
                </div>
              </div>
              <div className="text-center">
                <div className="items-center flex flex-col">
                  <div className="items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_NLv9ugqXl">                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>                                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Ongoing Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default HowItWorksPage;