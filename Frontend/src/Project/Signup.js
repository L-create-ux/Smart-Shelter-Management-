// import React,{useState} from 'react'
// import axios from 'axios'
// import "../App.css";
// import { useNavigate } from 'react-router-dom'
// export default function Signup() {
//     const navigate=useNavigate()
//     const [image, setImage] = useState(null);
//    const[message,setMessage]=useState('')
//    const[formData,setFormData]=useState({
//        name:'',
//        email:'',
//        number1:'',
//        address:'',
//        password:'',
//        availability:'',       
//        image:''
//    })
//    const handleChange=(e)=>{
//        setFormData({...formData,[e.target.name]:e.target.value})
//    }
//    const handleImageUpload = (event) => {
//        setImage(event.target.files[0]);
//      };
//    const handleSubmit=(e)=>{
//        e.preventDefault()
//        console.log(formData)
//        axios.post('http://localhost:3000/formData',formData)
//        .then(res=>{
//            setMessage('signup successfull redirecting to login...')
//            setTimeout(()=>{
//                navigate('/login')
//            },3000)
//        })
//        .catch(err=>{
//            setMessage('something went wrong')
//            console.log(err)})
//        }
//   return (
//     <div className='formcont'>
//     <br></br>
//     <div className='sig1'>
//     <form onSubmit={handleSubmit} id='formsignup'>
//         <center>
//         <label className='sig2'>Volunteer Name</label><br></br>
//         <input className='sig3'type='text'name='name' value={formData.name}onChange={handleChange} placeholder='Enter your Fullname'/><br></br>
//         <label className='sig2'>Email</label><br></br>
//         <input className='sig3' type='email'name='email'value={formData.email}onChange={handleChange} placeholder='Enter your Email Id'/><br></br>
//         <label className='sig2'>Phone No</label><br></br>
//         <input className='sig3' type='number'name='number'value={formData.number1}onChange={handleChange} placeholder='Enter your Phone number'/><br></br>
//         <label className='sig2'>Address</label><br></br>
//         <textarea className='sig3' name='address'value={formData.address}onChange={handleChange} placeholder='Enter your Address'></textarea><br></br>
//         <label className='sig2'>Password</label><br></br>
//         <input className='sig3'type='password' name='password'value={formData.password}onChange={handleChange} placeholder='Enter Your Password'/><br></br>
        
//         <label className='sig2'>Availability</label><br></br>
//         <select className='sig4'name='availability'value={formData.availability}onChange={handleChange}>
//             <option value='ft'>Full-Time</option>
//             <option value='pt'>Part-Time</option>
         
//         </select><br></br>
//         <label className='sig2'>Upload Any govt proof:</label>
//         <input type="file" className='sig3'accept="image/*" name='image' onChange={handleImageUpload} value={formData.image} /><br></br><br></br>
//         <button className='sig5'type='submit'>Signup</button>
//         </center>
//     </form>
//     {message}
//     </div>


// </div>
// )
// }



import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
     const navigate=useNavigate()
    const[message,setMessage]=useState('')
    const[formData,setFormData]=useState({
        // fname:'',
        // lname:'',
        // email:'',
        // password:'',
        // expr:''
        username:'',
        email:'',
        password:''
       // degree:''
    })
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        axios.post('/usermodelrouter/signup',formData)
        .then(res=>{
            setMessage('Signup Successfull Redirecting to login...')
            setFormData({ username: '',email: '', password: ''});

        setTimeout(()=>{
            navigate('/login')
         },3000)
    })
    .catch(err=>{
        setMessage('Something went wrong')
        console.log(err)
    })
    
}
  return (
    <div className='formcont'>
        <br></br>
        <div className='sig1'>
        <center>
        <form onSubmit={handleSubmit}>
             <label className='sig2'>Volunteer Name</label><br></br>
            <input type='text'className='sig3' name='username' placeholder='Enter the name here' value={formData.username} onChange={handleChange}/><br></br>  
             {/* <label>First Name</label><br></br>
            <input type='text' name='fname' placeholder="Enter the firstname"value={formData.fname} onChange={handleChange}/><br></br>
            <label>Last Name</label><br></br>
            <input type='text' name='lname' placeholder="Enter the lastname" value={formData.lname} onChange={handleChange}/><br></br>   */}
            <label className='sig2'>Email</label><br></br>
            <input type='email'className='sig3' name='email' placeholder="Enter the Email" value={formData.email} onChange={handleChange}/><br></br>
            <label className='sig2'>Password</label><br></br>
            <input type='password'className='sig3' name='password' placeholder="Enter the Password" value={formData.password} onChange={handleChange}/><br></br>
            {/* <label>Experience:</label><br></br>
            <label htmlFor='phd'>PhD </label>
            <input type='radio' id='phd' name='phd' value={formData.phd} onChange={handleChange}/><br></br>
            <label htmlFor='me'>ME/MTech </label>
            <input type='radio' id='me' name='me' value={formData.me} onChange={handleChange}/><br></br>
            <label htmlFor='be'>BE/BTech </label>
            <input type='radio' id='be' name='be' value={formData.be} onChange={handleChange}/><br></br> */}
             {/* <label>Degree:</label><br></br>
            <select value={formData.degree} name='degree' onChange={handleChange}><br></br>
            <option value='phd'>PhD</option>
            <option value='me'>ME/MTech</option>
            <option value='be'>BE/BTech</option>
            </select><br></br> 
            <br></br> */}
            <button type='submit'className='sig5' onClick={handleSubmit}>Signup</button>  
        </form>
        </center>
        {message}
        <br></br>

        </div>
    </div>
  )
}

