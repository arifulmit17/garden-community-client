import React from 'react';
import { useLoaderData } from 'react-router';
import MytipsTableRow from '../Components/MytipsTableRow';


const MyTipsPage = () => {
    const mytips=useLoaderData()
    console.log(mytips);
    return (
        <div>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>title</th>
        <th>Category</th>
        <th>Difficulty</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        mytips.map(tip=><MytipsTableRow tip={tip}></MytipsTableRow>)
      }
      
      
    </tbody>
    
  </table>
        </div>
    );
};

export default MyTipsPage;