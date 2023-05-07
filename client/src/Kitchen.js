import React, { useEffect, useState } from "react";
import axios from "axios";
import './room.css';
function Kitchen() {
  const [data,setData]= useState([]);
  const [tableData, settableData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/recent/kitchen")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, []);
  const handleClick=() => {
    axios
      .get("/api/kitchen/all")
      .then((response) => {
        settableData(response.data);
        setShowTable(true)
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div style={{textAlign: "center"}}>
      <h1>Kitchen</h1>
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
      <h3>Press the Bellow Button to view previous Data</h3>
      <button onClick={handleClick} className="button">Show Table</button>
      {showTable && (
      <table style={{margin: "0 auto", borderCollapse: "collapse",border: "2px solid black"}}>
        <thead>
          <tr>
            <th style={{padding: "10px",border: "1px solid black",padding: "8px"}}>ID</th>
            <th style={{padding: "10px",border: "1px solid black",padding: "8px"}}>Status</th>
            <th style={{padding: "10px",border: "1px solid black",padding: "8px"}}>Temperature</th>
            <th style={{padding: "10px",border: "1px solid black",padding: "8px"}}>Humidity</th>
            <th style={{padding: "10px",border: "1px solid black",padding: "8px"}}>Date</th>
            <th style={{padding: "10px",border: "1px solid black",padding: "8px"}}>Time</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td style={{padding: "10px",border: "1px solid black",padding: "8px"}}>{item.id}</td>
              <td style={{padding: "10px",border: "1px solid black",padding: "8px"}}>{item.motion}</td>
              <td style={{padding: "10px",border: "1px solid black",padding: "8px"}}>{item.temperature}</td>
              <td style={{padding: "10px",border: "1px solid black",padding: "8px"}}>{item.humidity}</td>
              <td style={{padding: "10px",border: "1px solid black",padding: "8px"}}>{item.created_date}</td>
              <td style={{padding: "10px",border: "1px solid black",padding: "8px"}}>{item.created_time}</td>              
            </tr>
          ))}
        </tbody>
      </table>
    )}
    </div>
  );
}

export default Kitchen;
