import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Switcher from './switcher';



const Navbar = () => {
  const {user, LogOutUser}=use(AuthContext);
  
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
      <li><NavLink to={'/sharegardentips'}>Share a Garden Tip (Private)</NavLink></li>
      <li><Link to={'/exploreGardners'}>Explore Gardeners</Link></li>
      <li><Link to={'/browsetips'}>Browse tips</Link></li>
      <li><Link to={'/mytipspage'}>My Tips (Private)</Link></li>
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
    <h1>{user?.displayName}</h1>
    <img className='size-10 rounded-full' src={user?.photoURL} alt="User photo" />
      <a onClick={handleLogout} className='btn bg-white'>Log out</a>
    <NavLink to={'/login'} className="btn">Login</NavLink>
  </div>
</div>
    );
};

export default Navbar;