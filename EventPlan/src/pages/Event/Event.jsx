import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chat from '../../components/Chat/Chat';
import EventRating from '../../components/Avaliacao/Avaliacao';
import FavoriteEvents from '../../components/Favoritos/Favoritos';
import UploadImage from '../../components/UploadImage/UploadImage';
import ExportToCSV from '../../components/ExportToCsv/ExportToCsv';
import { db } from '../../firebase/config';
import styles from './Event.module.css';

const Event = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchEventAndRatings = async () => {
      try {
        const eventRef = doc(db, 'Eventos', id);
        const eventSnap = await getDoc(eventRef);
        if (eventSnap.exists()) {
          setEventData(eventSnap.data());
        } else {
          console.log('No such document!');
        }
        const ratingsCollection = collection(db, `Eventos/${id}/ratings`);
        const ratingsSnapshot = await getDocs(ratingsCollection);
        const fetchedRatings = ratingsSnapshot.docs.map(doc => doc.data());
        setRatings(fetchedRatings);
        const avgRating = calculateAverageRating(fetchedRatings);
        setAverageRating(avgRating);
      } catch (error) {
        console.error('Error fetching event and ratings:', error);
      }
    };

    fetchEventAndRatings();
  }, [id]);

  const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) {
      return 0;
    }

    const totalRating = ratings.reduce((acc, rating) => {
      const validRating = typeof rating.rating === 'number' && !isNaN(rating.rating) ? rating.rating : 0;
      return acc + validRating;
    }, 0);

    return totalRating / ratings.length;
  };

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
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
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
            <FavoriteEvents userId="user-id" eventId={id} eventName={eventData.nome} />
          </OverlayTrigger>
        </Col>
      </Row>
      <Row>
        <Col>
          <UploadImage />
        </Col>
      </Row>
      <Row>
        <Col>
          <ExportToCSV eventData={eventData} averageRating={averageRating} />
        </Col>
      </Row>
    </Container>
  );
};

export default Event;
