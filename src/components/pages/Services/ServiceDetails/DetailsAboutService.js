import React from 'react';

const DetailsAboutService = ({ service }) => {
    const { _id, title, img, description, price, ingredient } = service;
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 text-gray-100 mb-5">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={img} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
                        <div className="space-y-2 text-2xl">
                            {title}
                            <p className="text-xs text-gray-400">Price: {price}
                            </p>
                        </div>
                        <div className="text-gray-100">
                            <p>{description}</p>
                        </div>
                        <p className='text-xl text-yellow-400'>Ingredients</p>
                        <div className='my-5 text-sm font-semibold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-4  items-start text-start'>
                            {
                                ingredient.map((ingred, idx) => <div key={idx}><span className='text-gray-500 text-md'>{idx + 1}.</span> {ingred}</div>)
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsAboutService;