import { MdDeleteForever, MdEditOff } from "react-icons/md";
import React from 'react';

const MyReview = ({ review, handleDelete, handleEdit }) => {
    // console.log(review);
    const { feedback, rating, userName, userPhotoURL, _id,serviceName } = review;
    return (
        <div>
            <div className="p-6 bg-gray-900 text-gray-100
            m-5 w-full">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img src={userPhotoURL} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700" />
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold text-center md:text-left">{userName}</h4>
                        <h4 className="text-sm  text-center md:text-left text-gray-400">Service: {serviceName}</h4>
                        <h6 className="text-start">rating: {rating}</h6>
                        <p className="text-gray-400 text-center">{feedback}</p>
                        <div className='flex justify-end gap-4 text-lg'>
                            <button onClick={() => handleEdit(_id)}><MdEditOff /></button>
                            <button onClick={() => handleDelete(_id)}><MdDeleteForever /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;