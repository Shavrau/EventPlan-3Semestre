import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import styles from './Event.module.css';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chat from '../../components/Chat/Chat';
import EventRating from '../../components/Avaliacao/Avaliacao';
import FavoriteEvents from '../../components/Favoritos/Favoritos';
import UploadImage from '../../components/UploadImage/UploadImage';

const Event = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const userId = "user-id"; 

  useEffect(() => {
    const fetchEvent = async () => {
      const docRef = doc(db, 'Eventos', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEventData(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchEvent();
  }, [id]);

  if (!eventData) return <div>Loading...</div>;

  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <div className={styles.imageContainer}>
            <img src={eventData.imgBanner} alt={eventData.nome} className={styles.eventImage} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={`${styles.description} ${styles.marginTop20}`}>
            <p>{eventData.descricao}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.dateVenue}>
            <p><FontAwesomeIcon icon={['far', 'calendar']} /> {eventData.data}</p>
            <p><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> {eventData.local}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <div className={styles.tickets}>
            <p><strong>Ingressos:</strong></p>
            <p>Ingressos a partir de R$ {eventData.valorMin}</p>
          </div>
        </Col>
        <Col md={2}>
          <div className={styles.cartIcon}>
            <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Chat eventId={id} />
        </Col>
      </Row>
      <Row>
        <Col>
          <EventRating eventId={id} />
        </Col>
      </Row>
      <Row>
        <Col>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-favorite">Adicionar aos Favoritos</Tooltip>}
          >
            <FavoriteEvents userId={userId} eventId={id} eventName={eventData.nome} />
          </OverlayTrigger>
        </Col>
      </Row>
      <Row>
        <Col>
          <UploadImage />
        </Col>
      </Row>
    </Container>
  );
};

export default Event;
