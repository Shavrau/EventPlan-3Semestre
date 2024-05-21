import React from 'react';
import styles from "./About.module.css";
import rhian from "../../assets/rhian.jpeg"
import Cleston from "../../assets/Cleston.jpeg"
import Felipe from "../../assets/Felipe.jpeg"
import Pedro from "../../assets/Pedro.jpeg"

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
          <div className={styles.col}>
            <img src={rhian} alt="foto do membro do grupo Rhian" className={styles["foto-sobre"]} />
            <div className={styles.Nome}>Rhian Mendes Souza</div>
            <img src={Cleston} alt="foto do membro do grupo Cleston" className={styles["foto-sobre"]} />
            <div className={styles.Nome}>Cleston Kenji Maruyama Tonooka</div>
          </div>
          <div className={styles.col}>
            <img src={Felipe} alt="foto do membro do grupo Felipe" className={styles["foto-sobre"]} />
            <div className={styles.Nome}>Felipe Salgaço Moretti</div>
            <img src={Pedro} alt="foto do membro do grupo Pedro" className={styles["foto-sobre"]} />
            <div className={styles.Nome}>Pedro Henrique Biondi de Carvalho</div>
          </div>  
        </div>
      </main>
    </>
  );
};

export default About;