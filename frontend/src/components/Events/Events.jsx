import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/styles';
import EventCard from "./EventCard";
import { Link } from 'react-router-dom';

const Events = () => {
  const {allEvents,isLoading} = useSelector((state) => state.events);

  return (
    <div>
     {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>

          <div className="w-full grid">
            {allEvents.length !== 0 && allEvents.map((event, index) => (
              <EventCard key={index} data={event} />
            ))}

            {allEvents?.length === 0 && <h4>No Events have!</h4>}
          </div>

          <div className="text-lg" style={{ textAlign: 'center' }}>
            <Link to="/events">View All</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Events;
