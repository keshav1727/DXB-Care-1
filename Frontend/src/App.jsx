import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Experience from './components/Experiences/Experience'
import Membership from './components/Membership/Membership'
import Enquiry from './components/Navbar/Enquiry Form/Enquiry'
import Discover from './components/Dicover_More/Dicover'


function App() {
  
  return (
    <>
  <Navbar/>    
  <Content type="Some Quote"/>
  <Experience/>
  <Content type="Why DXB.care"/>
  <Membership/>
  <Enquiry/>
  <Discover/>
    </>
  )
}

export default App
