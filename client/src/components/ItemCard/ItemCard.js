import React from "react";
import "./ItemCard.scss";
const ItemCard = ({ title, image }) => {
  return (
    <article className="ItemCard col col-12 col-md-6 col-lg-3">
      <div className="ItemCard__image-wrapper">
        <img src={image} className="ItemCard__image" alt={title} />
      </div>{" "}
      <h2 className="ItemCard__title">{title}</h2>
    </article>
  );
};

export default ItemCard;
