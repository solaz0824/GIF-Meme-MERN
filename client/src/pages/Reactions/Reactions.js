import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReactions } from "../../api";
import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";
import Spinner from "../../components/Spinner";

const Reactions = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState([]);
  const [reactions, setReactions] = useState([]);

  useEffect(() => {
    if (reactions.length === 0) {
      setIsLoading(true);
      getReactions()
        .then((res) => {
          setReactions(res.data.results);
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
      {isLoading && <Spinner color={"pink"} loading={true} />}
      <div className="col">
        <div className="row">
          {!isLoading && (
            <div className="col col-12">
              <CardList list={reactions} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Reactions);
