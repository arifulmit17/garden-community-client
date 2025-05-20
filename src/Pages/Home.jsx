import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import Gardener from './Gardener';

const Home = () => {
    const gardeners=useLoaderData()
    console.log(gardeners);
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
                    {
                        gardeners.map(gardener=><Gardener key={gardener._id} gardener={gardener}></Gardener>)
                    }
                </div>
            </section>
            <section>
                <h1>Faq</h1>
            </section>
            <section>Blogs</section>
        </div>
    );
};

export default Home;