import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTrending } from "../../api";

import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";
import Spinner from "../../components/Spinner";

const Trending = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  useEffect(() => {
    if (popular.length === 0) {
      setIsLoading(true);

      getTrending()
        .then((res) => {
          setPopular(res.data.results);
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
              <CardList list={popular} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Trending);
