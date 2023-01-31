import React, { useContext, useEffect, useState } from 'react';
import Reviews from '../../reviews/Reviews';
import { Link, useLoaderData } from 'react-router-dom';
import DetailsAboutService from './DetailsAboutService';
import useTitle from '../../../hooks/useTitle';
import { authContext } from '../../../context/AuthContext/AuthProvider';
import ReviewForm from '../../reviews/ReviewForm';


const ServiceDetails = () => {
    const { user } = useContext(authContext);
    useTitle("Service Details");
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const { _id } = service;
    
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })

    }, [])


    return (
        <div>
            <DetailsAboutService key={_id} service={service}></DetailsAboutService>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    user ? <ReviewForm service={service} setReviews={setReviews}></ReviewForm> : <div><p className='text-xl font-bold mt-5'>Please <Link className=' text-bold text-3xl text-yellow-800' to={`/signin`}>Login</Link> if you want to review</p></div>
                }

                
                <div className='grid md:col-span-2 lg:col-span-3'>
                    <Reviews reviews={reviews}></Reviews>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;