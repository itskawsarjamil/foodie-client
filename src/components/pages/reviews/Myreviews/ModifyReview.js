import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../context/AuthContext/AuthProvider';

const ModifyReview = ({ modifyReview, setIsChange }) => {
    const { logout } = useContext(authContext);

    const [rating, setRating] = useState(modifyReview.rating);
    const [reviewData, setReviewData] = useState(modifyReview);

    const handleSubmit = (e) => {
        e.preventDefault();
        reviewData.rating = rating;
        reviewData.feedback = e.target.message.value;
        // console.log(reviewData);

        fetch(`https://foodie-server-ten.vercel.app/modifyreview?id=${reviewData._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("json-token")}`,
            },
            body: JSON.stringify(reviewData),
        })
            .then((response) => {
                if (response.status === 401 || response.status === 403) {
                    return logout();
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                if (data.acknowledged) {
                    alert("data modified");
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        setIsChange(false);
        e.target.reset();
    }
    const handleRating = (x) => {
        setRating(x);
    }
    return (
        <div>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12  bg-gray-400  text-white">
                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>
                        <div className="flex space-x-3">
                            <button onClick={() => handleRating(1)} type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={(rating >= 1) ? "w-10 h-10  text-yellow-500" : "w-10 h-10  text-gray-500"}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => handleRating(2)} type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={(rating >= 2) ? "w-10 h-10  text-yellow-500" : "w-10 h-10  text-gray-500"}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => handleRating(3)} type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={(rating >= 3) ? "w-10 h-10  text-yellow-500" : "w-10 h-10  text-gray-500"}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => handleRating(4)} type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={(rating >= 4) ? "w-10 h-10  text-yellow-500" : "w-10 h-10  text-gray-500"}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => handleRating(5)} type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={(rating >= 5) ? "w-10 h-10  text-yellow-500" : "w-10 h-10  text-gray-500"}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea defaultValue={reviewData.feedback} name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none  text-white  bg-gray-500"></textarea>
                        <button type="submit" className="py-4 my-8 font-semibold rounded-md  text-black  bg-violet-400">Leave feedback</button>
                    </div>
                </form>
                <div className="flex items-center justify-center">
                    <Link rel="noopener noreferrer" to='' onClick={() => setIsChange(false)} className="text-sm  text-black">Maybe later</Link>
                </div>
            </div>
        </div>
    );
};

export default ModifyReview;