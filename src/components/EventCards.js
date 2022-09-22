import React from "react";

const EventCards = ({ name, image, date, venueName, venueLocation }) => {
  const eventDate = new Date(date);

  return (
    <div className="events__card">
      <div className="events__card--image">
        <img src={image} alt="Event Flyer" />
      </div>
      <div className="events__card--details">
        <div className="events__details">
          <span className="events__details--key smallest-heading">name</span>
          <span className="events__details--value secondary-heading">
            {name}
          </span>
        </div>
        <div className="events__details">
          <span className="events__details--key smallest-heading">venue</span>
          <span className="events__details--value body-heading">
            {venueName}
          </span>
          <span className="events__details--value body-heading">
            {venueLocation}
          </span>
        </div>
        <div className="events__details">
          <span className="events__details--key smallest-heading">
            date and time
          </span>
          <span className="events__details--value body-heading">
            {eventDate.toLocaleDateString()}
          </span>
          <span className="events__details--value body-heading">
            {eventDate.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
