
import React from 'react'
import { NavLink } from "react-router-dom";
import './stylesheets/nav.css'

export default function Navbar () {
  

return(


  <nav className='-nav'>
        
      <ul className='nav-list'>
      <div className="title"><a href="index.html" className='nav-list initial'>TSC</a></div>
        <li><a className='nav-list' href="#service">Services</a></li>
        <li><a className='nav-list' href="about.html">Connect</a></li>
      </ul>
    </nav>

// <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
//   <NavLink className="navbar-brand" to="/main">TSC</NavLink>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//       <li className="nav-item active">
//         <NavLink className="nav-link" to="/main">Home <span className="sr-only">(current)</span></NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="/services">Services</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" href="/connect">Connect</NavLink>
//       </li>
//       {/* <li className="nav-item">
//         <NavLink className="nav-link disabled" href="#">Disabled</NavLink>
//       </li> */}
//     </ul>
    
//   </div>
// </nav>

)


}


{/* 
       <Routes>
        <Route index element={<Header/>} ></Route>
           <Route exact path="/services" element={<Services />} />
         <Route exact path="/contact" element={
           <Contact />} /> 
            <Route path="/header" element={
           <Header />} />
       </Routes> */}