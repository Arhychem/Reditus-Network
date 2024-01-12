import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../logo.png";
import Sidebar from "../components/Sidebar";
import styles from "../styleSheets/navbar.module.css";
import LoginButton from "./buttons/loginButton";
import SignupButton from "./buttons/SignupButton";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  
  return (
    <nav>
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <img src={logo} alt="logo" className={styles["image"]} />
          <button className={styles["nav-toggle"]}>
            <FaBars onClick={() => setDisplay(!display)} />
          </button>
        </div>
        <Sidebar display={display} />
        <LoginButton />
        <SignupButton />
      </div>
    </nav>
  );
};

export default Navbar;