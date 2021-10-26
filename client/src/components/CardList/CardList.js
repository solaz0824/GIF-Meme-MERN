import React from "react";
import ItemCard from "../ItemCard";

const CardList = ({ list }) => {
  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-l g-3 w-100">
      {list.map((item) =>
        item.content_description ? (
          <ItemCard
            key={item.id}
            title={item.content_description}
            image={item.media[0].tinygif.url}
          />
        ) : (
          <ItemCard key={item._id} title={item.title} image={item.url} />
        )
      )}
    </div>
  );
};

export default CardList;
