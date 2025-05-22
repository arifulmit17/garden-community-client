import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const TipDetails = () => {
    const tip=useLoaderData()

    const handleLike=(_id)=>{
        const newlike=parseInt(tip.totalliked)+1
        const like={totalliked:newlike}
        console.log(like);
        fetch(`https://b11a10garden-community-server.vercel.app/gardens_like/${_id}`,{
                    method: 'PUT',
                    headers: {
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(like)
                }).then(res=>res.json()).then(data=>{
                    if(data.modifiedCount){
                        Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your data has been updated",
                        showConfirmButton: false,
                        timer: 1500
                        });
                    }
                })
    }
    
    
    return (
        <div className="card dark:text-white dark:bg-green-700 my-20 mx-auto lg:w-1/2 lg:card-side bg-green-200 shadow-sm">
  <figure className='w-[300px] h-[300px]'>
    <img
      src={tip.photo}
      alt="tip" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {tip.title}</h2>
    <p> {tip.description}</p>
    <h3>Category: {tip.category}</h3>
    <h2>Difficulty: {tip.difficulty}</h2>
    <h2>Likes: {tip.totalliked}</h2>
    <div className="card-actions justify-end">
        
      <button onClick={()=>handleLike(tip._id)} className="btn bg-green-600">Like</button>
    </div>
  </div>
</div>
    );
};

export default TipDetails;