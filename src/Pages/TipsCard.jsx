import React from 'react';
import { NavLink } from 'react-router';

const TipsCard = ({tip}) => {
    return (
        <div className="card card-side my-5 dark:bg-green-600 bg-green-100 shadow-sm">
  <figure>
    <img className='w-50 h-[200px] rounded-2xl'
      src={tip.photo}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{tip.title}</h2>
    <p>{tip.description}</p>
    <p>Difficulty {tip.difficulty}</p>
    <div className="card-actions justify-end">
      <NavLink to={`/tipdetails/${tip._id}`}>
                    <button className="btn bg-green-800  text-white btn-xs">See More</button>
    </NavLink>
    </div>
  </div>
</div>
    );
};

export default TipsCard;