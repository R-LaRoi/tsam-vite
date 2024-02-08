import React, {useState} from 'react'
import './stylesheets/services.css'
import mdkids from './assets/mdkidsdsk.jpg'
import feet from'./assets/1.png'
import puzzle from './assets/2.png'
import bulb from './assets/3.png'


export default function Services () {
let [showForm, setShowForm] = useState(false);
let [showMessage, setShowMesage] = useState (false);
let [exitForm, setExitForm] = useState(false);

function clickedBtn(event){
      event.preventDefault()
return(setShowForm(!showForm))

}

function showThankYou(event){
      event.preventDefault()
return(setShowMesage(!showMessage))

}
function closeForm(event){
   event.preventDefault()
return (setExitForm(!exitForm))

}



  
return(

<section className='-serv-sect'>
    
     <section className='services-'>
<div> 
   <h1 className='title'> Services</h1>

     <img src={mdkids} className='serv-dsk-img'/>
  <div className='-servtext'>
Are you looking for effective support in managing your child's behaviour? Look no further. We provide practical guidance backed by 10 plus years of experience in working with children and families. We offer three key services - discover if we are the right fit for your family by scheduling an appointment below. 
   <div>
    <ul className='servtxt-desc'>
      <li> 
         For parents we provide two services; the Connection package & Calm package. 
         </li>
   <li> For early childhood and primary school educators
we offer the Curious package.</li>
   </ul></div>
<div>  
  
  <button className='appt-btn' onClick={clickedBtn}>
   BOOK NOW
   </button>
   </div>
   </div> 
</div>

<div className='form-modal '>

{showForm ? 

 <form onSubmit={showForm} className='modal-form'>

    <p className="sub-text">   <img src={puzzle} width={70}></img> <br/>


 { showMessage ? 
<div className='message'>
Your message has been sent. Thank you for choosing to connect with TSC! 
</div>
 : 
 <div className='message'>
   For more information to see if I am the right person to support your family, feel free to connect with me.
   </div>
   }
 </p>
   

  <input  placeholder = 'name' type="text" id="fname" name="fname" className='t-area'
  /> <br/>
  <br/>

  <input  placeholder ='email' type="text" id="email" name="email" className='t-area'/>
  <br />  <br />

    <textarea  className='t-area' name="" id="" cols="50" rows="10"  > </textarea><br/>
<input className='appt-btn' onClick = {showThankYou} type="submit" id="form-btn"/> <br/>
     <button className='x-btn' onClick = {exitForm} type="click" id="form-btn">X</button> 
</form>

 : null }


  </div>


<section className='-serv-options'>
  {/* For parents we provide two services; the Connection package & Calm package.  */}
<div className="pkg">
<img src={bulb} width={100}></img>
    <div className='serv-title'>
      CONNECTION PACKAGE
      </div>
   <div className='sub-title'>
      Parenting Consultation
      </div>  
 The connection package focuses on parent- child relationship, family systems theory, and so forth to enhance parenting skills to better manage behaviours from a connection lens. 
 </div>
  
  
<div className="pkg">
 <img src={feet} width={100}> 
 </img>
   <div className='serv-title'>  
   Calm Package
   </div>  
   <div className='sub-title'>
      Baby Massage (BM)
      </div>
     
The calm package focuses on baby massage (BM) – BM offers a warm & calm space for parents to connect with their little ones. B.M principles are based on attachment theory, power of touch. It has been evidenced to increase stimulation, muscle development, sleep & bond between parent & child.  
</div>
  
  <div className="pkg">  <img src={puzzle} width={100}></img>
     <div className='serv-title'>    
     Curious PACKAGE 
     </div>
    <div className='sub-title'>
      Professional Development for Early & Primary School Educators
      </div>
     
 If you're an early childhood centre & you're seeking professional development workshops; I tailor sessions based on the needs of the centre. Past workshops have focused on introduction to trauma, enhancing emotional and social development. 
 </div>

</section>
     </section>
</section>
)}
