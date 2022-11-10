import React, { useRef } from "react";
import "./header.css";
import Cta from "./Cta";
import Me from "../../assets/me.png";
import Socials from "./Socials";
import { useEffect } from "react";
import Typed from "typed.js";
const Header = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Sherif Moustafa", "A frontend Developer"],
      startDelay: 300,
      typeSpeed: 100,
      backspeed: 100,
      smartBackspace: true,
      showcursor: false,
      loop: true,
    });
  });

  return (
    <header>
      <div className="container header__container">
        <h1>Hello</h1>
        <h2>
          I'm <span ref={el}></span>
        </h2>

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
