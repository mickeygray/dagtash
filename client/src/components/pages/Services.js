import React from 'react'
import Footer from '../layout/Footer'
import hero2 from '../../images/Hero/hero2.jpg'
import calc from '../../images/Body/calc.jpg'
import Feedback from '../layout/Feedback.js'
import Investigation from '../../images/Services/investigation.jpg'
import Review from '../../images/Services/Review.jpg'
import Freedom from '../../images/Services/Freedom.jpg'


const Services = () => {
    return (
    <div classname='bg-success'>
        <div className='container'>
        <div className='bg-dark' style={{height:'700px', width:'125%',position:'absolute', marginLeft:'-25%',opacity:'80%',zIndex:'1'}}></div>
        <h1 className='large all-center text-success' style={{position:'relative', top:'300px',zIndex:'2'}}>Consultation and Tax Services</h1>
        <img style={{opacity:'66%',height:'642px'}}src={hero2} />
             <div className='grid-2'>
            <div className='card'> 
            <h1>Tax Solutions that protect your assets</h1>
             </div>
            <div className='card'><h3>Tax services</h3><br/> We present you with the best in tax support and resolution. We will keep you informed and support you through out the entire process, shouldering most of the work and guide your tax situation to a positive resolution.</div>
         </div>
         <br/>
         <br/>
         <div className='grid-2'>
            <div className='grid-2'> 

<div>
<h4>Stop Wage Garnishments</h4>
<p>We end wage garnishment for you, freeing up spending money and hard earned cash</p>
<br/>
<h4>Lift Bank Levies</h4>
<p>Experience the freedom of the removal of your bank levies</p>

<br/>
<h4>Remove Tax Liens</h4>
<p>Our approach is highly effective in the removal of tax liens.</p>

<br/>
<h4>File Your Back Tax Returns</h4>

We file back taxes for you making taxes simpler than ever.
</div>
<div>

<h4>IRS Tax Audits</h4>
<p>Make tax audits straight forward and resolve them quickly with us.</p>
<br/>
<h4>Navigate your IRS Tax Matter with a Professional</h4>
<p>Negotiate an IRS Tax Settlement with favorable results.</p>
<br/>
<h4>Negotiate Unpaid Payroll Taxes</h4>
<p>We negotiate for you, using our many years of payroll tax experience.</p>
<br/>
<h4>Save Time, Save Money and Sleep more peacefully</h4>
<p>Save thousands let us guide you to tax resolution.</p>
</div> 
</div>
<div className='card grid-2'>
<img className='round-img' src={calc}/>
<img className='round-img' src={Freedom}/>
<img className='round-img' src={Investigation}/>
<img className='round-img' src={Review}/>
</div>
</div> 
<br/>
<br/>
<div className='bg-light'>
    <h1 className='text-center'>Client's Feedback</h1>
    <div className ='grid 3'>
    <Feedback/>
    </div>
    <div className='grid-2 bg-danger' style={{height:'10rem',zIndex:'2'}}>
       <div className='all-center'> <h2>Get your tax solution NOW !!!</h2></div>
       <div className='all-center'> <button className='btn btn-light'>Call Now</button></div>     
       </div>
        </div>  
            </div>
        <div className='bg-dark'>  
       <div className='container'>   <Footer/></div>
    
       </div>
        </div>
      
      
    )
}

export default Services
