import React from 'react';
import { useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams()

    return (
        <div className='max-w-360 mx-auto'>
            <div className='my-10 md:my-20'>
                This is app details {id}
            </div>
        </div>
    );
};

export default AppDetails;