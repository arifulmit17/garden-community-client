import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const ShareGardenTips = () => {
    const {user}=use(AuthContext)
    

    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const formData = new FormData(form);
        const newGarden = Object.fromEntries(formData.entries())

        fetch('https://b11a10garden-community-server.vercel.app/gardens', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGarden)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
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
        <div className='bg-green-200 dark:bg-green-700 w-full'>
            <form  onSubmit={handleSubmit} className='grid gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <input type="text" name='user' value={user.displayName} placeholder="User" className="input w-full" />
                <input type="text" name='email' value={user.email} placeholder="Email" className="input w-full" />
                <input type="text" name='title' placeholder="title" className="input w-full" />
                
                <input type="text" name='plant' placeholder="Plant type" className="input w-full" />
                
                <input type="text" name='difficulty' className="input w-full" placeholder="Difficulty level" list="difficulty" />
                    <datalist id="difficulty">
                    <option value="Easy"></option>
                    <option value="Medium"></option>
                    <option value="Hard"></option>
                    </datalist>
                <input type="text" name='description' placeholder="Description" className="input w-full" />
                <input type="url" name='photo' placeholder="photo Url" className="input w-full" />
            <input type="text" name='category' className="input w-full" placeholder="Category" list="type" />
                    <datalist id="type">
                    <option value="Composting"></option>
                    <option value="Plant Care"></option>
                    <option value="Vertical Gardening"></option>
                    </datalist>
            <input type="text" name='availability' className="input w-full" placeholder="Availability" list="available" />
                    <datalist id="available">
                    <option value="Public"></option>
                    <option value="Hidden"></option>
                    </datalist>
            <input type="text" name='totalliked' placeholder="total liked" className="input w-full" />
            <input className='btn w-full ml-80 bg-green-500' value={'submit'} type='submit'/>
            </form>
            

        </div>
    );
};

export default ShareGardenTips;