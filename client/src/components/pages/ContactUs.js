import React, { Component } from 'react'
import hero3 from '../../images/Hero/hero3.jpg'
import Footer from '../layout/Footer'
const ContactUs = () => {
    return (
        <div>
        <div className='bg-danger'>
        <div className='bg-dark' style={{height:'850px', width:'125%',position:'absolute', marginLeft:'-25%',opacity:'60%',zIndex:'1'}}></div>
        <h1 className='large all-center text-success' style={{position:'relative', top:'300px',zIndex:'2'}}>Who's Representing Your Interests?</h1>
        <img src={hero3}/>
       <div className ='container'>
       <div>
 
           
        </div>
        <div className='grid-2'>
            <div className='card bg-dark' style={{width:'75%'}}>
                <h3>Don’t Delay Get in touch with us Today!</h3>
                <br/>
                <br/>
                <br/>

<h5>Mailing Address</h5>
5301 Laurel Canyon Blvd #237<br/>
Valley Village, CA 91607
<br/>
<br/>

<h5>Call Us</h5>
1-800-578-3157</div>

        <div className='card bg-primary'>
        <h3>Call Now
1-800-578-3157 </h3>

        <form>
            <input
             type="text"
             name='name'
             placeholder='Name*'
             />
                        <input
             type="email"
             name='email'
             placeholder='Email*'
             />
                        <input
             type="text"
             name='Phone Number'
             placeholder='Phone Number*'
             />
             <textarea
           
             name='Phone Number'
             placeholder='Your message'
             />
            <br/>
            <br/>
             <button className='btn btn-block btn-light'>Send Message</button>
   
        </form>
        </div>
        </div>    
 

        </div>
        </div>
       
       <div className='bg-dark'>
       <div className='container'>  
       <Footer/>
       </div>
         </div>
         </div>
        
       
       
     
    )
}

export default ContactUs
