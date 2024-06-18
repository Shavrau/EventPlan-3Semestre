import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleHalfStroke, faSearch, faUser, faHome, faInfoCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import Logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./Traducao/LanguageSelector";
import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkMode/DarkMode";


const Navbar = () => {
  const iconSize = "1.25rem";
  const [show, setShow] = useState(false);
  const { user } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BootstrapNavbar
        bg="dark"
        variant="dark"
        expand="lg"
        className={styles.fixedTop}
      >
        <div className={`container-fluid ${styles.navbarCustom}`}>
          <div className={`d-flex align-items-center ${styles.leftItems}`}>
            <div
              aria-controls="basic-navbar-nav"
              className="d-none d-lg-block"
              style={{ marginRight: "20px" }}
              onClick={handleShow}
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ fontSize: iconSize }}
                className="iconLeft"
              />
            </div>
            <DarkModeToggle />
            <BootstrapNavbar.Collapse id="basic-navbar-nav"></BootstrapNavbar.Collapse>
          </div>
          <div className={styles.centerItem}>
            <NavLink to="/">
              <BootstrapNavbar.Brand className={styles.centerItem}>
                <img src={Logo} alt="Logo" className={styles.logo} />
              </BootstrapNavbar.Brand>
            </NavLink>
          </div>
          <div className={`ml-auto d-flex align-items-center ${styles.rightItems}`}>
            <LanguageSelector />
            {user ? (
              <NavLink to="/profile" className="d-none d-lg-block">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ fontSize: iconSize }}
                  className={styles.whiteIcon}
                />
              </NavLink>
            ) : (
              <NavLink to="/login" className="d-none d-lg-block">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ fontSize: iconSize }}
                  className={styles.whiteIcon}
                />
              </NavLink>
            )}
          </div>
        </div>
      </BootstrapNavbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink to="/" onClick={handleClose}>
              <FontAwesomeIcon icon={faHome} style={{ marginRight: "10px" }} />
              Home
            </NavLink>
            <NavLink to="/about" onClick={handleClose}>
              <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: "10px" }} />
              About
            </NavLink>
            <NavLink to="/event" onClick={handleClose}>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: "10px" }} />
              Eventos
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
