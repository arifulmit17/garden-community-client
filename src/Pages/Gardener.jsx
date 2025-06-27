import React from 'react';
import { Link } from 'react-router';

const Gardener = ({gardener}) => {
    return (
        <div className="card lg:card-side bg-green-100 dark:bg-green-600 dark:text-white shadow-sm">
  <figure className='size-[300px] lg:size-[150px] rounded-2xl'>
    <img className='rounded-2xl'
      src={gardener.image}
      alt="Album" />
  </figure>
  <div className='flex' >
    <div className='ml-10 flex-1'>
    <h2 className="card-title">Name: {gardener.name}</h2>
    <h2><span className='font-bold'>Status:</span> {gardener.status}</h2>
    <h2> <span className='font-bold'>Age:</span> {gardener.age}</h2>
    <h2><span className='font-bold'>Shared tips:</span> {gardener.totalSharedTips}</h2>
    
    </div>
    <div className='flex-1 mt-10'>
    
    <h2><span className='font-bold'>Gender:</span> {gardener.gender}</h2>
    
    <ol><span className='font-bold'>Experiences:</span> {gardener.experiences.map(exp=><li>{exp}</li>)}</ol>
    
    
    </div>
    
    
  </div>
</div>
    );
};

export default Gardener;