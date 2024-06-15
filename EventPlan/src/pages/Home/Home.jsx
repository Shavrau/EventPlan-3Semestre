import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
            src="https://placehold.co/1360x480"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placehold.co/1360x480"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placehold.co/1360x480"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className={styles.cardContainer}>
        {eventos.map(event => (
          <CardEvento key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;
