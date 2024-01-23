
import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header'
import './App.css'
import LinkService from './Components/LinkService'
import LinkContact from './Components/LinkContact'
import Homepage from './Homepage';




function App() {
  return (
    <>
    <Homepage />
    {/* <Routes> 

      <Route path="/"  element={<Header/>} />
      <Route path="/linkservice"  element={<LinkService />}/>
      <Route path="/linkcontact"  element={<LinkContact/>}/>
    </Routes> */}


    </>
  )
}

export default App


 
    