import React from 'react';

const Statics = () => {
    return (
        <div className='bg-linear-to-r from-violet-600 to-violet-500 py-10 md:py-20'>

            <div className='text-center max-w-360 mx-auto'>

                <h2 className='text-3xl md:text-4xl font-bold text-white mb-10'>Trusted By Millions, Built For You</h2>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='border-b border-gray-300 border-dashed md:border-0 pb-10 md:pb-0'>
                        <p className='text-gray-300 mb-4'>Total Downloads</p>
                        <h2 className='font-bold text-5xl md:text-6xl text-white mb-4'>29.6M</h2>
                        <p className='text-gray-300'>21% More Than Last Month</p>
                    </div>
                    <div className='border-b border-gray-300 border-dashed md:border-0 py-10 md:py-0'>
                        <p className='text-gray-300 mb-4'>Total Reviews</p>
                        <h2 className='font-bold text-5xl md:text-6xl text-white mb-4'>906K</h2>
                        <p className='text-gray-300'>46% More Than Last Month</p>
                    </div>
                    <div className='pt-10 md:pt-0'>
                        <p className='text-gray-300 mb-4'>Active Apps</p>
                        <h2 className='font-bold text-5xl md:text-6xl text-white mb-4'>132+</h2>
                        <p className='text-gray-300'>31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statics;