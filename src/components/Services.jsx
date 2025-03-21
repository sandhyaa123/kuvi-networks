import Heading from "./typography/Heading";
import LabelHeading from "./typography/labelHeading";
import Paragraph from "./typography/paragraph";

const Services = () => (
  <section className="py-20 bg-indigo-50">
    <div className="mx-auto px-6 container">
      <div className="mx-auto text-center mb-16 max-w-3xl">
        <Heading>Our services - Your end-to-end team management partner</Heading>
        <Paragraph>We handle everything so you can focus on building the product you've always envisioned</Paragraph>
        <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
      </div>
      <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-10">
        
        {/* Team Sourcing & Onboarding */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
          <div className="text-4xl mb-4">🌟</div>
          <LabelHeading color="text-gray-800">Team sourcing & Onboarding</LabelHeading>
          <Paragraph>We source, hire and onboard best tech and non-tech talent, tailored to your needs</Paragraph>
        </div>

        {/* HR & Admin Management */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
          <div className="text-4xl mb-4">📊</div>
          <LabelHeading color="text-gray-800">HR & Admin management</LabelHeading>
          <Paragraph>From payroll and policies to legal compliance – we handle it all</Paragraph>
        </div>

        {/* Finance Management */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
          <div className="text-4xl mb-4">💸</div>
          <LabelHeading color="text-gray-800">Finance management</LabelHeading>
          <Paragraph>Seamless processing of salaries, reimbursements, tax deduction, provident fund and payslips</Paragraph>
        </div>

        {/* Infrastructure Support */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
          <div className="text-4xl mb-4">💻</div>
          <LabelHeading color="text-gray-800">Infrastructure support</LabelHeading>
          <Paragraph>Office space, equipment, and onboarding kits to empower your team</Paragraph>
        </div>

        {/* Ongoing Team Management */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
          <div className="text-4xl mb-4">🔥</div>
          <LabelHeading color="text-gray-800">Ongoing team management</LabelHeading>
          <Paragraph>Continuous performance monitoring and retention strategies to keep your team motivated</Paragraph>
        </div>

        {/* Legal & Compliance Support */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
          <div className="text-4xl mb-4">⚖️</div>
          <LabelHeading color="text-gray-800">Legal & Compliance support</LabelHeading>
          <Paragraph>We ensure you are compliant with all local laws and regulations</Paragraph>
        </div>

      </div>
    </div>
  </section>
);

export default Services;
