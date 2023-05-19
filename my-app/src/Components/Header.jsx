import React from "react";
import "../components/Header.css";
import {BrowserRouter as Router,Route,Switch, Link } from "react-router-dom";
function Header(){
    return(
      <div className="navbar">
  <h1>New Times</h1>
  <nav>
    <ul>
      <li><a href="">Politics</a></li>
      <li><a href="">Sports & Games</a></li>
      <li><a href="">Music&Entertainment</a></li>
      <li><a href="">Fashion&Design</a></li>
      <li><a href="">Trade&Commerce</a></li>
      <li><a href="">Health&Sanitation</a></li>
    </ul>
  </nav>
       </div>
    )
}
export default Header