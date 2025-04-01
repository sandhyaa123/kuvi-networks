import howWorks from '../../assets/images/howWorks.jpeg';
import { Heading, Paragraph } from '../../components';



const HowItWorksHero = () => {
    return (
        <div className="bg-indigo-600 relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="pb-8 bg-indigo-600 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-24 xl:pt-16 relative z-10">
            <div className="pt-10 sm:pt-16 lg:pt-12 lg:pb-12 lg:max-w-lg">
              <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center lg:text-left">
                  <Heading color='text-white'>Build your dream team in just two weeks!</Heading>
                      <Paragraph styleCss={'text-indigo-100 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'}>From initial consultation to ongoing management - we handle everything, so you can focus on
                      your product.</Paragraph>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden">
          <img alt="A timeline graphic showing connected team members in a seamless team-building process"
          src={howWorks}
           className="object-cover h-56
              w-full sm:h-72 md:h-96 lg:w-full lg:h-full" />
        </div>
      </div>
    )
}

export default HowItWorksHero;