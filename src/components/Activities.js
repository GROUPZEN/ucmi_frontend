import React from "react";

const Activities = ({ img, days, timeFrom, timeTo, venue, address, link }) => {
  return (
    <div className="activities__selected">
      <div className="activities__selected--image">
        <img src={img} alt={`${days} flyer`} />
      </div>
      <div className="activities__selected--details">
        <div className="activities__selected--detail">
          <div className="activities__selected--detail-key">days</div>
          <div className="activities__selected--detail-value">every {days}</div>
        </div>
        <div className="activities__selected--detail">
          <div className="activities__selected--detail-key">from</div>
          <div className="activities__selected--detail-value">{timeFrom}</div>
        </div>
        <div className="activities__selected--detail">
          <div className="activities__selected--detail-key">to</div>
          <div className="activities__selected--detail-value">{timeTo}</div>
        </div>
        <div className="activities__selected--detail">
          <div className="activities__selected--detail-key">venue</div>
          <div className="activities__selected--detail-value">{venue}</div>
        </div>
        <div className="activities__selected--detail">
          <div className="activities__selected--detail-key">
            digital address
          </div>
          <div className="activities__selected--detail-value">{address}</div>
        </div>
        <div className="activities__selected--detail">
          <a
            target="_blank"
            rel="noreferrer"
            href={link}
            className="btn btn__activity"
          >
            join online service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Activities;
