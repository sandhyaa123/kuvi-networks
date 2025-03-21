const HowItWorks = () => {
  return (
    <div className="bg-white min-h-max">
      <section className="py-16 px-4 md:px-8 lg:px-16 mx-auto max-w-7xl">
        <div>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            How It Works
          </p>
          <p className="text-lg text-gray-600 mx-auto text-center mb-12 max-w-3xl">
            Our streamlined process ensures efficiency and clarity at every step
            of your journey with us.
          </p>
          <div className="relative">
            <div className="md:block h-full w-1 bg-indigo-200 hidden absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="md:space-y-0 space-y-12">
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:text-right md:pr-12">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-2.5 top-5 z-10 md:block hidden"></div>
                  <div className="bg-white shadow-lg rounded-lg md:ml-auto p-6 hover:shadow-xl transition duration-300 max-w-lg">
                    <div className="text-2xl mb-3 text-indigo-600 md:hidden">
                      1
                    </div>
                    <p className="text-xl font-bold text-gray-800 mb-3">
                      Initial Consultation
                    </p>
                    <p className="text-gray-600">
                      We understand your requirements, goals, and team needs.
                    </p>
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
                      2
                    </div>
                    <p className="text-xl font-bold text-gray-800 mb-3">
                      Team Assembly
                    </p>
                    <p className="text-gray-600">
                      We source, recruit, and onboard the right talent for you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:text-right md:pr-12">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-2.5 top-5 z-10  md:block hidden"></div>
                  <div className="bg-white shadow-lg rounded-lg md:ml-auto p-6 hover:shadow-xl transition duration-300 max-w-lg">
                    <div className="text-2xl mb-3 text-indigo-600 md:hidden">
                      3
                    </div>
                    <p className="text-xl font-bold text-gray-800 mb-3">
                      Onboarding & Integration
                    </p>
                    <p className="text-gray-600">
                      Seamless integration with your company policies, payroll,
                      and infrastructure.
                    </p>
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
                      4
                    </div>
                    <p className="text-xl font-bold text-gray-800 mb-3">
                      Ongoing Management
                    </p>
                    <p className="text-gray-600">
                      Continuous support, compliance, and team retention
                      strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
