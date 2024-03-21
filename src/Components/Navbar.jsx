import { Link } from "react-router-dom";
import './stylesheets/nav.css'

export default function Navbar() {
  return  (
<>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" id="nav-btn">TSC <i class="fa-solid fa-bars"></i></button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title tsc-name" id="offcanvasWithBothOptionsLabel" >Trupti Samuel Consultancy</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body tsc-name">
    <p>Learn more about our consultations. Schedule your appointment today!</p>
<ul>
        <li> <Link to="/" className="nav-list">TSC</Link>  </li>
         <li> <Link to="/newservices" className="nav-list">Services</Link>  </li>
          <li> <Link to="/linkconnect" className="nav-list">Connect</Link>  </li>
     </ul>
  </div>
  
</div>

</>
  )



};



