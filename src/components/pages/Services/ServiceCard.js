import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    // console.log(service);
    const { title, img, description, price, service_id } = service;

    
    return (
        <div>
            <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={img} alt="service" />
                        </PhotoView>
                    </PhotoProvider>

                    <div className="px-6 py-8">
                        <h4 className="mt-4 text-3xl font-bold text-neutral-600">
                            <span className="">{title}</span>
                        </h4>
                        <h5 className='mt-3 text-xl font-semibold '>Price: {price}</h5>
                        <p className="mt-4 text-base font-normal text-gray-500 leading-relax">{description.length > 70 ? `${description.slice(0, 70)}...` : description}</p>
                        <Link to={`/services/${service_id}`}>
                            <button className="mt-4 btn btn-outline btn-accent">Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;