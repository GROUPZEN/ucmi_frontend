import React, { useState, useEffect } from "react";
import EventCards from "./EventCards";

import event from "../api/events.json";
import Flyer1 from "../assets/images/flyers/exousia.png";
import Flyer2 from "../assets/images/flyers/rela-talk.png";
import Flyer3 from "../assets/images/flyers/sunday-temp.png";

const EventHolder = () => {
  const [events, setEvents] = useState();
  const flyers = [Flyer1, Flyer2, Flyer3];

  useEffect(() => {
    setEvents(event.events);
  }, []);

  return (
    <div className="events__holder">
      {events?.length > 0 ? (
        <div className="events__holder--scroller">
          {events?.map((event, index) => (
            <EventCards
              key={index}
              name={event.name}
              image={flyers[index]}
              date={event.date}
              venueLocation={event.venueLocation}
              venueName={event.venueName}
            />
          ))}
        </div>
      ) : (
        <div className="events__nothing secondary-heading">
          No events available for this month
        </div>
      )}
    </div>
  );
};

export default EventHolder;
