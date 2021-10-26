import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStickers } from "../../api";
import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";
import Spinner from "../../components/Spinner";

const Stickers = ({ uploadedItems }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState([]);
  const [stickers, setStickers] = useState([]);
  const uploadedSticker = uploadedItems.filter(
    (ele) => ele.category === "Sticker"
  );

  useEffect(() => {
    // dispatch(authObserverLoading());
    if (stickers.length === 0) {
      setIsLoading(true);

      getStickers()
        .then((res) => {
          setStickers(res.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }
  }, [dispatch]);
  return (
    <div className="row">
      {isLoading && <Spinner color={"rgb(26, 192, 204)"} loading={true} />}
      <div className="col">
        <div className="row">
          {!isLoading && (
            <div className="col col-12">
              <CardList list={[...stickers, ...uploadedSticker]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Stickers);
