

import React from 'react'
import './stylesheets/services.css'
import mdkids from './assets/mdkidsdsk.jpg'
import feet from'./assets/1.png'
import puzzle from './assets/2.png'
import bulb from './assets/3.png'

export default function Services () {
  
return(

<section className='-serv-sect'>
    <h1 className='title'>Mission</h1>
      <section className="mission">
    
  <div className='mission-text'>

    <div className='description'>
      
         At Trupti Samuel consultancy our mission is to be a source of assistance to navigate emotional and social challenges in children. We provide practical strategies embedded in evidence-based research that aims to empower individuals and communities towards resilience and wellbeing through empathy and proactive solutions.
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
   <h1 className='title'> Services</h1>

     <img
        src={mdkids} className='serv-dsk-img'
        />
  <div className='-servtext'>
Are you looking for effective support in managing your child's behaviour? Look no further. We provide practical guidance backed by 10 plus years of experience in working with children and families. We offer three key services - discover if we are the right fit for your family by scheduling an appointment below. 
  
<div>  <button className='appt-btn'>BOOK NOW</button></div>
                </div> 


</div>

<section className='-serv-options'>
  For parents we provide two services; the Connection package & Calm package. 
<div class="pkg">
<img src={bulb} width={100}></img>
    <div className='serv-title'>CONNECTION PACKAGE</div>
   <div>Parenting Consults</div>  
 The connection package focuses on parent- child relationship, family systems theory, and so forth to enhance parenting skills to better manage behaviours from a connection lens. </div>
  
  
  <div class="pkg">
      <img src={feet} width={100}></img>
<div className='serv-title'>  Calm Package</div>  
   <div>Baby Massage (BM)</div>
     
The calm package focuses on baby massage (BM) – BM offers a warm & calm space for parents to connect with their little ones. B.M principles are based on attachment theory, power of touch. It has been evidenced to increase stimulation, muscle development, sleep & bond between parent & child.  </div>
  

  <div class="pkg">  <img src={puzzle} width={100}></img>
     <div className='serv-title'>    Curious PACKAGE </div>
   <div>Professional Development for Early & Primary School Educators</div>
     
 If you're an early childhood centre & you're seeking professional development workshops; I tailor sessions based on the needs of the centre. Past workshops have focused on introduction to trauma, enhancing emotional and social development. </div>

</section>
     </section>
</section>
)

}