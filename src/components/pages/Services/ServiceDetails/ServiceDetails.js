import React from 'react';
import Reviews from '../../reviews/Reviews';
import EditReview from '../../reviews/EditReview/EditReview';
import { useLoaderData } from 'react-router-dom';
import DetailsAboutService from './DetailsAboutService';


const ServiceDetails = () => {
    const service = useLoaderData();
    // console.log(service);

    const { _id, title, img, description, price, ingredient } = service;
    return (
        <div>
            <DetailsAboutService key={_id} service={service}></DetailsAboutService>
            <div className='grid grid-cols-4 gap-4'>
                <EditReview></EditReview>
                <div className='grid col-span-3'>
                    <Reviews></Reviews>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;