import React from 'react';
import CardEvento from '../../components/CardEvento/CardEvento';
import Carousel from 'react-bootstrap/Carousel';
import carrosel1 from '../../assets/carrosel1.jpg';
import carrosel2 from '../../assets/carrosel2.jpg';
import carrosel3 from '../../assets/carrosel3.jpeg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrosel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrosel2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrosel3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <CardEvento />
    </div>
  );
};

export default Home;
