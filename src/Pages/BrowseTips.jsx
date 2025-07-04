import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TipsTableRows from '../Components/TipsTableRows';
import TipsCard from './TipsCard';

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
        
        <div className="overflow-x-auto dark:bg-green-700 bg-gray-100 dark:text-white ">
            <form onSubmit={handleSort} className='md:ml-50 lg:ml-100'>
                <input type="text" name='difficulty' className="input" placeholder="Difficulty level" list="difficulty" />
                    <datalist id="difficulty">
                    <option value="Easy"></option>
                    <option value="Medium"></option>
                    <option value="Hard"></option>
                    </datalist>
                <button type='submit' className='btn ml-5 dark:bg-green-300 dark:text-black border-none text-white bg-green-800'>Submit</button>
            </form>
           <div>
            {
            prefered.map(tip=><TipsCard tip={tip}></TipsCard>)
             }
           </div>
  {/* <table className="table dark:text-white">
    
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
      
      {
        prefered.map(tip=><TipsTableRows tip={tip}></TipsTableRows>)
      }
      
      
    </tbody>
    
  </table> */}
</div>
    );
};

export default BrowseTips;