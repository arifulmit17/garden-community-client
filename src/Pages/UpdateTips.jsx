import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTips = () => {
    const {_id,totalliked,photo,category,difficulty,plant,title,description,availability}=useLoaderData()
    
    const {user}=use(AuthContext)
    
    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const formData = new FormData(form);
        const newGarden = Object.fromEntries(formData.entries())
        console.log(newGarden);

        fetch(`${import.meta.env.VITE_API_URL}/gardens/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newGarden)
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
        <div className='bg-green-200 dark:bg-green-700 w-full'>
            <h1 className='font-bold text-5xl text-center my-10'>Update tips</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <input type="text" name='user' value={user.displayName} placeholder="User" className="input w-full" />
                <input type="text" name='email' value={user.email} placeholder="Email" className="input w-full" />
                <input type="text" name='title' defaultValue={title} placeholder="title" className="input w-full" />
                
                <input type="text" name='plant' defaultValue={plant} placeholder="Plant type" className="input w-full" />
                
                <input type="text" name='difficulty' defaultValue={difficulty} className="input w-full" placeholder="Difficulty level" list="difficulty" />
                    <datalist id="difficulty">
                    <option value="Easy"></option>
                    <option value="Medium"></option>
                    <option value="Hard"></option>
                    </datalist>
                <input type="text" name='description' defaultValue={description} placeholder="Description" className="input w-full" />
                <input type="url" name='photo' defaultValue={photo} placeholder="photo Url" className="input w-full" />
            <input type="text" name='category' defaultValue={category} className="input w-full" placeholder="Category" list="type" />
                    <datalist id="type">
                    <option value="Composting"></option>
                    <option value="Plant Care"></option>
                    <option value="Vertical Gardening"></option>
                    </datalist>
            <input type="text" name='availability' defaultValue={availability} className="input w-full" placeholder="Availability" list="available" />
                    <datalist id="available">
                    <option value="Public"></option>
                    <option value="Hidden"></option>
                    </datalist>
             <input type="text" name='totalliked' defaultValue={totalliked} placeholder="total liked" className="input w-full" />
            <button className='btn w-full md:ml-40 lg:ml-80 bg-green-500' type=' submit'>Update</button>
            </form>
            
        </div>
    );
};

export default UpdateTips;