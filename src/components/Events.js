import React from "react";
import EventHolder from "./EventHolder";

const Events = () => {
  return (
    <section className="events">
      <div className="events__container primary-linear-background">
        <div className="events__nav">
          <div className="events__nav--title secondary-heading">
            upcoming events
          </div>
          <div className="events__nav--date">
            <span>september</span>
          </div>
        </div>
        <EventHolder />
      </div>
    </section>
  );
};

export default Events;
