import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Nav(props){
  const navStyle={
    textDecoration: 'none' 
}
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" style={navStyle} id="nav_item">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/TODOList" style={navStyle} id="nav_item">
                  <a className="nav-link">TODO list</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Nav;
