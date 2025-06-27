import React, { use, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useLoaderData } from 'react-router';

const Stats = () => {
    const {user}=use(AuthContext)
    const [mytips,setMytips]=useState([])
    const tips=useLoaderData()
    let tipnum=tips.length
    fetch(`${import.meta.env.VITE_API_URL}/gardens_user`).then(res=>res.json()).then(data=>
        setMytips(data)
    )
    const tiplist=  mytips.filter(tip=>tip.email==user.email)
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow">
            
            <div className='w-full'>
    <div className="stat w-full bg-green-500 my-5">
        <div className=" font-bold text-2xl">User Name</div>
         <div className="text-3xl">{user.displayName}</div>
    </div>

     <div className="stat bg-green-300">
          <div className=" font-bold text-2xl">User Email</div>
           <div className="text-3xl">{user.email}</div>
     </div>
            </div>
  
        <div className='w-full '>
<div className="stat w-full h-[100px] bg-green-300 my-5">
    <div className="text-2xl">Number of total tips</div>
    <div className="stat-value">{tipnum}</div>
  </div>
  <div className="stat w-full h-[100px] bg-green-500">
    <div className="text-2xl">Number of tips from user</div>
    <div className="stat-value">{tiplist.length}</div>
  </div>
        </div>
  
</div>
    );
};

export default Stats;