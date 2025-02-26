import React from 'react'
import {NavLink} from 'react-router-dom'
//import { useAuth } from './Auth'
import "../App.css";
//import logoimg from './logo.png'
export default function Navbar() {
    //const auth=useAuth()

  return (
    <div><nav className='navbar2'>
      <ul>
        
      <li> <NavLink to='/' className='nav-link'>HOME</NavLink></li>
<li><NavLink to='/AboutUs' className='nav-link'>ABOUT</NavLink></li>
<li> <NavLink to='/Services' className='nav-link'>SERVICE</NavLink></li>
<li><NavLink to='/Contact' className='nav-link'>CONTACT US</NavLink></li>
 <li><NavLink to='/page' className='nav-link'>ADMIN</NavLink></li> 
      </ul>
   
    {/* <NavLink to='/product'>product</NavLink>
    <NavLink to='/users'>Users</NavLink>
    <NavLink to='/profile'>profile</NavLink>
    <NavLink to='/loginpjt'></NavLink>
    <NavLink to='/Contact'>Contact</NavLink>
    {
        !auth.user && <NavLink to='/login'>Login</NavLink>
        
    }
    <NavLink to='/Signup'>Signup</NavLink>
    <NavLink to='/Mobile'>Mobile</NavLink>
    <NavLink to='/Mobileusers'>Mobileusers</NavLink> */}
    </nav>
    










    </div>
  )
}
