import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmojis } from "../../api";
import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";
import Spinner from "../../components/Spinner";

const Emojis = ({ uploadedItems }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState([]);
  const [emojis, setEmojis] = useState([]);
  const uploadedEmoji = uploadedItems.filter((ele) => ele.category === "Emoji");
  useEffect(() => {
    if (emojis.length === 0) {
      setIsLoading(true);

      getEmojis()
        .then((res) => {
          setEmojis(res.data.results);
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
      {isLoading && <Spinner color={"rgb(245, 121, 6)"} loading={true} />}
      <div className="col">
        <div className="row">
          {!isLoading && (
            <div className="col col-12">
              <CardList list={[...emojis, ...uploadedEmoji]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Emojis);
