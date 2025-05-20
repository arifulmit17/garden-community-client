import React from 'react';

const Gardener = ({gardener}) => {
    console.log(gardener);
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={gardener.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{gardener.name}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default Gardener;