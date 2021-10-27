import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRandomItems } from "../../api";

import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";
import Spinner from "../../components/Spinner";
import { filter } from "dom-helpers";

const Images = ({ uploadedItems }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [randomItems, setRandomItems] = useState([]);
  const uploadedFiltered = uploadedItems.filter(
    (ele) => ele.category === "Image"
  );
  useEffect(() => {
    if (randomItems.length === 0) {
      setIsLoading(true);
      getRandomItems()
        .then((res) => {
          setRandomItems(res.data.results);
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
      {isLoading && <Spinner color={"green"} loading={true} />}
      <div className="col">
        <div className="row">
          {!isLoading && (
            <div className="col col-12">
              <CardList list={[...randomItems, ...uploadedFiltered]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Images);
