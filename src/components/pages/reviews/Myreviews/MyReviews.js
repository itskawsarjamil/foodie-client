import { useContext, useEffect, useState } from "react";
import MyReview from "./MyReview";
import useTitle from "../../../hooks/useTitle";
import { authContext } from "../../../context/AuthContext/AuthProvider";
import ModifyReview from "./ModifyReview";


const MyReviews = () => {

    const { user } = useContext(authContext);


    useTitle("My Reviews");

    const [reviews, setReviews] = useState([]);
    const [modifyReview, setModifyReview] = useState([]);
    const [isChange, setIsChange] = useState(false);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?page=${page}&email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCount(data.count);
                setReviews(data.result);
            })

    }, [page, count, user.email])

    const handlePage = (x) => {
        if (x === 1) {
            if (page < Math.ceil(count / 4) - 1) {
                setPage(curr => curr + 1);
            }
        }
        else if (x === 0) {
            if (page > 0) {
                setPage(curr => curr - 1);
            }

        }
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myreviews/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setCount(count - 1);
                    alert("delete successfull");

                }
            })
    }
    const handleEdit = (id) => {
        
        const data = reviews.find(review => review._id === id);
        setIsChange(true);
        setModifyReview(data);
       
    }
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="mt-20 ml-10">
                {
                    isChange ?

                        <ModifyReview modifyReview={modifyReview} setIsChange={setIsChange}></ModifyReview>

                        : ''
                }
            </div>
            <div className="">
                <div className="">
                    {
                        count ?
                            <>
                                <p className='text-3xl font-bold mt-5'>Total Review: <span className='text-yellow-700'>{count}</span></p>
                                <div className="grid-cols-2" >
                                    {
                                        reviews.map((review, idx) => <MyReview key={idx} review={review} handleDelete={handleDelete} handleEdit={handleEdit}></MyReview>)
                                    }
                                </div>
                            </>
                            : <p className='text-4xl font-bold text-gray-800 '>NO Review Found</p>
                    }
                </div>

                {

                    count ? <div className="flex justify-center space-x-1 text-gray-100">
                        <button onClick={() => handlePage(0)} title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900 text-violet-400 border-violet-400">{page + 1}</button>

                        <button onClick={() => handlePage(1)} title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div> : ''
                }

            </div>
        </div>
    );
};

export default MyReviews;