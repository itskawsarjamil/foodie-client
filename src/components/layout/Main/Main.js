import React, { createContext, useState } from 'react';
import Header from '../../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer/Footer';

export const toggleContext = createContext();


const Main = () => {
    const [toggle, setToggle] = useState(false);
    const toggleValue = {
        toggle,
        setToggle
    }
    return (
        <div>
            <Header></Header>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <toggleContext.Provider value={toggleValue}>
                    <Outlet></Outlet>
                </toggleContext.Provider>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;