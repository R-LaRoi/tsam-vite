

import React from 'react'
import './stylesheets/services.css'
import mdkids from './assets/mdkidsdsk.jpg'
import feet from'./assets/1.png'
import puzzle from './assets/2.png'
import bulb from './assets/3.png'

export default function Services () {
  
return(

<>
    <h1 className='title'>mission</h1>
      <section className="mission">
    
  <div className='mission-text'>

    <div className='description'>
      
         Trupti Samuel consultancy offers a variety of services that is designed to support children and families from a holistic lens. Interventions are based on attachment, child development, trauma informed practises; and the likes. <br/><br/>The goal is to provide a safe and comfortable space to be heard and thereby guided from a place of curiosity and hope, to provide practical support.
</div>
  </div>
       <img
          className="mission-img"
          src="https://github.com/R-LaRoi/TSC/assets/114012059/fdd4cbd7-d481-4f62-b012-6e9974f4ddbf"
          alt=""
        />

    
     </section>

     <section className='services-'>
<div> 
   <h1 className='title'> services</h1>

     <img
        src={mdkids} className='serv-dsk-img'
        />
  <div className='-servtext'>
  If you are seeking support to better manage your child's behaviours; I can offer practical guidance. I have over a decade of experience working with children and families. I offer three main services. For more information to see if I am the right person to support your family, schedule an appointment below. 
  
<div>  <button className='appt-btn'>BOOK NOW</button></div>
                </div> 


</div>

<section className='-serv-options'>
<div class="pkg">
<img src={bulb} width={100}></img>
    <div className='serv-title'>Connection PACKAGE</div>
   <div>Parenting Consults</div>  
 The connection package focuses on parent- child relationship, family systems theory, and so forth to enhance parenting skills to better manage behaviours from a connection lens. </div>
  
   <div class="pkg">  <img src={puzzle} width={100}></img>
     <div className='serv-title'>    Curious PACKAGE </div>
   <div>Professional Development for Early Childhood Educators / Primary School Educators</div>
     
 If you're an early childhood director/ centre & you're seeking professional development workshops; I tailor sessions based on the needs of the centre. Past workshops have focused on introduction to trauma, enhancing emotional/ social development; and the likes. </div>
  
  <div class="pkg">
      <img src={feet} width={100}></img>
<div className='serv-title'>  Calm Package</div>  
   <div>Baby Massage (B.M)</div>
     
The calm package focuses on baby massage (B.M) – B. M offers a warm & calm space for parents to connect with their little ones. B.M principles are based on attachment theory, power of touch & so forth. It has been evidenced to increase stimulation, muscle development, sleep & bond between parent & child.  </div>
  
</section>
     </section>
</>
)

}