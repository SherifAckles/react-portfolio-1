import React from "react";
import "./header.css";
import Cta from "./Cta";
import Me from "../../assets/me.png";
import Socials from "./Socials";
import Typed from "typed.js"
import { useEffect, useRef } from "react";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm <span className="auto"></span></h5>

        
        <h5 className="text-light">Frontend developer</h5>
        <Cta />
        <Socials />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
