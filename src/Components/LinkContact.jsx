
import React from 'react'
import Contact from "./Contact";
import Navbar from './Navbar';
import Footer from './Footer';
import EmailForm from './EmailForm';


export default function LinkContact()  {
  
return(
<>
<Navbar />
  <section className='container-contact'>
  <section className='link-contact'>
 <EmailForm />

 <Contact/>

  </section>
   <Footer />
  </section>

  </>
)

}