/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {BsLinkedin} from "react-icons/bs"
 import {BsGithub} from "react-icons/bs" 
 import {BsFacebook} from "react-icons/bs" 
  
const Socials = () => {
  return (
    <div className="Socials">
      
      <a href="https://linkedin.com/in/sherif-ackles" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/nabesteron" target="_blank"><BsGithub /></a>
      <a href="https://fb.com/SherifAckles" target="_blank"><BsFacebook /></a>
    </div>
  );
};

export default Socials;
