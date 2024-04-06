import React, {useState} from 'react'
import './stylesheets/services.css'
import greenjumper from './assets/greenjumper.jpeg'
import servPkg from './newData'
import { Link } from "react-router-dom";

export default function Services () {


let servCards = servPkg.map((pack, index) => {
  if(index < 3) {
  
return(

<div className="pkg" key={pack.id}>
<img src={pack.img} width={100}></img>
    <div className='serv-title'>
    {pack.title}
      </div>
   <div className='sub-title'>
     {pack.sub}
      </div>  
{pack.desc}
<div>
   <br/><button >
                <Link to="/newservices" className='appt-btn'>LEARN MORE</Link>
            </button></div>

 </div>
)


}})


return(

<section className='-serv-sect'>

<header className="header-section">
 <img src={greenjumper} className='newServ-img img-fluid' />
<div >
 <div className="services-h1">Services
 </div>
<p className='services-p'>
Are you looking for effective support in managing your child's behaviour? Look no further. We provide practical guidance backed by ten plus years of experience in working with children and families. <br/><br/>
<p>
    <strong>
                  Complimentary 30 minute initial consultation provided at no cost. </strong>
                  <ul className='servtxt-desc'><br/>
               <li> 
                  For parents we provide two services: The Connection Package &  the Calm Package. 
               
                     For early childhood and primary school educators we offer the Curious package.
                     </li>
          
   </ul>
               </p> Discover if we are the right fit for your family by scheduling an appointment below.  
<br/>


         <div>  <br/>
              <button >
                <Link to="/newservices" className='appt-btn'>LEARN MORE</Link>
            </button>

            </div>

</p>
</div>
</header>



     <section className='serv-header'>
         <div> 
            
               <div className='sec-4'>
               At Trupti Samuel Consultancy, we understand that raising children can be extremely challenging and leave you feeling outright exhausted. Through an evidence-based approach, we will help you tackle the overwhelm and equip you with all the knowledge needed to navigate raising happy children from birth to fourteen year olds.
               <p ><strong>
                  Complimentary 30 minute initial consultation provided at no cost. </strong>
               </p> 

         <div>  
              <button >
                <Link to="/linkconnect" className='appt-btn'>Schedule Consultation</Link>
            </button>

            </div>
            </div> 
     

        
<div className='form-modal '>
  </div> 

<section className='-serv-options'>
   
    {servCards}
</section>
   </div>  </section>

</section>

)}
