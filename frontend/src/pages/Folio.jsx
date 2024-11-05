import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Basic from '../final/Basic';
import Skill from '../final/Skill';
import Projects from '../final/Projects';

function Folio() {
  const { id } = useParams();
  const [folioData, setFolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before the request
        // Send the id in the request body as raw JSON
        const response = await axios.post(`/api/v1/details/data`, { name: id });
       
        setFolioData(response.data.details);
        console.log(folioData) // Assuming the response contains the data
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Re-run effect if the id changes

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  return (
    <div>
      <Basic basicDetails={folioData.basicDetails}></Basic>
      <Skill skill={folioData.currentSkills}></Skill>
      <Projects project={folioData.projects}></Projects>
    </div>
  );
}

export default Folio;
