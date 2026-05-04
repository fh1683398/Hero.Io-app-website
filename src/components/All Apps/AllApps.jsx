import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from './SingleApp';
import { IoIosSearch } from "react-icons/io";
import NoAppFoundImg from "../../assets/App-Error.png"

const AllApps = () => {
    const allApps = useLoaderData()
    const [search, setSearch] = useState("")

    const filteredApps = allApps.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className='max-w-360 mx-auto'>

            <div className='text-center mt-10 md:mt-20 pb-10'>

                <h2 className='text-4xl md:text-5xl mb-4 font-bold text-(--primary-color)'>Our All Applications</h2>
                <p className='text-gray-500 text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex flex-col md:flex-row md:gap-5 justify-between mb-10'>
                <h4 className='font-semibold text-2xl text-center md:text-left'>({filteredApps.length}) Apps Found</h4>

                <div className='relative flex items-center justify-center'>

                    <button className='absolute left-3 text-gray-500 cursor-pointer'><IoIosSearch size={20} /></button>

                    <input
                        className='pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full text-gray-700 font-inter'
                        type="text"
                        placeholder='search Apps'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:items-stretch mb-10 md:mb-20'>
                {
                    (search ? filteredApps : allApps).map(app => <SingleApp app={app}></SingleApp>)
                }
            </div>

            {/* if no results found after search */}
            {filteredApps.length === 0 && (
                <div className='flex items-center justify-center my-10 md:mb-20'>
                    <img className='' src={NoAppFoundImg} alt="" />
                </div>
            )}
        </div>
    );
};

export default AllApps;