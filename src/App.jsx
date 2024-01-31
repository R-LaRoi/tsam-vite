
import React from 'react'
// import { Route,Routes } from 'react-router-dom';
import './App.css'
import LinkService from './Components/LinkService'
import LinkContact from './Components/LinkContact'
import Homepage from './Homepage';




function App() {
  return (
    <>

    <Routes> 

      <Route path="/"  element={<Homepage />} />
      <Route exact path="/linkservice"  element={<LinkService />}/>
      <Route exact path="/linkcontact"  element={<LinkContact/>}/>
       <Route path="/main" element={
           <Homepage />} />
    </Routes>


    </>
  )
}

export default App


 
    