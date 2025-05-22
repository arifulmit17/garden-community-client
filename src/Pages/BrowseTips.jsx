import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TipsTableRows from '../Components/TipsTableRows';

const BrowseTips = () => {
    
    const gardentips=useLoaderData();
    console.log(gardentips);
    const [prefered,setPrefered]=useState(gardentips)
    const handleSort=e=>{
        e.preventDefault()
        const prefer=e.target.difficulty.value;
        
        const preferedset=gardentips.filter(tips=> tips.difficulty==prefer)
       
        setPrefered(preferedset)
        

    }
    return (
        
        <div className="overflow-x-auto">
            <form onSubmit={handleSort}>
                <input type="text" name='difficulty' className="input" placeholder="Difficulty level" list="difficulty" />
                    <datalist id="difficulty">
                    <option value="Easy"></option>
                    <option value="Medium"></option>
                    <option value="Hard"></option>
                    </datalist>
                <button type='submit'>Submit</button>
            </form>
           
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
        prefered.map(tip=><TipsTableRows tip={tip}></TipsTableRows>)
      }
      
      
    </tbody>
    
  </table>
</div>
    );
};

export default BrowseTips;