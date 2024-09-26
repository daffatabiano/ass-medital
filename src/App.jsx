import { useState } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <div className="search-box">
        <i>
          <FaMapMarkerAlt />
        </i>
        <input type="text" placeholder="Search some place" />
        <button type="button">
          <FaSearch />
        </button>
      </div>

      <div className="weather-box">
        <div className="box">
          <div className="info-weather">
            <div className="weather">
              <img src="images/cloud.png" alt="" />
              <p className="temperature">
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
