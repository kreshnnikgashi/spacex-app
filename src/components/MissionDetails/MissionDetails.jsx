import React from 'react';
import './MissionDetails.css';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_ROCKET_DETAILS } from '../../GraphQL/Queries';
import { useParams } from 'react-router-dom';

const MissionDetails = () => {
  const params = useParams();
  const { data } = useQuery(LOAD_ROCKET_DETAILS, {
    variables: {
      id: params.id,
    },
  });
  const [content, setContent] = useState([]);

  useEffect(() => {
    console.log(data);
    if (data) {
      setContent(data.launchesPast);
    }
  }, [data]);

  return (
    <div className="details">
      <h1>{}</h1>
      <img src="https://via.placeholder.com/300?text=Unavailable" />
      <p>{}</p>
      <p></p>
      <p></p>
    </div>
  );
};

export default MissionDetails;
