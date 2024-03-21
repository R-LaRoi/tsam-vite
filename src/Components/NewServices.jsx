import "./stylesheets/newServices.css"
import newData from './newData'
import domino from './assets/domino.jpeg'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function NewServices () {

let servCards = newData.map((service, index) => {
  if(index < 3) { 
let arr = [(service.themes)]

return(

  <div className="col">
    <div className="card h-100" style={{ color:"#84675a"}}>
      <img src={service.image}className ="newServ-img img-fluid"/>
      <div className="card-body -newcard">
        <h5 className="card-title services-h2">{service.title}</h5>
        <p className="card-text services-p">{service.text}</p>
   
<ul className="services-p">
       <div className="services-p" style={{fontWeight: "400"}}>Themes & Theories:</div>
<li>
  <small >
    {arr}
      </small>
   
  
    </li>

 </ul>
      </div>
      
  <div>
  </div>
  </div>
  </div>
) 
}})


return(

<main>
<Navbar/>
<header className="header-section">
 <img src={domino} className='newServ-img img-fluid' />
<div >
 <div className="services-h1">Services
 </div>
<p className='services-p'>
We offer three key services - discover if we are the right fit for your family by scheduling an appointment below. 
<br/>
Complimentary 30 minute initial consultation provided at no cost.
<br/><br/>
 <button >
            
                <Link to="/linkconnect" className='appt-btn'>BOOK NOW</Link>
   
            </button>
</p>
</div>
</header>

<section className='serv-sec-2'>
  <div className='services-p'>
    Toddlerhood can be a complex time, and sometimes it can feel like you are stumbling around in the dark and waiting for the light at the end of the tunnel. In our personalised parent consults, we love nothing more than turning on the flashlights in any relentless toddler situation. These sessions will provide you with information backed by research to support your daily interactions with your toddler to ensure they are far less stressful!
    
    We provide practical guidance backed by 10 plus years of experience in working with children and families. 
    <br/><br/>
    <div className='serv-subtext'>
  For parents we provide two services the Connection package & Calm package.
For early childhood and primary school educators we offer the Curious package.
</div>
</div>
</section>
<section className='display-cards new-cards'>
<div className="row row-cols-1 row-cols-md-3 g-4">
{servCards}
 </div>

 </section>

 </main>

)

}