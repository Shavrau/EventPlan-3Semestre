import React from 'react';
import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PerfilImg from "../../assets/FotoPerfil.jpeg";
import ArraiaGeraldoAzevedoImg from "../../assets/ArraiaGeraldoAzevedo.jpeg";
import DilsinhoImg from "../../assets/Dilsinho.jpeg";
import RebeldeImg from "../../assets/Rebelde.jpeg";
import AndreaBocelliImg from "../../assets/AndreaBocelli.jpeg";
import FerrugemImg from "../../assets/Ferrugem.jpeg";
import RobertaSaImg from "../../assets/RobertaSá.jpeg";

const Profile = () => {
  return (
    
    <main>
      <div className={styles.planofundo}>
          <div className={styles.perfil}>
              <img src={PerfilImg} alt="Imagem de Perfil" />
              <span className={styles.username}>Usuário</span>
          </div>
          <div className={styles.content}>
              <div className={styles.content2}>
                  O EventPlan é um site de venda de ingressos para diferentes tipos de eventos realizados no Brasil. É possível comprar entradas para shows de artistas nacionais e internacionais, festivais de música, eventos esportivos, além de cinema, museu, apresentações de teatro, entre outros.
              </div>
              <div className={styles.sobreUsuario}>
                  <p>Sobre Usuário</p>
                  <div className={styles.iconelapis}>
                  <FontAwesomeIcon icon="fa-solid fa-pen" />
                  </div>
              </div>
              <div className={styles.content3}>
                  MEUS EVENTOS
              </div>
          </div>
      
          <div className={styles.content4}>
              <div className={styles.sobreUsuario}>
                  <p>Recomendações</p>
                  <div className={styles.galleryContainer}>
                      <div className={styles.gallery}>
                          <img src={ArraiaGeraldoAzevedoImg} alt="Arraia Geraldo Azevedo" />
                          <img src={DilsinhoImg} alt="Dilsinho" />
                          <img src={RebeldeImg} alt="Rebelde" />
                          <div></div>
                          <img src={AndreaBocelliImg} alt="Andrea Bocelli" />
                          <img src={FerrugemImg} alt="Ferrugem" />
                          <img src={RobertaSaImg} alt="Roberta Sá" />
                      </div>
                  </div>
                  <div className={styles.content5}>
                      VER MAIS
                  </div>
              </div>
          </div>
      
          <div className={styles.content6}>
          <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" className={styles.iconevoltar} />
          VOLTAR
          </div>
      </div>
      </main>
  );
};

export default Profile;
