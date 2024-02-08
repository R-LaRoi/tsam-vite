
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LinkService from './Components/LinkService'
import LinkContact from './Components/LinkContact'
import Layout from './Components/Layout'
import Homepage from './Homepage';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Services from './Components/Services';


function App() {
  return (
    <>

 <BrowserRouter>
 {/* <Homepage/> */}
       <Routes>
          <Route exact path="/" element={
           <Homepage />} />
         <Route path="/" element={<Layout />}/>
           <Route exact path="/linkservices" element={<LinkService/>} />
           <Route exact path="/linkconnect" element={ <LinkContact />} />
          
     
     
       </Routes>

     </BrowserRouter>




    </>
  )
}

export default App


 
    