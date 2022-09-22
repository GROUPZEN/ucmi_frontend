import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";

import gallery from "../api/gallery.json";

import Gallery1 from "../assets/images/gallery/IMG_0701.png";
import Gallery2 from "../assets/images/gallery/IMG_2362.png";
import Gallery3 from "../assets/images/gallery/IMG_9387.png";
import Gallery4 from "../assets/images/gallery/IMG_7366.png";
import Gallery5 from "../assets/images/gallery/IMG_7367.png";
import Gallery6 from "../assets/images/gallery/IMG_7377.jpg";

const Gallery = () => {
  const [tags, setTags] = useState();
  const [currentTag, setCurrentTag] = useState("all");

  useEffect(() => {
    setTags(gallery.tags);
  }, []);

  return (
    <main>
      <NavMenu />
      <section className="section-background">
        <section className="gallery__header">
          <div className="gallery__header--title">
            <h3 className="secondary-heading">gallery</h3>
          </div>
          <div className="gallery__filter">
            <div className="gallery__filter--name">filter gallery</div>
            <ul className="gallery__filter--items">
              <li
                onClick={() => setCurrentTag("all")}
                className={
                  currentTag === "all"
                    ? "gallery__filter--item gallery__filter--item-active "
                    : "gallery__filter--item"
                }
              >
                all
              </li>
              {tags?.map((tag, index) => (
                <li
                  key={index}
                  onClick={() => setCurrentTag(tag)}
                  className={
                    currentTag === tag
                      ? "gallery__filter--item gallery__filter--item-active "
                      : "gallery__filter--item"
                  }
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="gallery__images">
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
      </section>
      <Footer />
    </main>
  );
};

export default Gallery;
