import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import CardEvento from '../../components/CardEvento/CardEvento';
import styles from './EventList.module.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(5);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "Eventos"));
      const eventsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsList);
    };

    fetchEvents();
  }, []);

  const filteredEvents = filter === 'All' ? events : events.filter(event => event.category === filter);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelect = (e) => {
    setFilter(e);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <DropdownButton id="dropdown-basic-button" title={`Filter: ${filter}`} onSelect={handleSelect} className={styles.dropdown}>
        <Dropdown.Item eventKey="All">All</Dropdown.Item>
        <Dropdown.Item eventKey="Music">Music</Dropdown.Item>
        <Dropdown.Item eventKey="Sports">Sports</Dropdown.Item>
        <Dropdown.Item eventKey="Technology">Technology</Dropdown.Item>
        <Dropdown.Item eventKey="Art">Art</Dropdown.Item>
      </DropdownButton>
      <div className={styles.cardContainer}>
        {currentEvents.map(event => (
          <CardEvento key={event.id} event={event} />
        ))}
      </div>
      <Pagination className={styles.paginationContainer}>
        {Array.from({ length: Math.ceil(filteredEvents.length / eventsPerPage) }, (_, i) => (
          <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default EventList;
