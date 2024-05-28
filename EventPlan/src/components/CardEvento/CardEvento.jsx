import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card as BootstrapCard, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './CardEvento.module.css';

const CardEvento = ({ event }) => {
  const iconSize = "1.25rem";

  return (
    <Link to={`/event/${event.id}`} className={styles.cardLink}>
      <BootstrapCard className={`${styles.card} mb-3`}>
        <Row>
          <Col xs={12} md={4} className={styles.cardLeft}>
            <div className={styles.image}>
              <img src={event.img} alt="Imagem do evento" />
            </div>
          </Col>
          <Col xs={12} md={8} className={styles.cardRight}>
            <BootstrapCard.Body>
              <BootstrapCard.Title className="d-none d-md-block">{event.nome}</BootstrapCard.Title>
              <div className={styles.cardInfo}>
                <p>
                  <FontAwesomeIcon icon="fa-regular fa-calendar" style={{ fontSize: iconSize, marginRight: '8px' }} /> {event.data} <br /> {event.horario}
                </p>
                <p>
                  <FontAwesomeIcon icon="fa-regular fa-map" style={{ fontSize: iconSize, marginRight: '8px' }} /> {event.local}
                </p>
              </div>
            </BootstrapCard.Body>
          </Col>
        </Row>
      </BootstrapCard>
    </Link>
  );
}

export default CardEvento;
