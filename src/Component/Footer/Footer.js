import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div>
    <img
            src="../images/fb.png"
            alt="logo"
            width="30"
            height="30"
          />
    <spam className="ps-2 pe-5">Facebook</spam>
    </div>
    <div>
    <img 
            src="../images/link.png"
            alt="logo"
            width="30"
            height="30"
          />
    <spam className="ps-2 pe-5">Linkedin</spam>
    </div>
    <div>
    <img
            src="../images/git.png"
            alt="logo"
            width="30"
            height="30"
          />
    <spam className="ps-2">Github</spam>
    </div>
  </div>
);

export default Footer;