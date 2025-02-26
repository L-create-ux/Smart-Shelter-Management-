import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Update from './Update';

export default function Admin() {
    const [list, setList] = useState([])
    const [popup, setPopup] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('/usermodelrouter/orpdata')
            .then(res => setList(res.data))
            .catch(err => console.log(err));
    }, [])  // Automatically updates when list changes

    const handleDel = (id) => {
        axios.delete(`http://localhost:3000/Orphanage/${id}`)
            .then(res => {
                alert('Deleted successfully');
                setList(list.filter(x => x.id !== id)); // Remove deleted item from state
            })
            .catch(err => console.log(err));
    };

    const handleEdit = (data) => {
        setPopup(true);
        setData(data);
    };

    return (
        <div className='adampage'>
    

            <table className='admtab'>
                <thead className='item1'>
                    <tr className='admtr'>
                        <th className='admth'>Name</th>
                        <th className='admth'>Address</th>
                        <th className='admth'>Categories</th>
                        <th className='admth'>Image</th>
                        <th className='admth'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(x => (
                        <tr key={x.id} className='admtr'>
                            <td className='admtd'>{x.name}</td>
                            <td className='admtd'>{x.address}</td>
                            <td className='admtd'>{x.categories}</td>
                            <td className='admtd'>
                                <img src={x.image} width={100} height={100} alt="Orphanage"/>
                            </td>
                            <td className='admtd'>
                                <button onClick={()=>handleEdit(x)} className="admbtn">Edit</button>
                                <button onClick={()=>handleDel(x.id)} className="admbtn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            { popup && <Update data={data} setPopup={setPopup}/>}
        </div>
        
    );
}

