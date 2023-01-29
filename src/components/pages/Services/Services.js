import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Services = () => {

    useTitle("services");
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {

                return setServices(data);

            })
    }, [])
    return (
        <div className='my-10'>
            <section className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto  p-12 items-center justify-center">

                    {
                        services.map(service => <ServiceCard key={service.service_id} service={service}></ServiceCard>)
                    }

                </div>
            </section>
        </div>
    );
};

export default Services;