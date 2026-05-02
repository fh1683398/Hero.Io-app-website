import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from './SingleApp';
import { IoIosSearch } from "react-icons/io";

const AllApps = () => {
    const allApps = useLoaderData()
    return (
        <div className='max-w-360 mx-auto'>

            <div className='text-center mt-10 md:mt-20 mb-10'>

                <h2 className='text-4xl md:text-5xl mb-4 font-bold text-(--primary-color)'>Our All Applications</h2>
                <p className='text-gray-500 text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex flex-col md:flex-row md:gap-5 justify-between mb-10'>
                <h4 className='font-semibold text-2xl text-center md:text-left'>(132) Apps Found</h4>

                <div className='relative flex items-center justify-center'>

                    <button className='absolute left-3 text-gray-500 cursor-pointer'><IoIosSearch size={20}/></button>

                    <input className='pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full' type="text" placeholder='search Apps' />
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:items-stretch'>
                {
                    allApps.map(app => <SingleApp app={app}></SingleApp>)
                }
            </div>
        </div>
    );
};

export default AllApps;