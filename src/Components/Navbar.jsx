import { NavLink } from 'react-router-dom';
import './stylesheets/nav.css'

function Navb() {
  return (
    <>
<div className='-nav'>
            <div className='-nav nav-list'>
                TSC
            </div>
            <div className='nav-list'>
                {/* <NavLink to="/linkservice">Services</NavLink> */}
        </div>
            <div className='nav-list'>
                {/* <NavLink to="/linkcontact">Connect</NavLink> */}
            </div>
        </div>
    

      </>
  );
}

export default Navb;