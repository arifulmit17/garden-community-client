import React, { use } from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router';
import Gardener from './Gardener';
import TipsTableRows from '../Components/TipsTableRows';
import { Tooltip } from 'react-tooltip'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import TrendingTipsCard from './TrendingTipsCard';

const Home = ({tipsPromise}) => {
    const gardeners=useLoaderData()
    const navigate=useNavigate()
    const tips=use(tipsPromise)
    
    
    
    
    return (
        <div className='bg-green-200 dark:bg-green-800'>
            <section>
                <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        navigation={true}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper"
                      >
                
                
                          <SwiperSlide>
                          <div className='h-[400px] w-full flex lg:pl-30 bg-cover gap-10 flex-col justify-center items-center md:items-center lg:items-start bg-center bg-[url("https://i.postimg.cc/ZRCT08P5/c89e77-i-Stock-1364679535.jpg")]'><h1 className='text-center text-green-400 text-7xl'>Grow Together</h1>
                          <button onClick={()=>{navigate('/register')}} className="bg-green-500 border-none text-white btn">Explore Now</button>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[400px] w-full bg-no-repeat bg-cover flex lg:pl-30 gap-10 items-center md:items-center flex-col justify-center lg:items-start bg-center bg-[url("https://i.postimg.cc/qv442VcY/29079-hd.jpg")]'><h1 className='text-center text-green-200 text-7xl'>Care for Nature</h1>
                          <button onClick={()=>{navigate('/register')}} className="bg-green-500 border-none text-white btn">Explore Now</button>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[400px] w-full flex lg:pl-30 bg-cover gap-10 flex-col justify-center items-center md:items-center lg:items-start bg-center bg-[url("https://i.postimg.cc/3wbhMyM5/Garden-hero.jpg")]'><h1 className='text-center text-green-200 text-7xl'>Be One with the Nature</h1>
                          <button onClick={()=>{navigate('/register')}} className="bg-green-500 border-none text-white btn">Explore Now</button>
                          </div>
                        </SwiperSlide>
                      </Swiper>
            </section>

<section className='dark:text-white'>
                <h1 className='font-bold text-5xl text-center my-10'>Top Trending Tips</h1>
                <div className="overflow-x-auto">

                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-5'>
                    {
                   tips.map(tip=><TrendingTipsCard tip={tip}></TrendingTipsCard>)
                    }
                  </div>
  {/* <table className="table">
    
    <thead>
      <tr className='dark:text-white'>
        <th>Image</th>
        <th>title</th>
        <th>Category</th>
        <th>Difficulty</th>
        <th>Likes</th>
      </tr>
    </thead>
    <tbody>
     
      {
         tips.map(tip=><TipsCard tip={tip}></TipsCard>)
      }
      
      
    </tbody>
    
  </table> */}
</div>
            </section>

            <section>
                
                <h1 className='font-bold dark:text-white text-5xl text-center my-10'>Featured Active Gardeners <span style={{ color: 'green', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Section', 'Pool', 'Here']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
        </span></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-5' >
                    {
                        gardeners.map(gardener=><Gardener key={gardener._id} gardener={gardener}></Gardener>)
                    }
                </div>
            </section>
            

<section className='dark:text-white mt-10'>
    <div className='w-full flex items-center justify-around'>
<a className="bg-green-400 h-16 p-2 rounded-full my-anchor-element">◕‿‿◕</a>
<a className="bg-green-400 h-16 p-2 rounded-full my-anchor-element">◕‿‿◕</a>
<a className="bg-green-400 h-16 p-2 rounded-full my-anchor-element">◕‿‿◕</a>
    </div>
    
<Tooltip  anchorSelect=".my-anchor-element" place="top">
    Hello Gardeners !
</Tooltip>

                <h1 className='font-bold text-5xl text-center my-10'>Offers for Members</h1>
                <div  className='w-11/12 mx-auto lg:flex'>
                <div className='w-5/12 '>
                    <img className='md:w-[300px] ml-30 rounded-2xl' src="https://i.postimg.cc/fTt62xhY/member.png" alt="" />
                </div>
                <div className='w-7/12 mx-5 mb-5'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Offers</h1>
                    <p className='text-base md:text-lg lg:text-xl '>Our site focuses on a platform for gardening enthusiasts for following offers</p>
                    <ol className='h-1/2 mt-3 flex flex-col justify-between'>
                      <li>1. Share tips, find local gardeners, ask plant care questions for free</li>

                      <li>2. Join for exclusive entry in gardening events</li>

                      <li>3. Free tips on shared interests like composting, hydroponics, balcony gardens</li>
                    </ol>
                    <NavLink to={'/register'}>
                     <button className='text-white lg:ml-40 rounded-2xl btn bg-green-500 btn-wide'>Register Now</button>
                     </NavLink>
                </div>
            </div>
            </section>
            <section className='mx-5 '>
              <h1 className='font-bold text-5xl text-center dark:text-white my-10'>Promotional Section</h1>
              <div className='flex flex-col rounded-2xl bg-green-300 dark:bg-green-600 dark:text-white lg:flex-row'>
                <div className='mx-auto lg:ml-20 mt-10 w-[300px] lg:w-[500px] h-[300px] '>
                  <img className='rounded-2xl' src="https://i.postimg.cc/8CsCzwFj/gardening-1521662873.jpg" alt="gardening" />
                </div>
                <div className='mb-5 ml-5 flex flex-col justify-center items-center '>
                  <h1 className='mb-10 text-3xl lg:text-5xl'>Let's start gardening</h1>

                  <h1 className='text-2xl lg:text-4xl'>Upto 50% Off this summer</h1>
                </div>
              </div>

            </section>
            <section className='dark:text-white '>
                <h1 className='font-bold text-5xl text-center my-10'>F.A.Q</h1>
                <div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title  font-semibold">How do I get into the community?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">I cannot find the logout button , where is it?</div>
  <div className="collapse-content text-sm">Click on your image at the top right corner and the logout button will appear, then click on logout button</div>
</div>
<div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How do I update my tips information?</div>
  <div className="collapse-content text-sm">Go to mytips section and browse to the tip you want to update, click update button, then an update info page will appear and you can update your information.</div>
</div>
            </section>
            
        </div>
    );
};

export default Home;