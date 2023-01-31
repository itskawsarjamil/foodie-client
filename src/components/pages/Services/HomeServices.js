import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const HomeServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://foodie-server-ten.vercel.app/services')
            .then(res => res.json())
            .then(data => {

                return setServices(data.slice(0, 3));

            })
    }, [])
    return (
        <div className='my-10'>
            <section className="">
                <div className="flex flex-wrap mx-auto md:flex-nowrap p-12 items-center justify-center">

                    {
                        services.map(service => <ServiceCard key={service.service_id} service={service}></ServiceCard>)
                    }

                </div>
            </section>

            <Link to="/services"><button className="btn btn-outline btn-primary px-10 font-semibold">See All</button></Link>
        </div>
    );
};

export default HomeServices;