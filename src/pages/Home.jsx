import { 
    Hero,
    HowItWorks,
    Services,
    Testimonal,
    ContactUs,
    Faq
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
            <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </p>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-10">
            <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="text-5xl text-indigo-600 mb-4">🛠️</div>
              <p className="text-xl font-bold text-gray-800 mb-3">
                Full Control
              </p>
              <p className="text-gray-600">
                Define your own policies, salary structure, and employee hikes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="text-5xl text-indigo-600 mb-4">💰</div>
              <p className="text-xl font-bold text-gray-800 mb-3">
                Cost-Effective
              </p>
              <p className="text-gray-600">
                Build a skilled team in India at a fraction of the cost.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="text-5xl text-indigo-600 mb-4">🔍</div>
              <p className="text-xl font-bold text-gray-800 mb-3">
                Transparency
              </p>
              <p className="text-gray-600">
                Direct communication with your team – no middlemen, no hidden
                costs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="text-5xl text-indigo-600 mb-4">✅</div>
              <p className="text-xl font-bold text-gray-800 mb-3">
                End-to-End Management
              </p>
              <p className="text-gray-600">
                HR, finance, and admin – we handle everything, so you don't have
                to.
              </p>
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
