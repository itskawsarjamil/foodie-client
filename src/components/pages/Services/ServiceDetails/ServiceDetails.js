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
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}?page=${page}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCount(data.count);
                setReviews(data.result);
            })

    }, [_id, page, count])

    const handlePage = (x) => {
        if (x === 1) {
            if (page < Math.ceil(count / 4) - 1) {
                setPage(curr => curr + 1);
            }
        }
        else if (x === 0) {
            if (page > 0) {
                setPage(curr => curr - 1);
            }

        }
    }
    return (
        <div>
            <DetailsAboutService key={_id} service={service}></DetailsAboutService>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    user ? <ReviewForm service={service} setReviews={setReviews} setCount={setCount}></ReviewForm> : <div><p className='text-xl font-bold mt-5'>Please <Link className=' text-bold text-3xl text-yellow-800' to={`/signin`}>Login</Link> if you want to review</p></div>
                }


                <div className='grid md:col-span-2 lg:col-span-3'>
                    <div>
                        <Reviews reviews={reviews} count={count}></Reviews>
                    </div>
                    {

                        count ? <div className="flex justify-center space-x-1 text-gray-100">
                            <button onClick={() => handlePage(0)} title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900 text-violet-400 border-violet-400">{page + 1}</button>

                            <button onClick={() => handlePage(1)} title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;