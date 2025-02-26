
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useAuth } from './Auth'
// import axios from 'axios'
// import "../App.css";
// export default function Login() {
//   const navigate=useNavigate()
//   const auth=useAuth()
//   const[username,SetUsername]=useState('')
//   const[password,SetPassword]=useState('')
//   const[message,SetMessage]=useState('')
//   const handleSubmit=(e)=>{
//       // e.preventDefault()
//       // axios.get('http://localhost:3000/users')
//       // .then(res=>{
//       //   const user =res.data.find(x=>x.name===username && x.password===password)
//       //   if(user){
//       //     SetMessage("Login Successfully")
//       //     // SetMessage("login successfully redirecting to home page...")
//       //     // setTimeout(()=>{
//       //     //   auth.login(user.username)
//       //     //   // navigate('/')
            
//       //     // },3000)
//       //   }
//       //   else{
//       //     SetMessage("invalid user or password")
//       //   }
//       // })
//       // .catch(err=>console.log(err))
//   }
  
//   return (
//     <div>
//     <div className='backimglogin' ><center>
//     <div class="image-container">
//            <img src='C:\Users\DELL\mernstack\src\Project\rescuepage.png'></img>
//         </div>
        
//         <form onSubmit={handleSubmit}id="loginp">
//           <label id='idlogin'>Username:</label><br></br>
//           <input type='text' value={username} onChange={(e)=>SetUsername(e.target.value)}/><br/>
//           <label id='idlogin'>Password:</label><br/>
//           <input type='password' value={password} onChange={(e)=>SetPassword(e.target.value)}/><br/>
//           <button type="submit" id='buttonlogin'>Login</button>
//         </form></center>
//         {/* {
//           !auth.user && <p id="signupText">Don't have an account?<a href="Signup">Sign up</a></p>
          
//         }
//          {message}  */}
           
//         </div>
     
//    </div>
//  )
// }
 
import React, { useState } from "react";

import { useAuth } from "./Auth";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import rescueImage from "./rescuepage.png";
 export default function Login() {
const navigate = useNavigate();
const auth = useAuth();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
         
const handleSubmit = (e) => {
e.preventDefault();
axios.get("usermodelrouter/signupdata")
.then(res => {
const user = res.data.find(x => x.username === username && x.password === password)
if (user) {
setMessage("Login Successful!");
//  setTimeout(() => {
//     auth.login(user.username)
//     navigate('/')
//   }, 2000);
  } else {
  setMessage("Invalid username or password");
  }
  })
 .catch((err) => console.log(err));
  };
    
 return (
  <div className="logindiv">
   <div className="login-container">
           <div className="image-container">
                 <img src={rescueImage} alt="Rescue Team" />
               </div>
         
             
               <div className="login-form">
                 <h2 id='loginh'>Login</h2>
                 <form onSubmit={handleSubmit}>
                   <label>Username:</label>
                   <input type="text"value={username}onChange={(e) => setUsername(e.target.value)}/>
                   
                   <label>Password:</label>
                   <input  type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/><br></br>
                   
                   <button type="submit" className="login-button">Login</button>
                 </form>
         
                 
                 {message && <p className="message">{message}</p>}
         
             
                 <p className="signup-text">
                   Don't have an account? <Link to="/signup">Sign up</Link>
                 </p>
               </div>
             </div>
             </div>
           );
         }
         