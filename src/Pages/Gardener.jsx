import React from 'react';

const Gardener = ({gardener}) => {
    return (
        <div className="card lg:card-side bg-green-100 dark:bg-green-800 dark:text-white shadow-sm">
  <figure className='size-[200px]'>
    <img 
      src={gardener.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {gardener.name}</h2>
    <h2>Age: {gardener.age}</h2>
    <h2>Gender: {gardener.gender}</h2>
    <h2>Status: {gardener.status}</h2>
    <h2>Shared tips: {gardener.totalSharedTips}</h2>
    <ol>Experiences: {gardener.experiences.map(exp=><li>{exp}</li>)}</ol>
  </div>
</div>
    );
};

export default Gardener;