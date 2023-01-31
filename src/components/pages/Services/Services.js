import React from 'react';
import ServiceCard from './ServiceCard';
import {  useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Services = () => {

    useTitle("services");
    const services = useLoaderData();
    // const [services, setServices] = useState(data);
    

    return (
        <div className='my-10'>
            <section className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto  p-12 items-center justify-center">

                    {
                        services.map((service,idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                    }

                </div>
            </section>
        </div>
    );
};

export default Services;