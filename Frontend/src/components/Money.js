// import React, { useState } from 'react'

// export default function Money() {
//     const[Money,SetMoney]=useState({
//         usd:{usd:1,inr:85.39,brl:23.7},
//         inr:{usd:0.012,inr:1,brl:0.42},
//         brl:{usd:0.27,inr:23.57,brl:1},
//     })
//     const[sel1,setSel1]=useState('usd')
//     const[sel2,setSel2]=useState('usd')
//     const[inp1,setInp1]=useState(0)
//     const[inp2,setInp2]=useState(0)
//     const handleInput1=(e)=>{
//         setInp1(e.target.value)
//         setInp2(e.target.value*Money[sel1][sel2])
//     }
//     const handleInput2=(e)=>{
//         setInp2(e.target.value)
//         setInp1(e.target.value*Money[sel2][sel1])
//     }
//   return (
//     <div>
//         <select value={sel1}onChange={(e)=>setSel1(e.target.value)}>
//          {Object.keys(Money).map(x=><option value={x}>{x.toUpperCase()}
//          </option>)}
//          </select>
//          <input type='number'value={inp1}onChange={handleInput1}/><br></br>
//          <select value={sel2}onChange={(e)=>setSel2(e.target.value)}>
//          {Object.keys(Money).map(x=><option value={x}>{x.toUpperCase()}
//          </option>)}
//          </select>
//          <input type='number'value={inp2}onChange={handleInput2}/><br></br>
//     </div>
//   )
// }

