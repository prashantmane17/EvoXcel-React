import React from 'react'
import Nav from './Nav'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Pricing from './Components/Pricing'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'
import WebDevelopment from './Components/WebDevelopment'
import ApplicationDevelopment from './Components/ApplicationDevelopment'
import SoftwareDevelopment from './Components/SoftwareDevelopment'
import EmailAutomation from './Components/EmailAutomation'
import LinkedinAutomation from './Components/LinkedinAutomation'
import LeadGeneration from './Components/LeadGeneration'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Components/Footer'
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Nav/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Pricing/>} path='/pricing'/>
      <Route element={<Aboutus/>} path='/about-us'/>
      <Route element={<Contactus/>} path='/contact-us'/>
      <Route element={<WebDevelopment/>} path='/web-development'/>
      <Route element={<ApplicationDevelopment/>} path='/application-development'/>
      <Route element={<SoftwareDevelopment/>} path='/software-development'/>
      <Route element={<EmailAutomation/>} path='/email-automation'/>
      <Route element={<LinkedinAutomation/>} path='/linkedin-automation'/>
      <Route element={<LeadGeneration/>} path='/lead-generation'/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App