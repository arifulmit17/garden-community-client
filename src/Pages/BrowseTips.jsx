import React from 'react';
import { useLoaderData } from 'react-router';
import TipsTableRows from '../Components/TipsTableRows';

const BrowseTips = () => {
    const gardentips=useLoaderData();
    console.log(gardentips);
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>title</th>
        <th>Category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        gardentips.map(tip=><TipsTableRows tip={tip}></TipsTableRows>)
      }
      
      
    </tbody>
    
  </table>
</div>
    );
};

export default BrowseTips;