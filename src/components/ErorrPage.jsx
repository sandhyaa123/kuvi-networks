import React from 'react';
import { Link } from 'react-router-dom';

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const ErrorPage = () => {
    return (
        <div className="bg-white items-center justify-center min-h-screen flex p-4">
            <div className="w-full text-center px-6 py-12 rounded-lg shadow-lg max-w-3xl">
                <img
 src="https://placehold.co/400x300/indigo/white?text=Error+Illustration"
 alt="A confused character with a laptop displaying an error message"
 className="mx-auto mb-8 w-64 md:w-80 lg:w-96"
                />
                <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight tracking-tight">
 Oops! Something Went Wrong
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-10 mx-auto max-w-xl">
 We're sorry for the inconvenience. Please try again later or return to the homepage.
                </p>
                <div className="sm:flex-row justify-center flex flex-col gap-4">
 <button
     onClick={() => history.back()}
     type="button"
     className="inline-flex hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 items-center justify-center rounded-md py-3 px-6 bg-indigo-600 text-white font-medium shadow-sm"
 >
     <BackIcon />
     Go Back
 </button>
 <Link
     to="/"
     className="items-center justify-center rounded-md py-3 px-6 text-indigo-600 font-medium inline-flex border border-indigo-500 hover:bg-indigo-50 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
 >
     <HomeIcon />
     Return to Homepage
 </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;