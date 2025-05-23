import React, { use } from 'react';
import { NavLink, useLoaderData } from 'react-router';
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

const Home = ({tipsPromise}) => {
    const gardeners=useLoaderData()
    
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
                          <div className='h-[700px] w-full flex pl-30 gap-10 flex-col justify-center items-start bg-center bg-[url("https://i.ibb.co/svJrjqdD/c89e77-i-Stock-1364679535.jpg")]'><h1 className='text-center text-green-800 text-7xl'>Grow Together</h1>
                          <button className="bg-green-500 border-none text-white btn">Explore Now</button>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[700px] w-full bg-no-repeat bg-cover flex pl-30 gap-10 flex-col justify-center items-start bg-center bg-[url("https://i.ibb.co/YBWyF8nv/29079-hd.jpg")]'><h1 className='text-center text-green-200 text-7xl'>Care for Nature</h1>
                          <button className="bg-green-500 border-none text-white btn">Explore Now</button>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[700px] w-full flex pl-30 gap-10 flex-col justify-center items-start bg-center bg-[url("https://i.ibb.co/fzhw2HH8/Garden-hero.jpg")]'><h1 className='text-center text-green-200 text-7xl'>Be One with the Nature</h1>
                          <button className="bg-green-500 border-none text-white btn">Explore Now</button>
                          </div>
                        </SwiperSlide>
                      </Swiper>
            </section>
            <section>
                
                <h1 className='font-bold dark:text-white text-5xl text-center my-10'>Featured Gardeners <span style={{ color: 'green', fontWeight: 'bold' }}>
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
                    {
                        gardeners.map(gardener=><Gardener key={gardener._id} gardener={gardener}></Gardener>)
                    }
                </div>
            </section>
            <section className='dark:text-white'>
                <h1 className='font-bold text-5xl text-center my-10'>Top Trending Tips</h1>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
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
      {/* row 1 */}
      {
         tips.map(tip=><TipsTableRows tip={tip}></TipsTableRows>)
      }
      
      
    </tbody>
    
  </table>
</div>
            </section>

<section className='dark:text-white'>
    <div className='w-full flex items-center justify-around'>
<a className="bg-green-400 h-16 p-2 rounded-full my-anchor-element">◕‿‿◕</a>
<a className="bg-green-400 h-16 p-2 rounded-full my-anchor-element">◕‿‿◕</a>
<a className="bg-green-400 h-16 p-2 rounded-full my-anchor-element">◕‿‿◕</a>
    </div>
    
<Tooltip  anchorSelect=".my-anchor-element" place="top">
    Hello Gardeners !
</Tooltip>

                <h1 className='font-bold text-5xl text-center my-10'>Members Only</h1>
                <div  className='w-11/12 mx-auto lg:flex'>
                <div className='w-5/12 '>
                    <img className='md:w-[300px] ml-30 rounded-2xl' src="https://i.ibb.co/JXrFNDY/member.png" alt="" />
                </div>
                <div className='w-7/12 mx-5 mb-5'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Member's Benefit</h1>
                    <p className='text-base md:text-lg lg:text-xl '>Our site focuses on a platform for gardening enthusiasts for following benefits</p>
                    <ol className='h-1/2 mt-3 flex flex-col justify-between'>
                      <li>1. Share tips, find local gardeners, ask plant care questions any time or on weekly discussions</li>

                      <li>2. Post or join gardening events held on a weekly basis</li>

                      <li>3. Connect over shared interests like composting, hydroponics, balcony gardens</li>
                    </ol>
                    <NavLink to={'/register'}>
                     <button className='text-white ml-40 rounded-2xl btn bg-green-500 btn-wide'>Register Now</button>
                     </NavLink>
                </div>
            </div>
            </section>

            <section className='dark:text-white '>
                <h1 className='font-bold text-5xl text-center my-10'>F.A.Q</h1>
                <div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title  font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse dark:text-green-800 collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How do I update my profile information?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
            </section>
            
        </div>
    );
};

export default Home;