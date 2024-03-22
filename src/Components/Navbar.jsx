import React from "react";
import { Link } from "react-router-dom";
import {FaSearch} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">
          <h2>FOTOFLIX</h2>
        </div>
        <form action="" className="navbar-searchBox">
            <input type="text" className="form-input" placeholder="search..." />
            <button type="submit" className="submit-btn">
                <FaSearch />
            </button>
        </form>
        <div className="navbar_links">
            <Link to="/">Home</Link>
            <Link to="/favourite">Favourite</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
