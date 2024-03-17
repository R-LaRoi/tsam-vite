import React, { useState } from 'react';
import puzzle from './assets/3.png'
import emailjs from '@emailjs/browser';
import MessageButton from './ButtonModal';


export default function EmailForm (){

  const [ name, setName,] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  
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
     <img src={puzzle} width={80}></img> 
     <br/>
     
     <div className='message'>
            For more information to see if I am the right person to support your family, feel free to connect with me.
            </div>
       
 </div>
   
<label htmlFor="Name">Name:</label> 
<br/>
  <input  
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
 
    className='t-area' 
    name="message" 
    id="message" 
    cols="40" rows="7"
       defaultValue={message} 
      onChange={(e) => setMessage(e.target.value)}
      >
    </textarea>
 <br/>

<button type ="submit"  className='appt-btn'>


<MessageButton />

   </button> 

</form>

)

}