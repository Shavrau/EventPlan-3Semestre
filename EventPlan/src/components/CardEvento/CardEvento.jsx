import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card as BootstrapCard, Row, Col } from 'react-bootstrap';
import styles from './CardEvento.module.css';

const CardEvento = () => {
  const iconSize = "1.25rem";

  return (
    <BootstrapCard className={`${styles.card} mb-3`} >
      <Row> 
        <Col xs={4} className={styles.cardLeft}>
          <div className={styles.image}>
            <img src="https://firebasestorage.googleapis.com/v0/b/eventplan-30036.appspot.com/o/ICONE%20PAULA%20TOLLER.png?alt=media&token=4be0963a-1e37-4c8a-a648-1ab9e02fd08b" alt="Imagem do evento"  />
          </div>
        </Col>
        <Col xs={8} className={styles.cardRight}>
          <BootstrapCard.Body>
            <BootstrapCard.Title>PAULA TOLLER - TURNE AMOROSA - TOKIO MARINE HALL</BootstrapCard.Title>
            <div className={styles.cardInfo}>
              <p>
                <FontAwesomeIcon icon="fa-regular fa-calendar"  style={{ fontSize: iconSize, marginRight: '8px' }} /> 27/05/2023 <br /> Sábado - 20:00
              </p>
              <p>
                <FontAwesomeIcon icon="fa-regular fa-map" style={{ fontSize: iconSize, marginRight: '8px' }}   /> Tokio Marine Hall - São Paulo
              </p>
            </div>
          </BootstrapCard.Body>
        </Col>
      </Row>
    </BootstrapCard>
  );
}

export default CardEvento;

