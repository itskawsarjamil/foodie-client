import React from 'react';

const DetailsAboutService = ({ service }) => {
    const { _id, title, img, description, price, ingredient } = service;
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
                        <div className="space-y-2">
                            The Best Activewear from the Nordstrom Anniversary Sale
                            <p className="text-xs text-gray-400">By Leroy Jenkins
                            </p>
                        </div>
                        <div className="text-gray-100">
                            <p>Insert the actual text content here...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5 text-md font-semibold grid grid-cols-2 items-start text-start'>
                {
                    ingredient.map((ingred, idx) => <div key={idx}><span className='text-gray-500 text-lg'>{idx + 1}.</span> {ingred}</div>)
                }

            </div>
        </div>
    );
};

export default DetailsAboutService;