import React, { use } from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import Gardener from './Gardener';
import TipsTableRows from '../Components/TipsTableRows';

const Home = ({tipsPromise}) => {
    const gardeners=useLoaderData()
    
    const tips=use(tipsPromise)
    console.log(tips);

    
    
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <h1 className='font-bold text-5xl text-center'>Featured Gardeners</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
                    {
                        gardeners.map(gardener=><Gardener key={gardener._id} gardener={gardener}></Gardener>)
                    }
                </div>
            </section>
            <section>
                <h1 className='font-bold text-5xl text-center'>Top Trending Tips</h1>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>title</th>
        <th>Category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
         tips.map(tip=><TipsTableRows tip={tip}></TipsTableRows>)
      }
      
      
    </tbody>
    
  </table>
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