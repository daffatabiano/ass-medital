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
    </div>
  );
}

export default App;
