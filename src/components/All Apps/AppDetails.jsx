import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from "../../assets/icon-downloads.png";
import starImg from "../../assets/icon-ratings.png";
import likeImg from "../../assets/icon-review.png"
import RatingsChart from '../RatingsChart/RatingsChart';

const AppDetails = () => {
    const allApps = useLoaderData()
    const {id} = useParams()
    
    const appData = allApps.find(a=> a.id === parseInt(id)) 
    
    const { image, title, companyName, downloads, ratingAvg, reviews, size } = appData;

    const formatDownloads = (num) => {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + "B";
        }
        else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "M";
        }
        else if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        else {
            return num;
        }
    };


    return (
        <div className='max-w-360 mx-auto'>
            <div className='my-10 md:my-20 flex gap-6 lg:gap-10 flex-col md:flex-row px-4 lg:px-0'>
                
                {/* image */}
                <div className='bg-white rounded-lg flex items-center justify-center'>
                    <img className='max-w-90 w-full h-full object-cover' src={image} alt={title} />
                </div>

                {/* text */}
                <div className='flex-1'>
                    <h3 className='text-3xl md:text-4xl mb-2 font-bold text-(--primary-color)'>{title}</h3>

                    <p className='text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-violet-500 font-semibold  text-lg'><span className='text-gray-500'>Company Name:</span> {companyName}</p>

                    <hr className='border-t border-gray-300 my-8' />

                    <div className='flex gap-12 mb-8 scale-80 md:scale-100'>
                        <div className='flex flex-col items-center'>
                            <img className='mb-2' src={downloadImg} alt="" />
                            <p className='mb-2 text-gray-600 hidden md:inline'>Downloads</p>
                            <h3 className='font-extrabold text-3xl md:text-4xl text-(--primary-color)'>{formatDownloads(downloads)}</h3>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='mb-2' src={starImg} alt="" />
                            <p className='mb-2 text-gray-600 hidden md:inline'>Average Ratings</p>
                            <h3 className='font-extrabold text-3xl md:text-4xl text-(--primary-color)'>{ratingAvg}</h3>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='mb-2' src={likeImg} alt="" />
                            <p className='mb-2 text-gray-600 hidden md:inline'>Total Reviews</p>
                            <h3 className='font-extrabold text-3xl md:text-4xl text-(--primary-color)'>{formatDownloads(reviews)}</h3>
                        </div>
                    </div>
                    <button className='text-white bg-linear-to-r from-violet-600 to-violet-500 px-5 py-2 rounded-sm text-lg cursor-pointer font-semibold'>Install Now ({size})</button>
                </div>
            </div>

            <hr className='border-t border-gray-300 my-10' />

            <div>
                <RatingsChart appData={appData}></RatingsChart>
            </div>
        </div>
    );
};

export default AppDetails;