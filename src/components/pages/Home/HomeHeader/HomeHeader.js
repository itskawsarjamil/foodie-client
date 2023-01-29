import { Link } from "react-router-dom";
import homecover from "../../../assets/cover/homecover.jpg";
import React from 'react';
const HomeHeader = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0  mx-auto ">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 ">
                <svg
                    className="absolute left-0 hidden h-full text-gray-50 transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src={homecover}
                    alt=""
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-2xl justify-start">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400 ">
                        Brand new
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">Everything you<br className="hidden md:block" />
                        can imagine{' '}
                        <span className="inline-block text-deep-purple-accent-400">
                            is real
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                    We believe in the commitment to our community and in fostering long term relationships with local farmers and fishermen. Our menus reflect these connections, featuring local, seasonal produce and sustainably sourced seafood and meats.
                    </p>
                    <div className="flex justify-center items-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            See All Food
                        </Link>
                        <Link
                            to="/about"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;