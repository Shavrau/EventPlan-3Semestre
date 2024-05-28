import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo.svg";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const iconSize = "1.75rem";

  return (
    <footer>
      <div className={`container-fluid ${styles.footerCustom}`}>
        <div className={styles.leftItems}>
          <ul>
            <li>
              <NavLink to="/about" className={styles.link}>
                <p className={styles.sobre}>Sobre</p>
              </NavLink>
            </li>
            <li>
              <p className={styles.sobre1}>
                Nosso site EventPlan surgiu de um trabalho transdisciplinar, elaborado por estudantes da Fatec Luiz Marchesan.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.centerItem}>
          <ul>
            <li>
              <NavLink to="/home">
                <img src={Logo} alt="Logo" className={styles.logo} />
              </NavLink>
            </li>
            <li>
              <p className={styles.contato}>Contatos</p>
            </li>
            <li>
              <NavLink to="#">
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: iconSize }} className={styles.icon} />
              </NavLink>
              <NavLink to="#">
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: iconSize }} className={styles.icon} />
              </NavLink>
              <NavLink to="#">
                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: iconSize }} className={styles.icon} />
              </NavLink>
              <NavLink to="#">
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: iconSize }} className={styles.icon} />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.rightItems}>
          <ul>
            <li>
              <NavLink to="#" className={styles.link}>
                <p className={styles.ajuda}>Ajuda</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={styles.link}>
                <p className={styles.ajuda1}>Central de ajuda</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={styles.link}>
                <p className={styles.ajuda1}>Compradores e participantes</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={styles.link}>
                <p className={styles.ajuda1}>Produtores de eventos</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
