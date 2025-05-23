import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Switcher from './switcher';

import './Navbar.css'

const Navbar = () => {
  const {user, LogOutUser}=use(AuthContext);

  const handleclick=()=>{
    document.getElementById('logout').classList.remove('hidden')
  }
  
  const handleLogout=()=>{
      LogOutUser().then(()=>{

        console.log('signout successful');
      })
      .catch(error=>{
        console.log(error);
      })
    }
    const links=<>
      <li><Link to={'/'}>Home</Link></li>
      {user && <><li><NavLink to={'/sharegardentips'}>Share a Garden Tip </NavLink></li></>}
      <li><Link to={'/exploreGardners'}>Explore Gardeners</Link></li>
      <li><Link to={'/browsetips'}>Browse tips</Link></li>
      {user && <><li><Link to={'/mytipspage'}>My Tips </Link></li></>}
      <li><Link to={'/register'}>Signup</Link></li>
    </>
    return (
        <div className="navbar bg-green-300 dark:text-white dark:bg-green-900 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> <span className='text-green-800 dark:text-green-300'>Garden</span>Community</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    
    <Switcher></Switcher>

    {user? <>
      <h1>{user.email}</h1>
      <div className="w-10">
      
          <img onClick={handleclick} className='rounded-full myDIV'
            alt="Tailwind CSS Navbar component"
            
            src={`${user? user.photoURL: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}`} />
        <div className="hide">{user.displayName}
        </div>
        
        </div>
      <a onClick={handleLogout} id='logout' className='btn hidden bg-white'>Log out</a>
    </> : <NavLink className='btn bg-white'  to={'/login'}>Login</NavLink>}
  </div>
</div>
    );
};

export default Navbar;