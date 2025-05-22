import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TipsTableRows from '../Components/TipsTableRows';

const BrowseTips = () => {
    
    const gardentips=useLoaderData();
    const [prefered,setPrefered]=useState(gardentips)
    const handleSort=e=>{
        e.preventDefault()
        const prefer=e.target.difficulty.value;
        
        const preferedset=gardentips.filter(tips=> tips.difficulty==prefer)
       
        setPrefered(preferedset)
        

    }
    return (
        
        <div className="overflow-x-auto dark:bg-green-700 dark:text-white bg-green-200">
            <form onSubmit={handleSort} className='ml-100'>
                <input type="text" name='difficulty' className="input" placeholder="Difficulty level" list="difficulty" />
                    <datalist id="difficulty">
                    <option value="Easy"></option>
                    <option value="Medium"></option>
                    <option value="Hard"></option>
                    </datalist>
                <button type='submit' className='btn ml-5 dark:bg-green-300 dark:text-black border-none text-white bg-green-800'>Submit</button>
            </form>
           
  <table className="table dark:text-white">
    {/* head */}
    <thead>
      <tr className='dark:text-white'>
        <th>Image</th>
        <th>title</th>
        <th>Category</th>
        <th>Difficulty</th>
        <th>Likes</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        prefered.map(tip=><TipsTableRows tip={tip}></TipsTableRows>)
      }
      
      
    </tbody>
    
  </table>
</div>
    );
};

export default BrowseTips;