import React from "react";
import { getMonthInWords } from "../utils/Helpers";
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
            <span>{getMonthInWords()}</span>
          </div>
        </div>
        <EventHolder />
      </div>
    </section>
  );
};

export default Events;
