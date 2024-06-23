import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Experience from './components/Experiences/Experience'
import Membership from './components/Membership/Membership'
import Enquiry from './components/Enquiry Form/Enquiry'
import Discover from './components/Dicover_More/Dicover'
import Footer from './components/Footer/Footer'
// import Personal from './components/Membership-pages/Member_navbar'
import Corporate from './components/Membership-pages/Corporate'
import Personal from './components/Membership-pages/Personal'
import Visitors from './components/Membership-pages/Visitors'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <>
  {/* <Navbar/>    
  <Content type="Some Quote"/>
  <Experience/>
  <Content type="Why DXB.care"/>
  <Membership/>
  <Enquiry/>
  <Discover/> 
  <Footer/>
  <Personal/>
 <Corporate/>
 <Visitors/>
    */}
<Router>
  <Routes>
    <Route path='' element={<><Navbar/> <Experience/> <Membership/> <Enquiry/> <Footer/> </>}></Route>
    <Route path='/discover' element={<Discover/>}></Route>
  </Routes>
</Router>

    </>
  )
}

export default App
