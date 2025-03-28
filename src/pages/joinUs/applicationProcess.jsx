import { Heading, Paragraph } from "../../components";
import { usePostHog } from 'posthog-js/react';



const ApplicationProcess = () => {
  const posthog = usePostHog();

    return (
        <section className="py-20 bg-gray-50">
  <div className="mx-auto px-6 container">
    <Heading styleCss={'text-black text-center'}>How to join our talent pool?</Heading>
    <Paragraph styleCss={'text-center mx-auto mb-16 max-w-3xl'}>Our streamlined process makes it easy for you to apply
    and get connected with top companies.</Paragraph>
    <div className="relative">
      <div className="md:block h-1 bg-indigo-200 hidden absolute top-1/2 left-0 right-0 transform -translate-y-1/2
          z-0"></div>
      <div className="md:grid-cols-4 grid grid-cols-1 gap-8 relative z-10">
        <div className="bg-white rounded-lg shadow-md text-center p-6">
          <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-full items-center justify-center mb-6 flex">
            <span className="text-3xl">🔍</span>
          </div>
          <p className="text-xl font-bold text-gray-800 mb-2">1. Submit your application</p>
          <p className="text-gray-600">Click the 'Apply Now' button and fill out the Google Form with your details.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md text-center p-6">
          <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-full items-center justify-center mb-6 flex">
            <span className="text-3xl">📞</span>
          </div>
          <p className="text-xl font-bold text-gray-800 mb-2">2. Screening & shortlisting</p>
          <p className="text-gray-600">Our team reviews your application and shortlists candidates matching company
              requirements.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md text-center p-6">
          <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-full items-center justify-center mb-6 flex">
            <span className="text-3xl">🤝</span>
          </div>
          <p className="text-xl font-bold text-gray-800 mb-2">3. Interview with the company</p>
          <p className="text-gray-600">Get interviewed directly by the hiring company – no intermediaries.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md text-center p-6">
          <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-full items-center justify-center mb-6 flex">
            <span className="text-3xl">🚀</span>
          </div>
          <p className="text-xl font-bold text-gray-800 mb-2">4. Get hired & start working</p>
          <p className="text-gray-600">Once selected, join the company directly with full control over your role and
              policies.</p>
        </div>
      </div>
    </div>
     
     <div className="w-full flex justify-center mt-8">
     <a 
            href="https://forms.gle/sh68Te2Z5ZtoFsgt6" 
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8 bg-indigo-600 text-base font-medium text-indigo-50 shadow-sm"

            onClick={() =>  posthog?.capture('join_us_page_apply_now_clicked')}
          
          >
           Apply Now
          </a>
     </div>
  </div>
  
</section>
    )
}

export default ApplicationProcess;