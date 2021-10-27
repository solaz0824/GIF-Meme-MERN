import React, { useRef } from "react";
import "./ItemCard.scss";
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";
const ItemCard = ({ title, image }) => {
  const target = useRef(null);
  const handleCopyClick = () => {
    console.log(image);
    navigator.clipboard.writeText(image);
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      click to copy
    </Tooltip>
  );
  return (
    <article className="ItemCard col col-12 col-md-6 col-lg-3">
      <div className="ItemCard__image-wrapper">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 300 }}
          overlay={renderTooltip}
          target={target.current}
        >
          <img
            src={image}
            className="ItemCard__image"
            alt={title}
            onClick={() => handleCopyClick()}
            ref={target}
          />
        </OverlayTrigger>
      </div>
      <h2 className="ItemCard__title">{title}</h2>
    </article>
  );
};

export default ItemCard;
