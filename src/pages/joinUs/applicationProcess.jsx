import { Heading, Paragraph } from "../../components";



const ApplicationProcess = () => {
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
  </div>
</section>
    )
}

export default ApplicationProcess;