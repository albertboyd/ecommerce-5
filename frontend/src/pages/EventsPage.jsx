import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import Footer from "../components/Layout/Footer";
import { useEffect } from "react";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div className="mt-20 mb-10">
            {allEvents && allEvents.map((event, index) => (
              <EventCard key={index} active={true} data={event} />
            ))}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default EventsPage;
