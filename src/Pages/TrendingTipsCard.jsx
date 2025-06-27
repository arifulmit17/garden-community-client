import React from 'react';
import { NavLink } from 'react-router';

const TrendingTipsCard = ({tip}) => {
    return (
        <div className="card card-side  dark:bg-green-600 bg-green-100 shadow-sm">
  <figure className=''>
    <img className='mb-50 rounded-2xl w-[100px] h-[100px]'
      src={tip.photo}
      alt="tips" />
  </figure>
  <div className="card-body w-1/2">
    <h2 className="card-title">{tip.title}</h2>
    <p>{tip.description}</p>
    <div className="card-actions justify-end">
      <NavLink to={`/tipdetails/${tip._id}`}>
                    <button className="btn bg-green-500  text-white btn-xs">See More</button>
    </NavLink>
    </div>
  </div>
</div>
    );
};

export default TrendingTipsCard;