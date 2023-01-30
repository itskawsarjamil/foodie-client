import React, { useContext, useState } from 'react';
import logo from "../../assets/logo/foodielogo.png";
import { Link } from 'react-router-dom';
import Signuptoggle from './Signuptoggle';
import Signintoggle from './Signintoggle';
import { toggleContext } from '../../../App';

const Signup = () => {
    const { toggle,setToggle } = useContext(toggleContext);
    // const [toggle, setToggle] = useState(true);

    const handleToggle = (x) => {
        // console.log(x);
        setToggle(x);
    }

    return (
        <div>
            <section className="bg-white ">
                <div className="container flex items-start justify-center min-h-screen px-6 mx-auto">
                    <div className="w-full max-w-md">
                        <div className="flex justify-center mx-auto">
                            <img className="w-auto sm:h-12 md:h-16 lg:h-20" src={logo} alt="" />
                        </div>

                        <div className="flex items-center justify-center mt-6">
                            <Link onClick={() => handleToggle(false)} to="" className={toggle ? "w-1/3 pb-4 font-medium text-center  capitalize border-b border-gray-400 text-gray-300" : "w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 "}>
                                sign in
                            </Link>

                            <Link onClick={() => handleToggle(true)} to="" className={toggle ? "w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 " : "w-1/3 pb-4 font-medium text-center  capitalize border-b border-gray-400 text-gray-300"}>
                                sign up
                            </Link>
                        </div>

                        {
                            toggle ? <Signuptoggle handleToggle={handleToggle}></Signuptoggle> : <Signintoggle handleToggle={handleToggle}></Signintoggle>

                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;