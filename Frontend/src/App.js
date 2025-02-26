import React from 'react'
import HomePage from './Project/HomePage'

import { Route ,Routes} from 'react-router-dom'
import Navbar from './Project/Navbar'
import Login from './Project/Login'
import Signup from './Project/Signup'
import Report from'./Project/Report'
import SheltersPage from './Project/SheltersPage'
import Contact from './Project/Contact'
 import Page from './Project/Page'
 import Admin from './Project/Admin'
import AboutUs from './Project/AboutUs'
import Services from './Project/Service1'
import { AuthProvider } from './Project/Auth'
export default function App() {
  return (
    
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/report" element={<Report/>}/>
        <Route path='/SheltersPage' element={<SheltersPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/page' element={<Page/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Services' element={<Services/>}/>
        </Routes> 
        
        {/* <Page/> */}
    </div>
  )
}
