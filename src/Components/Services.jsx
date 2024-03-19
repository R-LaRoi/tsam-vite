import React, {useState} from 'react'
import './stylesheets/services.css'
import mdkids from './assets/mdkidsdsk.jpg'
import puzzle from './assets/2.png'
import servPkg from './data'
import { Link } from "react-router-dom";

export default function Services () {


let servCards = servPkg.map((service, index) => {
  if(index < 3) {
  
return(

<div className="pkg" key={service.id}>
<img src={service.image} width={100}></img>
    <div className='serv-title'>
    {service.title}
      </div>
   <div className='sub-title'>
     {service.sub}
      </div>  
{service.text}
 </div>
)


}})


return(

<section className='-serv-sect'>
     <section className='services-'>
         <div> 
            <h1 className='title'>Services</h1>
               <img src={mdkids} className='serv-dsk-img'/>
               <div className='-servtext'>
               Are you looking for effective support in managing your child's behaviour? Look no further. We provide practical guidance backed by 10 plus years of experience in working with children and families. We offer three key services - discover if we are the right fit for your family by scheduling an appointment below.  
               <p>
                  Complimentary 30 minute initial consultation provided at no cost. 
               </p>
               <ul className='servtxt-desc'>
               <li > 
                  For parents we provide two services the Connection package & Calm package. 
                  
                  </li>
                  <li> 
                     For early childhood and primary school educators we offer the Curious package.
                     </li>
   </ul>

           
       
         <div>  
              <button className='appt-btn'>
            
                <Link to="/linkconnect" className="appt-btn">BOOK NOW</Link>
   
            </button>

            </div>
            </div> 
         </div>

        
<div className='form-modal '>
  </div> 

<section className='-serv-options'>
    {servCards}
</section>
     </section>
</section>
)}
