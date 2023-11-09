import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ".././styles/Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  // console.log("Footer");
  return (
    <div>
      <div className="footer">
        <div className="socialMedia">
        <Link to='https://www.facebook.com/metin.topcu.7393/'> <FacebookIcon /></Link>
        <Link to='https://www.instagram.com/metin.tpc/'> <InstagramIcon /></Link>
        <Link to='https://twitter.com/metin_tpc'> <TwitterIcon /></Link>
        </div>
        <p>All rights reserved | IQ Test</p>
      </div>
    </div>
  );
}

export default React.memo(Footer);
