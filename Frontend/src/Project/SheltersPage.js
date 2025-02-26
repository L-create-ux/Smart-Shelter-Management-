import React, { useState } from "react";
import "./Shelters.css";

const sheltersData = [
  {
    id: 1,
    name: "Hope Shelter",
    address: "123 Main Street, City",
    contact: "+1234567890",
    capacity: "50 beds available",
    services: ["Food", "Medical Aid", "Counseling"],
  },
  {
    id: 2,
    name: "Safe Haven",
    address: "456 Oak Avenue, City",
    contact: "+9876543210",
    capacity: "30 beds available",
    services: ["Food", "Clothing", "Job Assistance"],
  },{
  id: 3,
  name: "New Dawn Shelter",
  address: "789 Pine Street, City",
  contact: "+1122334455",
  capacity: "40 beds available",
  services: ["Medical Aid", "Mental Health Support", "Rehabilitation"],
  timings: "Open 24/7",
  website: "www.newdawnshelter.net",
  additionalInfo: "Helps individuals struggling with mental health challenges.",
},
{
  id: 4,
  name: "Bright Future Home",
  address: "101 Maple Road, City",
  contact: "+9988776655",
  capacity: "20 beds available",
  services: ["Food", "Legal Assistance", "Reintegration Programs"],
  timings: "7 AM - 9 PM",
  website: "www.brightfuture.org",
  additionalInfo: "Focused on reintegration into society and job placement.",
},
{
  id: 5,
  name: "Helping Hands Shelter",
  address: "202 Elm Street, City",
  contact: "+5566778899",
  capacity: "35 beds available",
  services: ["Emergency Housing", "Therapy", "Job Training"],
  timings: "Open 24/7",
  website: "www.helpinghands.org",
  additionalInfo: "Offers job training programs and emergency housing solutions.",
},
];

const SheltersPage = () => {
  const [search, setSearch] = useState("");

  const filteredShelters = sheltersData.filter((shelter) =>
    shelter.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shelters-page">
      <h1 className="title">🏠 Available Shelters</h1>
      <input
        type="text"
        placeholder="🔍 Search shelters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="shelters-list">
        {filteredShelters.map((shelter) => (
          <div key={shelter.id} className="shelter-card">
            <h2>{shelter.name}</h2>
            <p><strong>📍 Address:</strong> {shelter.address}</p>
            <p><strong>📞 Contact:</strong> {shelter.contact}</p>
            <p><strong>🛏 Capacity:</strong> {shelter.capacity}</p>
            <p><strong>✅ Services:</strong> {shelter.services.join(", ")}</p><br></br>
            <button className="details-btn">🔎 View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SheltersPage;