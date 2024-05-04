import React, { useState } from 'react';
import puzzle from './assets/3.png'
import emailjs from '@emailjs/browser';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function EmailForm (){

  const [ name, setName,] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
 let [showForm, setShowForm] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

function clickedBtn(){


return(
  <div>
{sendEmail ? (setShowForm(!showForm)): showForm}
  </div>
)

}

  function sendEmail(e){
      e.preventDefault();
      const serviceId = 'service_jwg8jre';
      const templateId = 'template_tt6v2bs';
      const publicKey = '5rhl2kY4IYMifP_UZ';
      const templateParams = {
            user_name : name,
            user_email :email,
            to_name: 'Trupti',
            message: message,
  }


emailjs.send(serviceId, templateId, templateParams, publicKey).then((response)=> {
  console.log('email sent', response);
  console.log(templateParams)
  setName('');
  setEmail('');
  setMessage('');







}).catch((error) => {
  console.error('error sending email', error)
  
});
     
}


return(
  <form  
      className='modal-form' 
      name="contact"  
      onSubmit={sendEmail} >
    <div className="sub-text">   
     
     <br/>
     <img src={puzzle} width={80}></img> 
     <div className='message'>
            For more information to see if we are the the right service to support your family, please contact us.
            </div>
       
 </div>
   
<label htmlFor="Name">Name:</label> 
<br/>
  <input  
     required  
  placeholder = '' 
  type="text" 
  id="fname" 
  name="user_name" 
  className='t-area'
  defaultValue={name}
  onChange={(e) => setName(e.target.value)}
  />      <br/>  
  <label 
  
  htmlFor="Name">Email:</label> 
<br/>
    <input 
    required  
    placeholder = '' 
    type="text" 
    id="fname" 
    name="user_email" 
    className='t-area'
     defaultValue={email}
      onChange={(e) => setEmail(e.target.value)}
  /> 
 



  <br/>  <label 
  
  htmlFor="Name">Message:</label>  <br/>

   <textarea  
    required  
    className='t-area' 
    name="message" 
    id="message" 
    cols="40" rows="7"
       defaultValue={message} 
      onChange={(e) => setMessage(e.target.value)}
      >
    </textarea>
 <br/>

<button type ="submit"  className='appt-btn' onClick={clickedBtn} >
send
   </button> 

<div className='form-modal '>
{showForm ? 
<section>
 <Modal
        show={showForm}
        onHide={handleShow}
        backdrop="static"
        keyboard={false}
      >
       
          <Modal.Title>TSC</Modal.Title>

        <Modal.Body>
      Thank you for contacting TS Consultancy. Your message has been sent. 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={clickedBtn}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</section>
  
 : null}
</div>
</form>



)

}