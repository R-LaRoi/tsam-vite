
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LinkService from './Components/LinkService'
import LinkContact from './Components/LinkContact'
import Layout from './Components/Layout'
import Homepage from './Homepage';
import NewServices from './Components/NewServices';


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
                 <Route exact path="/newservices" element={ <NewServices />} />
     
     
       </Routes>

     </BrowserRouter>




    </>
  )
}

export default App


 
    