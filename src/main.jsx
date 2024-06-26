import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./UserCards";
import './index.css';

function App() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };


  return (
    <>
      <div className='navbar'>
        <div className='navbar-brand'>CRICKETERS</div>
        <div className='search-box'>
          <input
            type="text"
            placeholder="Search by player name, country, or role"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="usercard">
        <UserCard filter={filter} />
      </div>
    </>
  );
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />);
