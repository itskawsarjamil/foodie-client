import React from 'react';
import Reviews from '../../reviews/Reviews';
import EditReview from '../../reviews/EditReview/EditReview';
import { useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {
    // const service=useLoaderData();
    // console.log(service);

    // const { _id, title, img, description, price, ingredient } = service;
    return (
        <div>


            {/* <div className='my-5 text-lg font-semibold'>
                <ol>
                    {
                        ingredient.map((ingred, index) =>
                            <li key={index}>
                                {index + 1}. {ingred}
                            </li>
                        )
                    }
                </ol>
            </div> */}
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