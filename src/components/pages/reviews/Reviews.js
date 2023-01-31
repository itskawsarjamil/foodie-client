
import Review from './Review';

const Reviews = ({ reviews, count }) => {

    return (
        <div className=''>
            {
                reviews.length ?
                    <>
                        <p className='text-3xl font-bold mt-5'>Total Review: <span className='text-yellow-700'>{count}</span></p>
                        <div>
                            {
                                reviews.map((review, idx) => <Review key={idx} review={review}></Review>)
                            }
                        </div>
                    </>
                    : <p className='text-4xl font-bold text-gray-800 '>NO Review Found</p>
            }
        </div>
    );
};

export default Reviews;