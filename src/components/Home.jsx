import React from "react";
import "../styles/Home.css";
import iqtestphoto from "../images/iqtestphoto.png";
import iqtestphoto2 from "../images/iqtestphoto2.png";
import { Link } from "react-router-dom";


function Home() {
  // console.log("Home");
  return (
    <div>
      <div className="homeGeneral">
        <div className="homeLeft">
          <img src={iqtestphoto} alt="iqTestPhoto" />
          <p>Our brain and its parts</p>
        </div>
        <div className="homeRight">
        <img src={iqtestphoto2} alt="iqTestPhoto2" />
        <Link to='/start'> <button>Start</button> </Link>
          <p>
            When you finish the IQ test,<br></br> you can see your score for
            free
          </p>
        </div>
      </div>
      <div className="homeBottom">
        <h2>15 characteristics of intelligent people</h2>
        <h3>How many of these characteristic dou you have?</h3>
        <p>
          Studies have shown that people with high IQ levels have some common
          characteristics. Although these characteristics vary slightly from
          person to person, they are mostly common in intelligent people. In
          general, it can be concluded that individuals with these
          characteristics are more intelligent than other members of the
          society.
        </p>
        <Link to='/blog'> <button>Read More</button> </Link>
      </div>
    </div>
  );
}

export default Home;
