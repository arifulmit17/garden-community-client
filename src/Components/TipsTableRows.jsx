import React from 'react';
import { NavLink } from 'react-router';

const TipsTableRows = ({tip}) => {
    
    return (
        <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={tip.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {tip.title}
        </td>
        <td>{tip.category}</td>
        <td>{tip.difficulty}</td>
        <td>{tip.totalliked}</td>
        <th>
            <NavLink to={`/tipdetails/${tip._id}`}>
                    <button className="btn bg-green-500 text-white btn-xs">See More</button>
            </NavLink>
          
        </th>
      </tr>
    );
};

export default TipsTableRows;