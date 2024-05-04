import { Link } from "react-router-dom";
import './stylesheets/nav.css'

export default function Navbar() {
  return  (
<section className="nav-container">
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" id="nav-btn">TSC <i className="fa-solid fa-bars"></i></button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title " id="offcanvasWithBothOptionsLabel" >Trupti Samuel Consultancy</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body ">
    <p>Learn more about our consultations. Schedule your appointment today!</p>
<ul className="ul-list-menu">
        <li> <Link to="/" className="nav-list">TSC</Link>  </li>
         <li> <Link to="/newservices" className="nav-list">Services</Link>  </li>
          <li> <Link to="/linkconnect" className="nav-list">Connect</Link>  </li>
     </ul>
  </div>
  
</div>

</section>
  )



};



