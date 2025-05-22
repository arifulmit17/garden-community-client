import React from 'react';

const Gardener = ({gardener}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={gardener.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {gardener.name}</h2>
    
  </div>
</div>
    );
};

export default Gardener;