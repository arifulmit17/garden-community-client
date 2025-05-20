import React from 'react';
import { useLoaderData } from 'react-router';
import Gardener from './Gardener';

const ExploreGardners = () => {
    const gardeners=useLoaderData()
    console.log(gardeners);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
                    {
                        gardeners.map(gardener=><Gardener key={gardener._id} gardener={gardener}></Gardener>)
                    }
                </div>
    );
};

export default ExploreGardners;