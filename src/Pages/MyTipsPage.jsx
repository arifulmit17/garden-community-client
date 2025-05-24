import React, { use, useState} from 'react';
import { useLoaderData } from 'react-router';
import MytipsTableRow from '../Components/MytipsTableRow';
import { AuthContext } from '../Context/AuthContext';


const MyTipsPage = () => {
    const {user}=use(AuthContext)
    const initialtips=useLoaderData()
    const [mytips,setMytips]=useState(initialtips)
    const tiplist=  mytips.filter(tip=>tip.email==user.email)

    return (
        <div className='bg-green-200 overflow-x-auto dark:bg-green-700 dark:text-white'>
            <table className="table">
    {/* head */}
    <thead>
      <tr className='dark:text-white'>
        <th>Image</th>
        <th>title</th>
        <th>Category</th>
        <th>Difficulty</th>
        <th>Availability</th>
        <th>Likes</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        tiplist.map(tip=><MytipsTableRow key={tip._id} tip={tip} mytips={mytips} setMytips={setMytips}></MytipsTableRow>)
      }
      
      
    </tbody>
    
  </table>
        </div>
    );
};

export default MyTipsPage;