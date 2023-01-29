import React from 'react';
import Header from '../../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;