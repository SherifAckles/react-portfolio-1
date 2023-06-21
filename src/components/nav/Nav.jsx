import React, { useState } from "react";
import "./nav.css";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const navItems = [
    { id: "#", icon: <AiFillHome /> },
    { id: "#about", icon: <AiOutlineUser /> },
    { id: "#experience", icon: <BiBook /> },
    { id: "#projects", icon: <RiServiceLine /> },
    { id: "#Reviews", icon: <AiOutlineUsergroupDelete /> },
    { id: "#contact", icon: <AiOutlineMessage /> },
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
  };

  return (
    <nav>
      {navItems.map(({ id, icon }) => (
        <a
          key={id}
          href={id}
          onClick={() => handleNavClick(id)}
          className={activeNav === id ? "active" : ""}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
