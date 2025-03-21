import { Heading, LabelHeading, Paragraph } from "../components";

const WhyChooseUs = () => {
  return (
    <div className="bg-white min-h-screen w-screen">
      <section className="mx-auto px-4 sm:px-6 lg:px-0 py-16 max-w-7xl">
        <div className="text-center mb-20">
          {/* <p className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Why Choose Us
          </p> */}
          <Heading>Why choose us</Heading>
          {/* <p className="text-xl text-gray-600 mx-auto max-w-3xl">
            We deliver exceptional value through a unique approach that puts you
            in control while we handle the complexities.
          </p> */}
          <Paragraph styleCss={"mx-auto max-w-3xl"}>
            We deliver exceptional value through a unique approach that puts you
            in control while we handle the complexities.
          </Paragraph>
        </div>
        <div className="mb-24">
          {/* <p className="text-3xl font-bold text-gray-800 text-center mb-12">
            ⚡ Our Key Differentiators
          </p> */}
          <div className="mb-12">
            {" "}
            <LabelHeading styleCss="text-gray-800 text-center">
              {" "}
              ⚡ Our key differentiators
            </LabelHeading>
          </div>
          <div className="md:grid-cols-2 lg:grid-cols-5 grid grid-cols-1 gap-8">
            {/* Full Control */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-indigo-600">
              <div className="bg-indigo-100 rounded-full w-16 h-16 items-center justify-center mx-auto mb-4 flex">
                <span className="text-3xl">🛠️</span>
              </div>
              <LabelHeading styleCss="text-gray-800 text-center">
                Full Control
              </LabelHeading>
              <Paragraph styleCss="text-center">
                You dictate policies, salary structures, and hikes.
              </Paragraph>
            </div>

            {/* Transparency */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-indigo-600">
              <div className="bg-indigo-100 rounded-full w-16 h-16 items-center justify-center mx-auto mb-4 flex">
                <span className="text-3xl">🔍</span>
              </div>
              <LabelHeading styleCss="text-gray-800 text-center">
                Transparency
              </LabelHeading>
              <Paragraph styleCss="text-center">
                Direct access and communication with your team.
              </Paragraph>
            </div>

            {/* Cost-Effectiveness */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-indigo-600">
              <div className="bg-indigo-100 rounded-full w-16 h-16 items-center justify-center mx-auto mb-4 flex">
                <span className="text-3xl">💰</span>
              </div>
              <LabelHeading styleCss="text-gray-800 text-center">
                Cost-Effectiveness
              </LabelHeading>
              <Paragraph styleCss="text-center">
                Save on HR, finance, and admin costs.
              </Paragraph>
            </div>

            {/* End-to-End Management */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-indigo-600">
              <div className="bg-indigo-100 rounded-full w-16 h-16 items-center justify-center mx-auto mb-4 flex">
                <span className="text-3xl">🔥</span>
              </div>
              <LabelHeading styleCss="text-gray-800 text-center">
                End-to-End Management
              </LabelHeading>
              <Paragraph styleCss="text-center">
                We handle everything beyond product building.
              </Paragraph>
            </div>

            {/* Scalable & Flexible */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-indigo-600">
              <div className="bg-indigo-100 rounded-full w-16 h-16 items-center justify-center mx-auto mb-4 flex">
                <span className="text-3xl">📈</span>
              </div>
              <LabelHeading styleCss="text-gray-800 text-center">
                Scalable & Flexible
              </LabelHeading>
              <Paragraph styleCss="text-center">
                Expand or reduce your team with ease.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="mb-24">
          {/* <p className="text-3xl font-bold text-gray-800 text-center mb-12">
            ✅ How We Compare to Traditional Agencies
          </p> */}
          <div className="mb-12">
          <LabelHeading styleCss="text-gray-800 text-center"> ✅ How we deliver more value than traditional agencies</LabelHeading>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-5 bg-indigo-600 text-white text-left text-lg font-semibold">
                    Feature
                  </th>
                  <th className="px-6 py-5 bg-indigo-600 text-white text-left text-lg font-semibold">
                    Kuvi Networks
                  </th>
                  <th className="px-6 py-5 bg-indigo-600 text-white text-left text-lg font-semibold">
                    Traditional Agencies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="px-6 py-5 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Team Control
                  </td>
                  <td className="px-6 py-5 text-sm text-indigo-600 font-semibold whitespace-nowrap">
                    <div className="items-center flex">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Windframe_j1sXcNU0t"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Full control over policies
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-600 whitespace-nowrap">
                    <div className="items-center flex">
                      <svg
                        className="w-5 h-5 mr-2 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Windframe_JEt8c88X1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Limited or no control
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="px-6 py-5 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Transparency
                  </td>
                  <td className="px-6 py-5 text-sm text-indigo-600 font-semibold whitespace-nowrap">
                    <div className="items-center flex">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Windframe_cPHeoFcZl"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Direct access to your team
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-600 whitespace-nowrap">
                    <div className="items-center flex">
                      <svg
                        className="w-5 h-5 mr-2 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Windframe_grq16atRq"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Indirect access
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="px-6 py-5 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Hidden Costs
                  </td>
                  <td className="px-6 py-5 text-sm text-indigo-600 font-semibold whitespace-nowrap">
                    <div className="items-center flex">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Windframe_btirZKYZX"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      No hidden fees
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-600 whitespace-nowrap">
                    <div className="items-center flex">
                      <svg
                        className="w-5 h-5 mr-2 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Windframe_ETX7KOQcO"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Potential hidden charges
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="px-6 py-5 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Flexibility
                  </td>
                  <td className="px-6 py-5 text-sm text-indigo-600 font-semibold whitespace-nowrap">
                    <div className="items-center flex">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Windframe_IWar6au5z"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Easy team scaling
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-600 whitespace-nowrap">
                    <div className="items-center flex">
                      <svg
                        className="w-5 h-5 mr-2 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Windframe_R1cya0ld7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Rigid contracts
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="px-6 py-5 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Legal Compliance
                  </td>
                  <td className="px-6 py-5 text-sm text-indigo-600 font-semibold whitespace-nowrap">
                    <div className="items-center flex">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Windframe_B1ledCrtf"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Handled by us
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-600 whitespace-nowrap">
                    <div className="items-center flex">
                      <svg
                        className="w-5 h-5 mr-2 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Windframe_jSZaHD6gL"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Not always included
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-indigo-50 rounded-2xl mb-24 text-center p-10">
          <div className="mx-auto max-w-4xl">
            {/* <p className="text-3xl font-bold text-gray-800 mb-6">
              Experience the Difference – Build Your Team with Confidence
            </p> */}
            <LabelHeading styleCss={'text-gray-800'}> Experience the difference – Build your team with confidence</LabelHeading>
            {/* <p className="text-xl text-gray-600 mb-10">
              Join hundreds of businesses that have transformed their operations
              with our innovative approach.
            </p> */}
            <Paragraph> Join hundreds of businesses that have transformed their operations
            with our innovative approach.</Paragraph>
            <a
              href="https://calendly.com/kuvi-networks/explore-kuvi-networks"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 inline-flex border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 justify-center rounded-md py-3 px-8 bg-indigo-600 text-base font-medium text-indigo-50 shadow-sm"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
