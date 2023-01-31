import { Link } from "react-router-dom";
import contactcover from "../../assets/contactcover/contentcover.jpg";
import { useContext } from "react";
import { toggleContext } from "../../../App";
import useTitle from "../../hooks/useTitle";

const Login = () => {
    useTitle("Login");
    const { setToggle } = useContext(toggleContext);
    
    return (
        <div className="relative mt-10">
            <img
                src={contactcover}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full  mb-12 xl:mb-0 xl:pr-16 ">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Where every flavor  <br className="hidden md:block" />

                                <span className="text-teal-accent-400">tells a story</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                We try our best to serve good food. We believe that the better the food, the better our reputation. So to prepare food while maintaining healthy quality standards
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-700"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 grid gap-5">
                            <Link to={`/signup`}><button onClick={() => setToggle(false)} className="block w-full p-2 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button></Link>
                            <Link to={`/signup`}><button onClick={() => setToggle(true)} className="block w-full p-2 text-center rounded-sm text-gray-900 bg-teal-400">Sign Up</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;