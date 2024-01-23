
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import {Routes, Route} from "react-router-dom";
import LinkService from './LinkService';
import LinkContact from './LinkContact';

import './stylesheets/nav.css'

function Navb() {
  return (
    <>
<div className='navBar'>
            <div className='-nav nav-list'>
                TSC
            </div>
            <div className='nav-list'>
                {/* <Link to="/linkservices">Services</Link> */}
        </div>
            <div className='nav-list'>
                {/* <Link to="/linkcontact">Connect</Link> */}
            </div>
        </div>
    

      </>
  );
}

export default Navb;