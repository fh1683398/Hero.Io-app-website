import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getItemFromLocalStorage, removeFromLocalStorage } from '../LocalStorage/_localStorage';

const Installation = () => {
    const allData = useLoaderData()

    const [installed, setInstalled] = useState([])

    const storedApps = getItemFromLocalStorage().map(Number)

    const storedAppsList = allData.filter(app => storedApps.includes(app.id))

    useEffect(() => {
        const storedApps = getItemFromLocalStorage();
        setInstalled(storedApps)

    }, [])

    const handleUninstall = (id) => {
        removeFromLocalStorage(id)

        const updatedApps = getItemFromLocalStorage();
        setInstalled(updatedApps);
    }


    return (
        <div className='max-w-360 mx-auto'>

            <h3 className='text-3xl md:text-4xl font-bold text-(--primary-color) text-center mt-10'>Your Installed Apps</h3>
            <p className='text-gray-500 mb-4 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex flex-col gap-4 my-10 md:my-20'>

                {
                    storedAppsList.map(app => (

                        <div className='p-4 md:p-6 border border-gray-300 rounded-md md-6 flex gap-4 justify-between items-center'>

                            <div className='flex gap-4 items-center'>
                                <div>
                                    <img className='w-20' src={app.image} alt={app.title} />
                                </div>
                                <div>
                                    <h3 className='font-bold text-2xl text-(--primary-color)'>{app.title}</h3>
                                    <p className='text-gray-500 '>{app.description}</p>
                                </div>
                            </div>

                            <button
                                className='text-white gap-2 bg-linear-to-r from-violet-600 to-violet-500 px-5 py-2 rounded-sm text-xl cursor-pointer h-fit'
                                onClick={() => handleUninstall(app.id)}>Uninstall
                            </button>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Installation;