import React, { useState } from 'react';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle("Add Service");

    const [serviceData, setServiceData] = useState({
        servicename: '',
        photourl: '',
        price: '',
        description: '',
        ingredient: [],
    })
    const [ingredientData, setIngredientData] = useState([]);

    const handleIngredient = (e) => {
        console.log(e.target.name, e.target.value);
        setIngredientData((curr) => {
            return [...curr, e.target.value];
        });
    }

    const handleInput = (e) => {

        setServiceData((curr) => {
            return { ...curr, [e.target.name]: e.target.value };
        });

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        serviceData.ingredient = [...ingredientData];

        e.target.reset();
    }
    return (
        <section className="p-6 bg-gray-800 text-gray-50">
            <form onSubmit={handleSubmit} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Add Your Service</p>
                        <p className="text-xs">Your culinary adventure awaits.</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="servicename" className="text-sm">Service Name</label>
                            <input name='servicename' onChange={handleInput} required id="servicename" type="text" placeholder="Service Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="photourl" className="text-sm">Photo URL</label>
                            <input name='photourl' onChange={handleInput} required id="photourl" type="text" placeholder="Photo URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="price" className="text-sm">Price</label>
                            <input name='price' onChange={handleInput} required id="price" type="text" placeholder="price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" data-tempmail="0" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="text-sm">Description</label>
                            <input name='description' onChange={handleInput} id="description" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="ingredient1" className="text-sm">Ingredient1</label>
                            <input onChange={handleIngredient} id="ingredient1" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="ingredient2" className="text-sm">Ingredient2</label>
                            <input onChange={handleIngredient} id="ingredient2" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="ingredient3" className="text-sm">Ingredient3</label>
                            <input onChange={handleIngredient} id="ingredient3" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="ingredient4" className="text-sm">Ingredient4</label>
                            <input onChange={handleIngredient} id="ingredient4" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="ingredient5" className="text-sm">Ingredient5</label>
                            <input onChange={handleIngredient} id="ingredient5" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="ingredient6" className="text-sm">Ingredient6</label>
                            <input onChange={handleIngredient} id="ingredient6" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>

                    </div>
                </fieldset>
                <button type='submit' className='btn btn-primary bg-yellow-500'>Submit</button>
            </form>
        </section>
    );
};





export default AddService;