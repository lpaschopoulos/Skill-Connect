import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';

const HomePage = () => {
  var navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  function login(){
    navigate ("/login");
  }
  function signup(){
    navigate ("/signup");
  }
  function about(){
    navigate ("/about");
  }


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search functionality based on the searchQuery value
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>Skill Connect</h1>
      </header>
      <div className="content">
        <h2 className="title">Connecting Talent with Opportunities</h2>
        <div className="login-signup-button">
        <button onClick = {()=>{ login();}}>Login</button>
        <button onClick = {()=>{ signup();}}>Signup</button>
        </div>
        <p className="description">Find trusted individuals with various skills for your specific needs.</p>

        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Type a skill"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="about-button-container">
        <button onClick = {()=>{about();}} className="about-button">About</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

