import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div>
    <img
            src={process.env.PUBLIC_URL + "/images/fb.png"}
            alt="facebook logo"
            width="30"
            height="30"
          />
    <a className="ps-2" href="https://www.facebook.com/mindaugas.paskevicius.54">Facebook</a>
    </div>
    <div>
    <img 
            src={process.env.PUBLIC_URL + "/images/link.png"}
            alt="linkedin logo"
            width="30"
            height="30"
          />
    <a className="ps-2" href="https://www.linkedin.com/in/mindaugas-pa%C5%A1kevi%C4%8Dius-4a0b6b153/">Linkedin</a>
    </div>
    <div>
    <img
            src={process.env.PUBLIC_URL + "/images/git.png"}
            alt="Github logo"
            width="30"
            height="30"
          />
    <a className="ps-2" href="https://github.com/MindaugasPaskevicius?tab=repositories">Github</a>
    </div>
  </div>
);

export default Footer;