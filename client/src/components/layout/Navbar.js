import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Navbar/logo.png'

 


const Navbar = () => {
    return (
        <div className="navbar text-primary">
            <h1>
            <img src={logo} alt="Logo" style={{width:'60px'}} />
            </h1>
         <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/services'>Services</Link>
           </li>
            <li>
            <Link to='/contactus'>Contact Us</Link>
             </li>
         </ul>

         <button  style={{height:'50px'}}   className='btn btn-sm'>Call Now</button>
        </div>
    )
}



export default Navbar
