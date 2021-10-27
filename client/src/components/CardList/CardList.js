import React from "react";
import ItemCard from "../ItemCard";
import { useLocation } from "react-router";

const CardList = ({ list }) => {
  const location = useLocation();
  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-l g-3">
      {list.map((item) =>
        item.content_description ? (
          <ItemCard
            key={item.id}
            title={item.content_description.replace(" GIF", "")}
            image={
              location.pathname == "/images"
                ? item.media[0].gif.preview
                : item.media[0].tinygif.url
            }
          />
        ) : (
          <ItemCard key={item._id} title={item.title} image={item.url} />
        )
      )}
    </div>
  );
};

export default CardList;
