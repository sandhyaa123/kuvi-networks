import { Heading, Paragraph } from "../../components";
import serviceImage from "../../assets/images/services.jpeg";

const ServiceBanner = () => {
  return (
    <div class="bg-indigo-700 relative overflow-hidden">
      <div class="mx-auto max-w-7xl">
        <div class="pb-8 bg-indigo-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 relative z-10">
          <svg
            class="lg:block h-full w-48 text-indigo-700 hidden absolute right-0 inset-y-0 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden=""
            id="Windframe_tFj7Nmqox"
          >
            {" "}
            <polygon points="50,0 100,0 50,100 0,100"></polygon>{" "}
          </svg>
          <div class="pt-6 px-4 sm:px-6 lg:px-8 relative"></div>
          <main class="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 max-w-7xl">
            <div class="sm:text-center lg:text-left">
              <Heading styleCss={"tracking-tight text-white"}>
                Comprehensive team-building & management solutions tailored for
                your success
              </Heading>
              <Paragraph styleCss={"text-indigo-100"}>
                From hiring top talent to managing HR, finance, and legal
                compliance – we handle it all, so you can focus on growing your
                business.
              </Paragraph>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a
                    href="https://calendly.com/kuvi-networks/explore-kuvi-networks"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex border border-indigo-500 focus:outline-none focus:ring-2
            focus:ring-indigo-500 focus:ring-offset-2 hover:bg-indigo-700 justify-center rounded-md py-3 px-6
            bg-indigo-600 text-base font-medium text-white shadow-sm w-full"
                  >
                    Schedule a free consultation
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          alt="Diverse skilled workforce collaborating in a modern office environment"
          src={serviceImage}
          class="object-cover h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full"
        />
      </div>
    </div>
  );
};

export default ServiceBanner;
