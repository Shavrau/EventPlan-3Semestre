import React from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import Logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const iconSize = "1.25rem";

  return (
    <BootstrapNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      className={styles.fixedTop}
    >
      <div className={`container-fluid ${styles.navbarCustom}`}>
        <div className={`d-flex align-items-center ${styles.leftItems}`}>
          <BootstrapNavbar.Toggle
            aria-controls="basic-navbar-nav"
            className="d-none d-lg-block"
            style={{ marginRight: "20px" }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              style={{ fontSize: iconSize}}
              className="iconLeft"
            />
          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
          </BootstrapNavbar.Collapse>
          <NavLink href="#darkmode" className="text-light">
            <FontAwesomeIcon
              icon="fa-solid fa-circle-half-stroke"
              style={{ fontSize: iconSize, marginRight: "20px" }}
            />
          </NavLink>
        </div>
        <div className={styles.centerItem}>
        <NavLink to="/">
          <BootstrapNavbar.Brand className={styles.centerItem}>
            <img src={Logo} alt="Logo" className={styles.logo} />
          </BootstrapNavbar.Brand>
          </NavLink>
        </div>
        <div
          className={`ml-auto d-flex align-items-center ${styles.rightItems}`}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-search"
            style={{ fontSize: iconSize, marginRight: "20px" }}
          />
          <NavLink to="login" className= "d-none d-lg-block">
            <FontAwesomeIcon
              icon="fa-regular fa-user"
              style={{ fontSize: iconSize }}
              className={styles.whiteIcon}
            />
          </NavLink>
        </div>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
