import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router';
const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center dark:text-white dark:bg-green-900 bg-green-300 text-base-content rounded p-10">
  <div>
    <a className="ml-5 font-bold text-xl"> <span className='text-green-800 dark:text-green-300'>Garden</span> Community</a>
  </div>
  <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
    <Link to={'/exploreGardners'}>Explore Gardeners</Link>
    <Link to={'/browsetips'}>Browse tips</Link>
    <Link to={'/register'}>Signup</Link>
    
  </nav>
  <nav>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a target='blank' href='https://x.com/i/flow/login'>
          <FaTwitter size={30} />
    
          </a>
          <a target='blank' href='https://www.facebook.com/'>
          <FaFacebook size={30} />
    
          </a>
          <a target='blank' href='https://www.youtube.com/'>
          <FaYoutube size={30} />
    
          </a>
        </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Garden community </p>
  </aside>
</footer>
    );
};

export default Footer;