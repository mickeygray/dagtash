import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Navbar/logo.png'
const Footer = () => {
    return (
        <div className=" grid-3 bg-dark text-primary">
         <div>
         <br/>
         <br/>
           <h1>
            <img src={logo} style={{width:'90px'}} alt="Logo" />
            </h1>
            <p>
            5301 Laurel Canyon Blvd #237<br/>
             Valley Village, CA 91607 <br/>
            © 2019 TaxAdvocateGroup <br/>
            Terms of Service <br/>
            Privacy policy <br/>
            </p>
            </div>
          <div>
         <br/>
         <br/>
         <br/>
         <br/>
         <ul>
         
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>Services</Link>
           </li>
            <li>
            <Link to='/about'>Contact Us</Link>
             </li>
         </ul>
         </div>  
         <div>
        <br/>
        <br/>
        <br/>
        <br/>
       
         <button className='btn btn-primary'><h2>Call Now</h2></button>
         </div>
        </div>
    )
}

export default Footer
