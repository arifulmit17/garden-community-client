import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Stats = () => {
    const {user}=use(AuthContext)
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow">
  <div className="stat">
    <div className="stat-title text-2xl">User</div>
    <div className="stat-value">{user.displayName}</div>
  </div>

  <div className="stat">
    <div className="stat-title text-2xl">User Email</div>
     <div className="stat-value">{user.email}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
    );
};

export default Stats;