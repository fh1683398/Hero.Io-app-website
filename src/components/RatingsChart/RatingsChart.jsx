import React from 'react';
import { BarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const RatingsChart = ({ appData }) => {

    const { ratings } = appData
    const sortedRatings = [...ratings].sort((a, b) => b.name[0] - a.name[0])
    // console.log(sortedRatings)

    return (
        <div className='w-full h-75 scale-90 md:scale-100 mb-10 md:mb-30'>
            <h2 className='mb-4 font-semibold'>Ratings</h2>

            <ResponsiveContainer width="100%" height="100%">

                <BarChart
                    data={sortedRatings}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                >

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type='number' />
                    <YAxis dataKey="name" type='category' />
                    <Tooltip />
                    <Bar dataKey="count" fill='#f97316' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingsChart;