import React from "react";
import "./header.css";
import Cta from "./Cta";
import Me from "../../assets/me.jpg"
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sherif Moustafa</h1>
        <h5 className="text-light">Frontend developer</h5>
        <Cta />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact"className="scroll__down">scroll down</a>
      </div>
    </header>
  );
};

export default Header;
