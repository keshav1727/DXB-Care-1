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
import Quote from './components/Content/Quote'
import Corporate from './components/Membership-pages/Corporate'
import Personal from './components/Membership-pages/Personal'
import Visitors from './components/Membership-pages/Visitors'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Relocation from './components/Membership-pages/Relocation'
import Aboutus from './components/About Us/Aboutus'
import Navbarrender from './components/Navbar/Navbarrender'
import Timequote from './components/Content/Timequote'


function App() {
  
  return (
    <>
<Router>

  <Routes>
    <Route path='/' element={<><Navbar/><Quote/><Experience/>
    <Membership/> <Timequote/> <Enquiry/> <Footer/> </>}></Route>
    <Route path='/experience' element={<Experience/>}></Route>
    <Route path='/membership' element={<Membership/>}></Route>
    <Route path='/discover' element={<Discover/>}></Route>
    <Route path='/personal' element={<Personal/>}></Route>
    <Route path='/visitors' element={<Visitors/>}></Route>
    <Route path='/corporate' element={<Corporate/>}></Route>
    <Route path='/relocate' element={<Relocation/>}></Route>
    <Route path='/about-us' element={<Aboutus/>}></Route>
    <Route path='/contact-us' element={<Enquiry/>}></Route>
  </Routes>
</Router>

    </>
  )
}

export default App
