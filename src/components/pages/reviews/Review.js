import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = () => {
    return (
        <div>
            <div className="p-6 sm:p-12 bg-gray-900 text-gray-100
            m-5">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700" />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                        <p className="text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                        <div className='flex justify-end gap-4 text-lg'>
                            <button><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
                            <button><FontAwesomeIcon icon="fa-solid fa-trash" /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;