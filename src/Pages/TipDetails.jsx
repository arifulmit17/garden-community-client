import React from 'react';
import { useLoaderData, Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';

const TipDetails = () => {
    
    const tip=useLoaderData()
    console.log(tip);
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={tip.photo}
      alt="tip" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{tip.title}</h2>
    <p>{tip.description}</p>
    <h3>{tip.category}</h3>
    <h2>{tip.difficulty}</h2>
    <div className="card-actions justify-end">
        
      <button className="btn btn-primary">Like</button>
    </div>
  </div>
</div>
    );
};

export default TipDetails;