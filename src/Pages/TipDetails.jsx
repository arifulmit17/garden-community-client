import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const TipDetails = () => {
    const tip=useLoaderData()

    const handleLike=(_id)=>{
        const newlike=parseInt(tip.totalliked)+1
        const like={totalliked:newlike}
        console.log(tip);
        fetch(`http://localhost:3000/gardens_like/${_id}`,{
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
        <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={tip.photo}
      alt="tip" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{tip.title}</h2>
    <p> {tip.description}</p>
    <h3>Category: {tip.category}</h3>
    <h2>Difficulty: {tip.difficulty}</h2>
    <h2>Likes: {tip.totalliked}</h2>
    <div className="card-actions justify-end">
        
      <button onClick={()=>handleLike(tip._id)} className="btn btn-primary">Like</button>
    </div>
  </div>
</div>
    );
};

export default TipDetails;