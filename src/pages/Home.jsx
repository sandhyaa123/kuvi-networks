import { 
    Hero,
    HowItWorks,
    Services,
    Testimonal,
    ContactUs,
    Faq,
    Heading,
    LabelHeading,
    Paragraph
 } from "../components";


const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <HowItWorks />
      <Services />
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-6 container">
          <div className="mx-auto text-center mb-16 max-w-3xl">
            {/* <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </p> */}
            <Heading>Why choose us?</Heading>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-10">
  
  {/* Full Control */}
  <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
    <div className="text-5xl text-indigo-600 mb-4">🛠️</div>
    <LabelHeading color="text-gray-800">Full control</LabelHeading>
    <Paragraph>Define your own policies, salary structure, and employee hikes.</Paragraph>
  </div>

  {/* Cost-Effective */}
  <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
    <div className="text-5xl text-indigo-600 mb-4">💰</div>
    <LabelHeading color="text-gray-800">Cost-effective</LabelHeading>
    <Paragraph>Build a skilled team in India at a fraction of the cost.</Paragraph>
  </div>

  {/* Transparency */}
  <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
    <div className="text-5xl text-indigo-600 mb-4">🔍</div>
    <LabelHeading color="text-gray-800">Transparency</LabelHeading>
    <Paragraph>Direct communication with your team – no middlemen, no hidden costs.</Paragraph>
  </div>

  {/* End-to-End Management */}
  <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
    <div className="text-5xl text-indigo-600 mb-4">✅</div>
    <LabelHeading color="text-gray-800">End-to-end management</LabelHeading>
    <Paragraph>HR, finance, and admin – we handle everything, so you don't have to.</Paragraph>
  </div>

</div>

        </div>
      </section>
      <Testimonal />
      <ContactUs />
      <Faq />
    </div>
  );
};

export default Home;
