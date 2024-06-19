import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import CardEvento from '../../components/CardEvento/CardEvento';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import styles from './Home.module.css';

const Home = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      const querySnapshot = await getDocs(collection(db, "Eventos"));
      const eventsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEventos(eventsList);
    };

    fetchEventos();
  }, []);

  return (
    <div>
      <Carousel className={styles.carouselContainer}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/eventplan-30036.appspot.com/o/Design01.svg?alt=media&token=e0cc518f-049b-4cbb-938e-dbeb7b877053"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/eventplan-30036.appspot.com/o/Design2.svg?alt=media&token=7518c2e1-ad68-428b-82db-64e5f020e96c"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/eventplan-30036.appspot.com/o/Design3.svg?alt=media&token=c2da9f55-7348-46ba-8095-af8f5ce8657e"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className={styles.cardContainer}>
        {eventos.slice(0, 6).map(event => (
          <CardEvento key={event.id} event={event} />
        ))}
      </div>
      <div className={styles.verMaisContainer}>
        <Link to="/EventList" className={styles.btn} aria-label="Ver Mais">VER MAIS</Link>
      </div>
    </div>
  );
};

export default Home;
