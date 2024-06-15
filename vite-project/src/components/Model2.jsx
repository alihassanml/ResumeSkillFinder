import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './model1.css'

const App = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className='main-div-data'>
      <h1 className='Heading'>Job Desc Model Skills</h1>
      <ul className='list-item-main'>
        {data.map((item, index) => (
          <li className='lits-item' key={index}>{item.text} <span className='input-range-span'><input type="range" value={Math.random() * 20 + 70} className='input-range' /></span></li>
        ))}
      </ul>
    </div>
  );
};



export default App;
