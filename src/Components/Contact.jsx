import React from 'react'
import './stylesheets/contact.css'
import trupti from './assets/trupti.png'


export default function Contact () {
  
return(

<div className='contact-pg'>

     <div>
      <div className='title'>
  Founder</div>
  <img  className="trupti" src={trupti}></img> 
</div>

<div className='abt-text'>

       
        <br></br>
         <small><b>TRUPTI SAMUEL </b></small>
           <small> | FOUNDER</small>  <br></br>
With over a decade of experience in child and family services; incorporating proven strategies that are supported by evidence-based research in child development, attachment theory, emotional development, trauma informed practices. I am committed to supporting families by fostering a space that aims to develop and nurture secure and positive relationships between parent and child.

I am intentional in maintaining balance from a holistic perspective that is interwoven in the services I provide. Besides a passion in the child and family space, I spend time indulging in ocean adventures, travel, and hiking.

 <ul className='icons'>
<li className='i-list'><i className="fa-brands fa-linkedin"></i></li>
  <li className='i-list'><i className="fa-brands fa-instagram"></i></li>
  <li className='i-list'><i className="fa-brands fa-facebook"></i></li> </ul>
</div>

</div>






)

}