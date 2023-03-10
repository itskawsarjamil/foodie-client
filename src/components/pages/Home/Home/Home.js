import React from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import Offerbanner from './Offerbanner';
import HomeServices from '../../Services/HomeServices';
import ContactUs from '../ContactUs';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <HomeHeader></HomeHeader>
            <Offerbanner></Offerbanner>
            <HomeServices></HomeServices>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;