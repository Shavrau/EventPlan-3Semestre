import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Logo.svg";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom"

const Footer = () => {
  const iconSize = "1.75rem";

  return (
    <footer>
      <div className={`container-fluid ${styles.footerCustom}`}>
        <div className={styles.leftItems}>
          <ul>
            <NavLink to="about">
              <li><p className={styles.sobre}>Sobre</p></li>
            </NavLink>
            <li><p NavLink to='../about' className={styles.sobre1}>Nosso site EventPlan surgiu de um trabalho transdisciplinar, elaborado por estudantes da Fatec Luiz Marchesan.</p></li>
          </ul>
        </div>
        <div className={styles.centerItem}>
          <ul>
            <NavLink to="home">
              <img src={Logo} alt="Logo" className={styles.logo} />
            </NavLink>
            <p className={styles.contato}>Contatos</p>
            <div>
              <NavLink to="Facebook">
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: iconSize }} className={styles.icon} />
              </NavLink>
              <NavLink to="Instagram">
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: iconSize }} className={styles.icon} />
              </NavLink>
              <NavLink to="Whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: iconSize }} className={styles.icon} />
              </NavLink>
              <NavLink to="Email">
                <FontAwesomeIcon icon="fa-regular fa-envelope" style={{ fontSize: iconSize }} className={styles.icon} />
              </NavLink>
            </div>
          </ul>
        </div>
        <div className={styles.rightItems}>
          <ul>
            <NavLink to="Ajuda">
              <p className={styles.ajuda}>Ajuda</p>
            </NavLink>
            <NavLink to="Central">
              <li><p className={styles.ajuda1}>Central de ajuda</p></li>
            </NavLink>
            <NavLink to="Compradores">
              <li><p className={styles.ajuda1}>Compradores e participantes</p></li>
            </NavLink>
            <NavLink to="Produtores">
              <li><p className={styles.ajuda1}>Produtores de eventos</p></li>
            </NavLink>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;