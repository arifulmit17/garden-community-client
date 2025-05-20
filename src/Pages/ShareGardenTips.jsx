import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const ShareGardenTips = () => {
    const {user}=use(AuthContext)
    console.log(user);

    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const formData = new FormData(form);
        const newGarden = Object.fromEntries(formData.entries())
        console.log(newGarden);

        fetch('http://localhost:3000/gardens', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGarden)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    console.log('added successfully.')

                    Swal.fire({
                        title: "Data added successfully!",
                        icon: "success",
                        draggable: true
                      });

                    //   form.reset()
                }
            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <input type="text" name='user' value={user.displayName} placeholder="User" className="input" />
                <input type="text" name='email' value={user.email} placeholder="Email" className="input" />
                <input type="text" name='title' placeholder="title" className="input" />
                
                <input type="text" name='plant' placeholder="Plant type" className="input" />
                
                <input type="text" name='difficulty' className="input" placeholder="Difficulty level" list="difficulty" />
                    <datalist id="difficulty">
                    <option value="Easy"></option>
                    <option value="Medium"></option>
                    <option value="Hard"></option>
                    </datalist>
                <input type="text" name='description' placeholder="Description" className="input" />
                <input type="url" name='photo' placeholder="photo Url" className="input" />
            <input type="text" name='category' className="input" placeholder="Category" list="type" />
                    <datalist id="type">
                    <option value="Composting"></option>
                    <option value="Plant Care"></option>
                    <option value="Vertical Gardening"></option>
                    </datalist>
            <input type="text" name='availability' className="input" placeholder="Availability" list="available" />
                    <datalist id="available">
                    <option value="Public"></option>
                    <option value="Hidden"></option>
                    </datalist>
            <button  type='btn submit'>Submit</button>
            </form>
            

        </div>
    );
};

export default ShareGardenTips;