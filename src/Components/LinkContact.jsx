
import React from 'react'
import Contact from "./Contact";
import Navbar from './Navbar';
import puzzle from './assets/3.png'


export default function LinkContact()  {
  
return(

  <div div className='container-contact'>
<Navbar />
  <section className='link-contact'>
    <form  className='modal-form'>
    <div className="sub-text">   
     <img src={puzzle} width={80}></img> 
     <br/>

         {/* <div className='message'>
         Your message has been sent. Thank you for choosing to connect with TSC! 
         </div> */}
         
         <div className='message'>
            For more information to see if I am the right person to support your family, feel free to connect with me.
            </div>
            
 </div>
   

  <input  placeholder = 'name' type="text" id="fname" name="fname" className='t-area'
  /> 
  <br/>
  <br/>

  <input  placeholder ='email' type="text" id="email" name="email" className='t-area'/>
  <br />
  <br />
   <textarea  className='t-area' name="" id="" cols="40" rows="7"  > </textarea>
   <br/>
   <input className='appt-btn'  type="submit" id="form-btn"/> <br/>
     {/* <button className='x-btn'  type="click" id="form-btn">X</button>  */}
    
  </form>
 <Contact/>
  </section>


  </div>
)

}