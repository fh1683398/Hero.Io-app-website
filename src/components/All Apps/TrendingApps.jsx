import SingleApp from "./SingleApp"
import { Link } from 'react-router';

const TrendingApps = ({ appsData }) => {
    const slicedApps = appsData.slice(0, 8)

    return (
        <div className='max-w-360 mx-auto my-10 md:my-20 flex flex-col items-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Trending Apps</h2>
            <p className='text-gray-600 text-center mb-10'>Explore All Trending Apps on the Market developed by us</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
                {
                    slicedApps.map(app => <SingleApp app={app}></SingleApp>)
                }
            </div>
            <Link to="/apps"><button className="text-white gap-2 bg-linear-to-r from-violet-600 to-violet-500 px-10 py-4 rounded-sm text-xl cursor-pointer">Show All</button></Link>
        </div>
    );
};

export default TrendingApps;