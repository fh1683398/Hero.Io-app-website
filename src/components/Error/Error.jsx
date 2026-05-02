import React from 'react';
import ErrorImg from "../../assets/error-404.png"
import { Link, Navigate, useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate()

    // const handleNavigate = () => {
    //     navigate(-1)
    // }
    return (
        <div className='h-screen flex flex-col justify-center items-center'>

            <img className='' src={ErrorImg} alt="" />
            <h3 className='mb-4 text-3xl md:text-4xl text-(--primary-color)'>Oops, page not found!</h3>
            <p className='text-gray-500 mb-4'>The page you are looking for is not available.</p>

            <Link onClick={()=> navigate(-1)}><button className="text-white gap-2 bg-linear-to-r from-violet-600 to-violet-500 px-10 py-3 rounded-sm text-xl cursor-pointer">Go Back</button></Link>
        </div>
    );
};

export default Error;