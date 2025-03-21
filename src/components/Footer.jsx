import { Link } from "react-router-dom";
import logo from '../assets/images/logo.jpg';

const Footer = () => {

  const handleMenuItemClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-100">
      <div className="mx-auto py-20 px-4 sm:px-6 lg:px-8 md:py-20 sm:py-10 max-w-7xl">
        <div className="md:grid-cols-3 grid grid-cols-1 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="items-center flex">
              {/* <img
                alt="Company Logo"
                src="https://placehold.co/200x60/indigo/gray?text=Kuvi Networks"
                className="h-10 w-auto"
              /> */}
                <Link to="/" className="text-indigo-900 font-bold text-xl items-center md:gap-2 flex"
                onClick={handleMenuItemClick}
                >
                        <img
                        className="bg-transparent mix-blend-multiply"
                         src={logo}
                        />
                        <div className="flex flex-col justify-start">
                        Kuvi 
                        <span>Networks</span>
                        </div>
                      </Link>
                      
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Helping global founders build and manage dedicated teams in India
              with full control and transparency.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/kuvi-networks/posts/?feedView=all"
                target="_blank"
                className="text-gray-400 hover:text-indigo-600 transition duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden=""
                  id="Windframe_soNnzW67u"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a
                href="https://x.com/KuviNetworks"
                target="_blank"
                className="text-gray-400 hover:text-indigo-600 transition duration-300"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden=""
                  id="Windframe_lmr8KvFqh"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.128 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-lg font-semibold text-gray-800 mb-6">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={handleMenuItemClick}
                  className="text-gray-600 text-sm hover:text-indigo-600 transition duration-300 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleMenuItemClick}
                  to="/why-us"
                  className="text-gray-600 text-sm hover:text-indigo-600 transition duration-300 hover:underline"
                >
                  Why us
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleMenuItemClick}
                  to="/how-it-works"
                  className="text-gray-600 text-sm hover:text-indigo-600 transition duration-300 hover:underline"
                >
                  How it works
                </Link>
              </li>
              <li>
              <a href="https://forms.gle/sh68Te2Z5ZtoFsgt6" 
            target="_blank"
              className="text-gray-600 text-sm hover:text-indigo-600 transition duration-300 hover:underline"
              >
            Join us
          </a>
         
              </li>
              <li>
              <a
           href="https://calendly.com/kuvi-networks/explore-kuvi-networks"  
           target="_blank"
            className="text-gray-600 text-sm hover:text-indigo-600 transition duration-300 hover:underline"
           >
              Schedule a call
          </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-lg font-semibold text-gray-800 mb-6">Contact Us</p>
            <ul className="space-y-4">
              <li className="items-center flex">
                <svg
                  className="h-5 w-5 text-indigo-600 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="Windframe_AzkpEGtSO"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:hello@kuvinetworks.com"
                  className="text-gray-600 text-sm hover:text-indigo-600 transition
                      duration-300"
                >
                  hello@kuvinetworks.com
                </a>
              </li>
              <li className="items-center flex">
                <svg
                  className="h-5 w-5 text-indigo-600 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="Windframe_zYHCe6BfG"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-gray-600 text-sm">Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="bg-gray-900 py-4">
          <div
            className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex-row justify-between items-center text-gray-400 text-sm
                max-w-7xl flex flex-col"
          >
            <p className="mb-2 sm:mb-0">
              © 2024 Kuvi Networks. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="/O1ct4OODrV1ubfwiUYbV#"
                className="hover:text-indigo-400 transition duration-300"
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href="/O1ct4OODrV1ubfwiUYbV#"
                className="hover:text-indigo-400 transition duration-300"
              >
                Terms of Service
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
