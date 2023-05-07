import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './room.css';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/recent")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Elder Care Dashboard</h1>
      <div className="home-page-container">
        {data.length > 0 && (
          <>
            <div className="home-page-stat">
              <div>Temperature</div>
              <div>{data[0].temperature}°F</div>
            </div>
            <div className="home-page-stat">
              <div>Humidity</div>
              <div>{data[0].humidity}%</div>
            </div>
            <div className="home-page-stat">
              <div>Last Movement</div>
              <div>{data[0].location}</div>
            </div>
            <div className="home-page-stat">
              <div>Triggered Date</div>
              <div>{data[0].created_date}</div>
            </div>
            <div className="home-page-stat">
              <div>Triggered Time</div>
              <div>{data[0].created_time}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
