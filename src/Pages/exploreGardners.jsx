import React from 'react';
import { useLoaderData } from 'react-router';
import Gardener from './Gardener';

const ExploreGardners = () => {
    const gardeners=useLoaderData()
    return (
        <div className='dark:bg-green-700 rounded-2xl bg-green-300 grid md:grid-cols-2 lg:grid-cols-2 gap-5' >
                    {
                        gardeners.map(gardener=><Gardener key={gardener._id} gardener={gardener}></Gardener>)
                    }
                </div>
    );
};

export default ExploreGardners;