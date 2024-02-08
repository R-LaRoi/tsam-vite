import React from 'react'
import tscvideo from './assets/tvid10.mp4'
import tscmobile from './assets/tscVideo2.mp4'
import './stylesheets/header.css'

export default function Header () {
  
return(

<div className='header'>
  <video playsInline autoPlay muted loop className='tsc-video' id='tsc-dsk'>
        <source
          src={tscvideo}
          type="video/mp4"
        />
      </video>

        <video playsInline autoPlay muted loop className='tsc-video' id='tsc-mb'>
        <source
          src={tscmobile}
          type="video/mp4"
        />
      </video>
<div className='header-text'>
 <div>TSC</div>
 <small className='tsc-name'>trupti samuel consultancy</small>
      <div className='header-subtext'>
        Working with families to build a solid foundation at home. 
      </div>
</div>
     

     <section>
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

     </section>
</div>

)

}