import { Link } from "react-router-dom";
import './stylesheets/nav.css'

function Navbar() {
  return (
    <>
  <ul className="-nav">        
  <li className="nav-list">
        <Link to="/" className="nav-list ">TSC</Link>             
     
         </li>
       <li className="nav-list">
          <Link to="/newservices" className="nav-list ">services</Link>
         </li>
       <li className="nav-list">
        
         <Link to="/linkconnect" className="nav nav-list  ">connect</Link>
         </li>
      </ul>
    

      </>
  );
}

export default Navbar;