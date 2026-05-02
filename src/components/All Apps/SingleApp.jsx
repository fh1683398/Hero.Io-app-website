import React from 'react';
import downloadImg from "../../assets/icon-downloads.png"
import starImg from "../../assets/icon-ratings.png"

const SingleApp = ({ app }) => {
    const { image, title, downloads, ratingAvg, description } = app

    const formatDownloads = (downloads) => {
    if (downloads >= 1000000000) {
        return (downloads / 1000000000).toFixed(1) + "B";
    } 
    else if (downloads >= 1000000) {
        return (downloads / 1000000).toFixed(1) + "M";
    } 
    else if (downloads >= 1000) {
        return (downloads / 1000).toFixed(1) + "K";
    } 
    else {
        return downloads;
    }
};

    return (
        <div className='bg-white rounded-sm p-4 text-gray-600 font-medium'>
            <figure className='mb-4 bg-gray-100 rounded-lg'>
                <img className='h-80 w-full object-cover rounded-lg' src={image} alt={title} />
            </figure>

            <h4 className='mb-4 text-xl'>{title}- {description}</h4>

            <div className='flex justify-between'>

                <span className='p-2 bg-gray-100 rounded-sm flex items-center justify-center gap-2'>
                    <img className='w-4' src={downloadImg} alt="" />
                    {formatDownloads(downloads)}
                </span>
                <span className='p-2 bg-red-100 rounded-sm flex items-center justify-center gap-2'>
                    <img className='w-4' src={starImg} alt="" />
                    {ratingAvg}</span>
            </div>
        </div>
    );
};

export default SingleApp;