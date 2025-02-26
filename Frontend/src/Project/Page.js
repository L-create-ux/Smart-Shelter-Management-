import React, { useState } from "react";
import axios from "axios";
import Admin from "./Admin";

export default function Page() {
    const [orpData, SetOrpData] = useState({
        name: '',
        address: '',
        categories: '',
        image: ''
    });

    const [showTable, setShowTable] = useState(false);

    const handleChange = (e) => {
        SetOrpData({ ...orpData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("usermodelrouter/orp", orpData)
            .then(res => {
                alert("Data added successfully");
                SetOrpData({ name: '', address: '', categories: '', image: '' });
                setShowTable(true); 
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            {!showTable && (  
                <div className='formCont'>
                    <form  onSubmit={handleSubmit} className="admform">
                    <label className="admlab">Orphanage Name</label><br />
                        <input type='text' name='name' value={orpData.name} onChange={handleChange} required className="adminp"/><br />
                        <label className="admlab">Address</label><br />
                        <input type='text' name='address' value={orpData.address} onChange={handleChange} required className="adminp"/><br />
                        <label className="admlab">Categories</label><br />
                        <input type='text' name='categories' value={orpData.categories} onChange={handleChange} required className="adminp" /><br />
                        <label className="admlab">Image</label><br />
                        <input type='text' name='image' value={orpData.image} onChange={handleChange} required className="adminp"/><br />
                        <button type='submit'className="admbtn">Submit</button>
                    </form>
                </div>
            )}
            {showTable && <Admin />}
        </div>
    );
}