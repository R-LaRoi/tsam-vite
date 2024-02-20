import React, {useState} from 'react'
import './stylesheets/services.css'
import mdkids from './assets/mdkidsdsk.jpg'
import puzzle from './assets/2.png'
import servPkg from './data'
import { Link } from "react-router-dom";

export default function Services () {

// let [showForm, setShowForm] = useState(false);
// let [showMessage, setShowMesage] = useState (false);
// let [exitForm, setExitForm] = useState(false);


// function clickedBtn(event){
//       event.preventDefault()
//        return(setShowForm(!showForm))

// }

// function showThankYou(event){
//       event.preventDefault()
//          return(
//             setShowMesage(!showMessage))

// }

// function closeForm(event){
//    event.preventDefault()
//       return (setExitForm(!exitForm))

// }


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
   

            <ul className='servtxt-desc'>
               <li> 
                  For parents we provide two services; the Connection package & Calm package. 
                  </li>
                  <li> 
                     For early childhood and primary school educators we offer the Curious package.
                     </li>
            </ul>
       
         <div>  
              <button className='appt-btn'>
            
                <Link to="/linkconnect" className="appt-btn">BOOK NOW</Link>
   
            </button>
         {/* <button className='appt-btn' onClick={clickedBtn}>
            BOOK NOW
            </button> */}
            </div>
            </div> 
         </div>

        
<div className='form-modal '>

{/* {showForm ? 

 <form onSubmit={showForm} className='modal-form'>

    <div className="sub-text">   
     <img src={puzzle} width={100}></img> 
     <br/>


         { showMessage ? 
         <div className='message'>
         Your message has been sent. Thank you for choosing to connect with TSC! 
         </div>
         : 
         <div className='message'>
            For more information to see if I am the right person to support your family, feel free to connect with me.
            </div>
            }
 </div>
   

  <input  placeholder = 'name' type="text" id="fname" name="fname" className='t-area'
  /> 
  <br/>
  <br/>

  <input  placeholder ='email' type="text" id="email" name="email" className='t-area'/>
  <br />
  <br />
   <textarea  className='t-area' name="" id="" cols="50" rows="10"  > </textarea>
   <br/>
   <input className='appt-btn' onClick = {showThankYou} type="submit" id="form-btn"/> <br/>
     <button className='x-btn' onClick = {exitForm} type="click" id="form-btn">X</button> 
  </form>

 : null }

  </div>  */}
  </div> 

<section className='-serv-options'>
    {servCards}
</section>
     </section>
</section>
)}
