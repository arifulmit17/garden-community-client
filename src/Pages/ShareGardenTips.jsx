import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const ShareGardenTips = () => {
    const {user}=use(AuthContext)
    console.log(user);
    return (
        <div>
            <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <input type="text" name='user' value={user.displayName} placeholder="User" className="input" />
                <input type="text" name='email' value={user.email} placeholder="Email" className="input" />
                <input type="text" name='title' placeholder="title" className="input" />
                
                <input type="text" name='plant' placeholder="Plant type" className="input" />
                
                <input type="text" name='difficulty' className="input" placeholder="Difficulty level" list="difficulty" />
                    <datalist id="difficulty">
                    <option value="Easy"></option>
                    <option value="Difficult"></option>
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
            <button type='btn submit'>Submit</button>
            </form>
            Title (e.g., “How I Grow Tomatoes Indoors”)
Plant Type/Topic
Difficulty Level (Easy/Medium/Hard). [Use select type]
Description
Images url
Category (i.e, Composting, Plant Care, Vertical Gardening, etc.). [Use select type]
Availability (Public or Hidden). [Use select type]

        </div>
    );
};

export default ShareGardenTips;