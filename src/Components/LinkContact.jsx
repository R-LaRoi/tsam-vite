
import React from 'react'
import Contact from "./Contact";
import Navbar from './Navbar';

import EmailForm from './EmailForm';
// import NewServices from './NewServices';



export default function LinkContact()  {

  
return(
<>

  <div div className='container-contact'>
<Navbar />
  <section className='link-contact'>
    
    <EmailForm />
 <Contact/>
  </section>


  </div>
  </>
)

}