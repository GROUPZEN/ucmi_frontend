import React from "react";

import Gallery1 from "../assets/images/gallery/IMG_0701.png";
import Gallery2 from "../assets/images/gallery/IMG_2362.png";
import Gallery3 from "../assets/images/gallery/IMG_9387.png";
import Gallery4 from "../assets/images/gallery/IMG_7366.png";
import Gallery5 from "../assets/images/gallery/IMG_7367.png";
import Gallery6 from "../assets/images/gallery/IMG_7377.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__title secondary-heading">united gallery</div>
      <div className="gallery__showcase">
        <div className="gallery__showcase--item">
          <img src={Gallery1} alt="Gallery showcase 1" />
        </div>
        <div className="gallery__showcase--item">
          <img src={Gallery2} alt="Gallery showcase 2" />
        </div>
        <div className="gallery__showcase--item">
          <img src={Gallery3} alt="Gallery showcase 3" />
        </div>
        <div className="gallery__showcase--item">
          <img src={Gallery4} alt="Gallery showcase 4" />
        </div>
        <div className="gallery__showcase--item">
          <img src={Gallery5} alt="Gallery showcase 5" />
        </div>
        <div className="gallery__showcase--item">
          <img src={Gallery6} alt="Gallery showcase 6" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
