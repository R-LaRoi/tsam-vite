
import React from 'react'
import Contact from "./Contact";
import Navbar from './Navbar';

import EmailForm from './EmailForm';
import Footer from './Footer';
// import NewServices from './NewServices';



export default function LinkContact()  {

  
return(
<>
<Navbar />
  <div div className='container-contact'>
  <section className='link-contact'>
    <EmailForm />
 <Contact/>
  </section>


  </div>
  </>
)

}