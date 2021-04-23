import "./Card.css";
import React from "react";

function Card({ item, index, setCurr, setModal }) {
  return (
    <img
      className="image"
      src={item.urls.thumb}
      alt={item.alt_description}
      key={item.exif.id}
      onClick={() => {
        setCurr(index);
        setModal(true);
      }}
    />
  );
}

export default Card;
