const Testimonal = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="mx-auto px-4 container">
      <div className="text-center mb-16">
        <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Clients Say
        </p>
      </div>
      <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <div className="text-yellow-400 mb-4">⭐️⭐️⭐️⭐️⭐️</div>
          <p italic="" className="text-gray-600 mb-6">
            "Partnering with this company helped us scale our engineering team
            quickly and cost-effectively. Their transparency and management
            support allowed us to focus entirely on our product."
          </p>
          <div className="items-center flex">
            <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
              <img
                alt="Tech Startup Founder portrait"
                src="https://placehold.co/100x100/indigo/white?text=CEO"
              />
            </div>
            <div>
              <p className="text-gray-800 font-medium">Tech Startup Founder</p>
              <p className="text-gray-500 text-sm">SaaS Company</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <div className="text-yellow-400 mb-4">⭐️⭐️⭐️⭐️⭐️</div>
          <p italic="" className="text-gray-600 mb-6">
            "The level of control and transparency we have over our India team
            is phenomenal. They handled all the complexities while we maintained
            full oversight of our operations."
          </p>
          <div className="items-center flex">
            <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
              <img
                alt="CTO portrait"
                src="https://placehold.co/100x100/indigo/white?text=CTO"
              />
            </div>
            <div>
              <p className="text-gray-800 font-medium">CTO</p>
              <p className="text-gray-500 text-sm">E-commerce Platform</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <div className="text-yellow-400 mb-4">⭐️⭐️⭐️⭐️⭐️</div>
          <p italic="" className="text-gray-600 mb-6">
            "Building our development team in India was seamless thanks to their
            comprehensive support. The cost savings were significant without any
            compromise on talent quality."
          </p>
          <div className="items-center flex">
            <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
              <img
                alt="Operations Director portrait"
                src="https://placehold.co/100x100/indigo/white?text=COO"
              />
            </div>
            <div>
              <p className="text-gray-800 font-medium">Operations Director</p>
              <p className="text-gray-500 text-sm">FinTech Startup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonal;
