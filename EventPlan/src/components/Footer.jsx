import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo.svg";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const iconSize = "1.75rem";

  return (
    <footer className={styles.footerCustom}>
      <Container fluid>
        <Row>
          <Col md="4" className={`d-flex align-items-center`}>
            <ul>
              <li>
                <NavLink to="/about" className={styles.link}>
                  <h1 className={styles.sobre}>Sobre</h1>
                </NavLink>
              </li>
              <li>
                <p className={styles.sobre1}>Nosso site EventPlan surgiu de um trabalho transdisciplinar, elaborado por estudantes da Fatec Luiz Marchesan.</p>
              </li>
            </ul>
          </Col>
          <Col md="4" className={`d-flex justify-content-center text-center`}>
            <ul>
              <li>
                <NavLink to="/home" className={`align-items-center ${styles.link}`}>
                  <img src={Logo} alt="Logo" className={styles.logo} />
                </NavLink>
              </li>
              <li>
                <p className={styles.contato}>Contatos</p>
              </li>
              <li className={`align-items-center ${styles.icon}`}>
                <NavLink to="/Facebook" className={styles.link}>
                  <FontAwesomeIcon icon={faFacebook} style={{ fontSize: iconSize }} className={styles.icon} />
                </NavLink>
                <NavLink to="/Instagram" className={styles.link}>
                  <FontAwesomeIcon icon={faInstagram} style={{ fontSize: iconSize }} className={styles.icon} />
                </NavLink>
                <NavLink to="/Whatsapp" className={styles.link}>
                  <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: iconSize }} className={styles.icon} />
                </NavLink>
                <NavLink to="/Email" className={styles.link}>
                  <FontAwesomeIcon icon="fa-regular fa-envelope" style={{ fontSize: iconSize }} className={styles.icon} />
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md="4" className={`d-flex justify-content-center align-items-center`}>
            <ul>
              <li>
                <NavLink to="/FAQ" className={styles.ajuda}>Ajuda</NavLink>
                <li>
                  <p href="#" className={styles.ajuda1}>Central de ajuda</p>
                  <p href="#" className={styles.ajuda1}>Compradores e participantes</p>
                  <p href="#" className={styles.ajuda1}>Produtores de eventos</p>
                </li>
              </li>
            </ul>
          </Col>
        </Row >
      </Container>
    </footer>
  );
}

export default Footer;