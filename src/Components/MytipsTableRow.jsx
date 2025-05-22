import React from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';

const MytipsTableRow = ({tip}) => {
    const handleDelete=(id)=>{
        console.log(id);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/gardens/${id}`,{
        method: 'DELETE'
    }).then(res=>res.json()).then(data=>{
        if(data.deletedCount){
            Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
    });
        }
    })

   
  }
});

    }

    return (
        <>
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
        <th>
            <button onClick={()=>handleDelete(tip._id)} className="btn btn-primary">Delete</button>
        <NavLink to={`/updatetips/${tip._id}`}>
            <button className="btn btn-primary">Update</button>
        </NavLink>
            <NavLink to={`/tipdetails/${tip._id}`}>
                    <button className="btn btn-ghost btn-xs">See More</button>
            </NavLink>
          
        </th>
      </tr>
        </>
    );
};

export default MytipsTableRow;