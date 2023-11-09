import React from "react";
import { NavLink,Link } from "react-router-dom";
import niakaigames from ".././images/niakaigames.png";
import '../styles/Navbar.css'

import { useContext } from "react"; //1.adım eski
import StartContext from "../Context/Context"; //2.adım eski

function Navbar() {
  // console.log("Navbar");
  const {navbar} = useContext(StartContext); //3.adım eski
  return (
    <div className="navbar">
      <div className="main">
        <Link to="/"><img src={niakaigames} alt="niaKaiGames" /></Link>
      </div>
      <div className="mainLink">
        <nav className="mainNav">
          <NavLink to="/">Home</NavLink>
          {navbar && <NavLink to="/blog">Blog</NavLink>}
          {navbar && <NavLink to="/aboutUs">AboutUs</NavLink>}
        </nav>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
