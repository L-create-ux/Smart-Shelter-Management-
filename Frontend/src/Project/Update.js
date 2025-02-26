// import React, { useState } from "react";
// import axios from "axios";

// export default function Update({ data, setPopup }) {
//     const [orpData, SetOrpData] = useState({
//         name: data.name,
//         address: data.address,
//         categories: data.categories,
//         image: data.image,
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios
//             .put(`http://localhost:3000/Orphanage/${data.id}`, orpData)
//             .then((res) => {
//                 alert("Orphanage updated successfully");
//                 if (setPopup) setPopup(false);
//             })
//             .catch((err) => {
//                 alert("Failed to update orphanage. Please try again.");
//             });
//     };

//     const handleChange = (e) => {
//         SetOrpData({ ...orpData, [e.target.name]: e.target.value });
//     };import React, { useState } from "react";
import axios from "axios";
import { useState } from "react";
export default function Update({ data, setPopup }) {
    const [orpData, SetOrpData] = useState({
        name: data.name,
        address: data.address,
        categories: data.categories,
        image: data.image,
    });

    

    const handleChange = (e) => {
        SetOrpData({ ...orpData, [e.target.name]:e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/Orphanage/${data.id}`, orpData)
            .then(res=> {
                alert("Orphanage updated successfully");
                if (setPopup) setPopup(false);
            })
            .catch((err) => {
                alert("Failed to update orphanage. Please try again.");
            });
    };

    return (
        <div className="adampage">
            <div >
            <form className="admform" onSubmit={handleSubmit}>
                <button  onClick={() => setPopup(false)} className="admbtn">X</button>
                <label className="admlab">Orphanage Name</label><br />
                <input type='text' name='name' value={orpData.name} onChange={handleChange} required className="adminp"/><br />
                <label className="admlab">Address</label><br />
                <input type='text' name='address' value={orpData.address} onChange={handleChange} required className="adminp"/><br />
                <label className="admlab">Categories</label><br />
                <input type='text' name='categories' value={orpData.categories} onChange={handleChange} required className="adminp"/><br />
                <label className="admlab">Image URL</label><br />
                <input type='text' name='image' value={orpData.image} onChange={handleChange} required className="adminp"/><br />
                <button type='submit'className="admbtn">Submit</button>
            </form>
            
        </div>
        </div>
    );
}



//     return (
//         <div>
//             <form className="admform" onSubmit={handleSubmit}>
//                 <button type="button" onClick={() => setPopup(false)} className="admbtn">X</button>
//                 <label className="admlab">Orphanage Name</label><br />
//                 <input type='text' name='name' value={orpData.name} onChange={handleChange} required className="adminp"/><br />
//                 <label className="admlab">Address</label><br />
//                 <input type='text' name='address' value={orpData.address} onChange={handleChange} required className="adminp"/><br />
//                 <label className="admlab">Categories</label><br />
//                 <input type='text' name='categories' value={orpData.categories} onChange={handleChange} required className="adminp"/><br />
//                 <label className="admlab">Image URL</label><br />
//                 <input type='text' name='image' value={orpData.image} onChange={handleChange} required className="adminp"/><br />
//                 <button type='submit'className="admbtn">Submit</button>
//             </form>
//         </div>
//     );
// }

