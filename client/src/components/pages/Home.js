import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../images/Hero/hero.jpg'
import Footer from '../layout/Footer'
import consultant from '../../images/Body/consultant.jpg'
import dollars from '../../images/Body/dollars.jpg'
import bottom from '../../images/Body/bottom.jpg'



const Home = () => {
  

    return (

         
        <div className='bg-success'>
        <div className='container'>
        <div  className='bg-success' >
          
       <div className='grid-2' style={{height:'100vh', width:'100%',zIndex:'0'}}>
       <div className='bg-dark' style={{height:'609px', width:'125%',position:'absolute', marginLeft:'-25%',opacity:'60%',zIndex:'1'}}></div>
          <div className='m-3 p-2' style={{}}>
         
         <br/>
    
    

  
         <h1 className='text-danger' style={{zIndex:'2'}}><strong>Result-Driven</strong></h1>
          <h2 style={{zIndex:'2'}} className='text-primary'>Legal Represientation</h2>
          <p  style={{color:'white', fontSize:'1rem', zIndex:'2', color:'black'}}>
            <strong>
            We provide proven and transparent solutions for tax preperation, audit, 
            tax conflict matters, back taxes, book keeping, payroll and more.
            We make the protection of your 
            finances and property our top priority. Talk to one of our experts now!
            </strong>
           </p>
           <br/>
         
           <button  style={{fontSize:'1rem'}} className = 'btn btn-primary btn-sm'>Free Consultation</button>
           </div>
           <div>
        <img src={hero} style={{height:'100vh', width:'100vh',backgroundColor:'#d3d3d3',opacity:'13%', float:'right' }}/>
        </div>
           </div>
       
           <br/>


        <div className='grid-2 bg-primary' >
    
<div className='grid-2 ' style={{fontSize:'.8rem'}}>
  <div>
<p className='m-2 listli'> 
<span style={{fontSize:'1rem'}}>Bookkeeping Services</span>
<br/>
Accounts receivable, accounts payable, profit and loss, balance sheets, general ledgers,
and more.
</p>
<p className='m-2'>
<span style={{fontSize:'1rem'}}>Payroll Services</span>

<br/>
Easy Setup and Maintenance. Employee and Employer reports at your fingertips.
Eliminate record keeping head aches.
</p>
</div>
<div>
<p className='m-2'>
<span style={{fontSize:'1rem'}}>Audit Defense</span>

<br/>
Our team of attorneys and skilled negotiators will work with you to build a wining
defense.
Our specialists have spent years understanding the audit process, and are skilled in
every aspect of appeals and procedure.
We will take your case through the appeals process.
</p>
<p className='m-2' >
<span style={{fontSize:'1rem'}}>Liability Representation</span>

<br/>
We specialize in representing the interests of Taxpayers with outstanding and
escalated tax debt.
We stop notices demanding repayment and threatening to garnish wages and/or
bank accounts. We fight to have all qualifying penalties and interest removed from
principal. We negotiate the amount owed, create payment agreements, and much
much more.
</p>
</div>
</div>
<div>   

<br/>
<br/> 
<div className='card bg-danger' style={{ position:'absolute', float:'right',height:'80%', width:'40%', opacity:'100%'}}> 
<p className='lead all-center' style={{ position:'relative', top:'180px',zIndex:99}}> We help our clients succeed by delivering tax results that matter</p>
<img style={{position:'relative', top:'0', height:'350px', width:'100%', opacity:'25%'}} src={consultant}/>      
      
</div>
</div>
</div>
<br/>
<br/>    
   <div className='container mx-3 text-dark'>
        
          <h2 className = 'text-primary'>How it Works...</h2>
           <h1> 
            Effective tax solutions
            for every Client
            </h1>
<br/>
           <div className= 'grid-2'>
<div>        
<h5 className='text-primary'>Discovery</h5>
<p>
Comprehensive Consultation coupled with a free financial analysis to determine
what plans and programs and rates you qualify for.
</p>
<br/>
<br/>
<h5 className='text-primary'>Representation</h5>
<p>
Our initial step is establishing IRS contact to protect our clients with a Power of Attorney to protect from any immediate action. 
</p>
</div>
<div>
<h5 className='text-primary'>Protect and Investigate</h5>
<p>  We then investigate your paperwork straight from the IRS and prepare a plan of action that clearly lays out how we reduce your tax bill.</p>
<br/>
<br/>
<h5 className='text-primary'>Resolution</h5>
<p>
After our process you will be free from the IRS, and have all your tax issues resolved, and hopefully get a better nights sleep!
</p>
</div>
           
</div>  

<br/>
  <div className ='card grid-2'>
    <div>
     <div className='card bg-success'> 
     <img src={dollars}/>
     </div>
    
  </div>
  <div>
 <h2 className='text-danger'>Save Money and Sleep Well</h2> 
<h3 className='text-primary'>Who's Representing Your Interests?</h3>
We work with clients from all over the U.S. providing comprehensive solutions to
thousands. Let us help you make the transition to freedom. Take back what is
important, your time and peace of mind.
<br/>
<br/>

<Link to='/Services'>More details</Link>
  </div>
  </div>
  </div>
  <div className='grid-2 bg-light p-2'>
    <div style={{height:'400px', width:'500px'}}>
    <br/>
    <br/>
    <h2>Advanced tax strategy and expert consultation.</h2>
    <br/>
Our experts identify your current tax situation and create a favorable outcome with the vast set of tools at our disposal.
<ul>
<br/>
<li> Advisory and Financial Consulting</li>
<li> Tax Reductions</li>
<li> Legal Consultancy</li>
<li> Top-Notch Customer Service</li>
<li> And More...</li>
</ul>
    </div>
    <div>
      <br/>
    <img src={bottom}></img>
    </div>
  </div>
  <div style={{height:'100px'}}className='grid-2 bg-primary all-center'>
    <div>
<h3>Recieve Your Free Consulation Now</h3>
    </div>
    <div>
    <button className='btn btn-danger'><h2>Free Consultation</h2></button>
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

export default Home
