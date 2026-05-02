import React from 'react';
import downloadImg from "../../assets/icon-downloads.png"
import starImg from "../../assets/icon-ratings.png"
import { Link } from 'react-router';

const SingleApp = ({ app }) => {
    const {id, image, title, downloads, ratingAvg, description } = app

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
    <Link to={`/apps/${id}`} className="h-full block">
        <div className='bg-white rounded-sm p-4 text-gray-600 font-medium h-full flex flex-col'>

            <figure className='mb-4 bg-gray-100 rounded-lg'>
                <img
                    className='h-80 w-full object-cover rounded-lg'
                    src={image}
                    alt={title}
                />
            </figure>

            <h4 className='mb-2 text-xl'>
                {title}
            </h4>

            <p className='mb-4 text-sm text-gray-500 grow'>
                {description}
            </p>

            <div className='flex justify-between mt-auto'>

                <span className='p-2 bg-gray-100 rounded-sm flex items-center justify-center gap-2 text-[#00D390]'>
                    <img className='w-4' src={downloadImg} alt="" />
                    {formatDownloads(downloads)}
                </span>

                <span className='p-2 bg-red-100 rounded-sm flex items-center justify-center gap-2 text-[#FF8811]'>
                    <img className='w-4' src={starImg} alt="" />
                    {ratingAvg}
                </span>

            </div>
        </div>
    </Link>
);
};

export default SingleApp;