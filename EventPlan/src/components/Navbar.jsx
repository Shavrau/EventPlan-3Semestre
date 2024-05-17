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
          >
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              style={{ fontSize: iconSize }}
              className="iconLeft"
            />
          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto"></Nav>
          </BootstrapNavbar.Collapse>
          <NavLink href="#darkmode" className="text-light">
            <FontAwesomeIcon
              icon="fa-solid fa-circle-half-stroke"
              style={{ fontSize: iconSize }}
            />
          </NavLink>
        </div>
        <BootstrapNavbar.Brand href="#home" className={styles.centerItem}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </BootstrapNavbar.Brand>
        <div
          className={`ml-auto d-flex align-items-center ${styles.rightItems}`}
        >
          <NavLink>
            <FontAwesomeIcon
              icon="fa-solid fa-search"
              style={{ fontSize: iconSize }}
            />
          </NavLink>
          <NavLink to='/login'  className="d-none d-lg-block">
            <FontAwesomeIcon
              icon="fa-regular fa-user"
              style={{ fontSize: iconSize }}
            />
          </NavLink>
        </div>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
