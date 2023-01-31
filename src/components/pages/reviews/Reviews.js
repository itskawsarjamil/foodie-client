import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })

    }, [])
    return (
        <div className=''>
            {
                reviews.map((review, idx) => <Review key={idx} review={review}></Review>)
            }
            <Review></Review>
            <Review></Review>
            
        </div>
    );
};

export default Reviews;