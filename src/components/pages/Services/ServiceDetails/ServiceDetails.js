import React, { useContext } from 'react';
import Reviews from '../../reviews/Reviews';
import EditReview from '../../reviews/EditReview/EditReview';
import { Link, useLoaderData } from 'react-router-dom';
import DetailsAboutService from './DetailsAboutService';
import useTitle from '../../../hooks/useTitle';
import { authContext } from '../../../context/AuthContext/AuthProvider';


const ServiceDetails = () => {
    const { user } = useContext(authContext);
    useTitle("Service Details");
    const service = useLoaderData();
    // console.log(service);

    const { _id } = service;
    return (
        <div>
            <DetailsAboutService key={_id} service={service}></DetailsAboutService>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {/* {
                    user ? <EditReview></EditReview> : <div><p className='text-xl font-bold mt-5'>Please <Link className=' text-bold text-3xl text-yellow-800' to={`/signin`}>Login</Link> if you want to review</p></div>
                } */}
                <EditReview></EditReview>
                <div className='grid md:col-span-2 lg:col-span-3'>
                    <Reviews></Reviews>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;