import React from 'react';
import styles from "./About.module.css";
import rhian from "../../assets/rhian.jpeg"
import Cleston from "../../assets/Cleston.jpeg"
import Felipe from "../../assets/Felipe.jpeg"
import Pedro from "../../assets/Pedro.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <>
      <main>
        <div className={styles.index}>
          <div className={styles["titulo-sobre"]}>
            <h1>Sobre</h1>
          </div>
          <div className={styles["texto-sobre"]}>
            <p>
              Somos estudantes da Fatec Matão, desenvolvendo o trabalho interdisciplinar do curso de DSM. Temos a intensão de aumentar nossos conhecimentos com este trabalho, visando evoluir e aprender mais sobre a área.
              Nossa plataforma tem em vista ser intuitiva com acesso seguro nas transações efetuadas dentro do site, facilitar a venda de ingressos para os eventos em nossa região, além de ser compatível com a maioria dos dispositivos.
            </p>
            </div>
          </div>
          <div className={styles.Nome}>
            <img src={rhian} alt="foto do membro do grupo Rhian" className={styles["foto-sobre"]} />
            <div className={styles.Nome}>Rhian Mendes Souza</div>
            <img src={Cleston} alt="foto do membro do grupo Cleston" className={styles["foto-sobre"]} />
            <div className={styles.Nome}>Cleston Kenji Maruyama Tonooka</div>
            <img src={Felipe} alt="foto do membro do grupo Felipe" className={styles["foto-sobre"]} />
            <div className={styles.Nome}>Felipe Salgaço Moretti</div>
            <img src={Pedro} alt="foto do membro do grupo Pedro" className={styles["foto-sobre"]} />
            <div className={styles.Nome}>Pedro Henrique Biondi de Carvalho</div>
          </div>  
        <NavLink to="../Home">
          <div className={styles.content6}>
          <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" className={styles.iconevoltar} />
          VOLTAR
          </div>
          </NavLink>
      </main>
    </>
  );
};

export default About;