 import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./Reportpage.css";
import axios from "axios";

const ReportPage = () => {
  const [location, setLocation] = useState("Location not detected");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation(`Latitude: ${lat}, Longitude: ${lon}`);
        },
        () => {
          setLocation("Unable to retrieve location.");
        }
      );
    } else {
      setLocation("Geolocation is not supported by your browser.");
    }
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reportData = {
      image: image ? image.name : "No image uploaded",
      location: location,
      category: category,
      description: description,
      date: new Date().toLocaleString(),
    };

    axios.post("/usermodelrouter/report")
        .then((data) => {
        alert("Report submitted successfully!",reportData)
        // setImage({image:''}),
        // setLocation({location:''}),
        // setCategory({category:''})
        // setDescription({description:''})


        console.log("Saved:", data);
      })
      .catch((err) => console.error("Error:", err))
  };

  return (
<div className="body">
    <div className="container-rep">
      <h2>Report a Tramps</h2>
      <center>
        <form onSubmit={handleSubmit} id="repform">
          <label id="rep">Upload Image:</label>
          <input type="file" id="repinp"accept="image/*" onChange={handleImageUpload}   />

          <label id="rep">Location:</label>
          <button type="button" onClick={getLocation} id="port1">Detect Location</button>
          <p id="pararep">{location}</p>

          <label id="rep">Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a Category</option>
            <option value="homeless">Physically Disable</option>
            <option value="elderly">Mentally Disabled</option>
            <option value="disabled">Normal person</option>
            <option value="child">Child</option>
            <option value="oldage">Old Age</option>
          </select>

          <label id="rep">Description:</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button type="submit" onClick={handleSubmit} id="port">Submit Report</button>
        </form>
      </center>
    </div>
    </div>
  );
};

export default ReportPage;




